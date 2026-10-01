"""
Extract student records (STD_ID, SEQUENCE_NUM_FORCOLL, STD_ALLNAME,
STD_FATHER_NAME) from the college PDF export and emit JSON matching
SeedStudentsFileSchema.

WHY NOT pdftotext / pdfplumber:
Both tools decode this PDF's embedded font correctly for ~99% of
characters, but the font encodes certain Arabic ligatures (a LAM
immediately followed by an ALEF, and the "Allah" tail ligature LAM-LAM-HA)
as connected glyphs whose ToUnicode mapping is reversed. This corrupts
otherwise-correct names, e.g.:
    طلال  (Talal)  -> طالل
    جلال  (Jalal)  -> جالل
    الاحمد (Al-Ahmad) -> االحمد
    عبدالله (Abdullah) -> عبدهللا
Because the bug lives in the font's character mapping, it reproduces
identically no matter which text-extraction library you use -- so no
amount of "-raw" / "-layout" flags or bidi/reshaping post-processing on
the plain text fixes it. The only reliable fix is to look at each
character's on-page x-position: characters that come from a single
merged ligature glyph land at (almost) identical x-origins, while two
normally-typed adjacent characters never do. That signal lets us find
and reverse exactly the corrupted spans and nothing else.

Usage:
    pip install pymupdf --break-system-packages
    python3 extract_students.py ids.pdf \
        --academic-year 2024-2025 \
        --specialization GENERAL \
        --year-level THIRD \
        --output-dir mydir
    # writes mydir/2024-2025__third__general__ids.json
"""

import argparse
import json
import os
import re
import sys

import fitz  # PyMuPDF

# Token classifiers only (which token is the college-id candidate vs a
# sequence/exam number vs a data block). ID_RE keeps the exactly-10 check
# for identification, matching the downstream contract; validity is enforced
# at import by SeedCollegeIdSchema + Student.create, which refuse bad records.
ID_RE = re.compile(r"^\d{10}$")
ID_ANY_RE = re.compile(r"\d{10}")
SEQ_RE = re.compile(r"^\d{4,6}$")
# Trailing status column (مستجد/قديم) present in newer exports -- never part
# of a name. Header rows in any language contain no student number.
STATUS_TOKENS = {"مستجد", "قديم"}

# Canonical values mirrored from the app (keep in sync by hand):
# - SPECIALIZATIONS mirrors the `Specialization` enum
#   (core/domain/entities/specialization.enum.ts) via SeedSpecializationSchema
#   (core/infra/seeding/academic/schemas/specialization.schema.ts).
# - YEAR_LEVELS mirrors the `YearLevel` enum
#   (core/domain/entities/subject.entity.ts) via SeedYearLevelSchema
#   (core/infra/seeding/academic/schemas/year-level.schema.ts).
# - YEAR_SPECIALIZATION_MAP mirrors `YEAR_SPECIALIZATION_MAP`
#   (core/domain/constants/year-specialization.constant.ts) as enforced by
#   CurriculumService.isSpecializationInYearLevel
#   (core/domain/services/curriculum.service.ts) on ids files
#   (core/infra/seeding/academic/validators/file.validator.ts).
SPECIALIZATIONS = {"SWE", "AI", "NET", "GENERAL"}
YEAR_LEVELS = {"THIRD", "FOURTH", "FIFTH"}
# Mirrors SeedAcademicYearSchema
# (core/infra/seeding/academic/schemas/academic-year.schema.ts): YYYY-YYYY
# with the second year exactly one more than the first.
ACADEMIC_YEAR_RE = re.compile(r"^\d{4}-\d{4}$")
YEAR_SPECIALIZATION_MAP = {
    "THIRD": ["GENERAL"],
    "FOURTH": ["AI", "NET", "SWE"],
    "FIFTH": ["AI", "NET", "SWE"],
}


def normalize_enum(raw: str | None, allowed: set[str], flag_name: str) -> str:
    """Upper-case `raw` and refuse values outside `allowed` (case-insensitive)."""
    v = (raw or "").strip().upper()
    if v not in allowed:
        raise ValueError(
            f"{flag_name} must be one of {sorted(allowed)} "
            f"(case-insensitive), got {raw!r}"
        )
    return v


def normalize_academic_year(raw: str | None) -> str:
    """Validate `raw` against SeedAcademicYearSchema, refuse mismatches."""
    v = (raw or "").strip()
    if not ACADEMIC_YEAR_RE.match(v):
        raise ValueError(f"--academic-year must match YYYY-YYYY, got {raw!r}")
    start, end = map(int, v.split("-"))
    if end != start + 1:
        raise ValueError(
            f"--academic-year second year must be first year + 1, got {raw!r}"
        )
    return v


def is_specialization_in_year_level(specialization: str, year_level: str) -> bool:
    """Mirror of CurriculumService.isSpecializationInYearLevel."""
    return specialization in YEAR_SPECIALIZATION_MAP[year_level]

LAM = "ل"
ALEF = "ا"


def fix_ligature_chars(chars: list[dict]) -> str:
    """Reverse the mis-decoded LAM+ALEF ligature.

    `chars` is PyMuPDF rawdict char entries: {"c": <str>, "origin": (x, y), ...}
    in stream order. Whenever character i+1 is ALEF and shares an
    (almost) identical x-origin with character i -- meaning the two were
    rendered as one connected glyph -- and character i+2 is LAM, the true
    logical order is [..., i, LAM, ALEF, ...], not [..., i, ALEF, LAM, ...].
    """
    out = [c["c"] for c in chars]
    n = len(out)
    i = 0
    while i < n - 2:
        x1 = chars[i]["origin"][0]
        x2 = chars[i + 1]["origin"][0]
        if out[i + 1] == ALEF and out[i + 2] == LAM and abs(x1 - x2) < 0.5:
            out[i + 1], out[i + 2] = out[i + 2], out[i + 1]
            i += 3
            continue
        i += 1
    return "".join(out)


def fix_allah_ligature(text: str) -> str:
    """Reverse the mis-decoded Allah-tail ligature: هللا -> الله, هلل -> لله."""
    text = re.sub(r"هللا", lambda m: m.group()[::-1], text)
    text = re.sub(r"هلل", lambda m: m.group()[::-1], text)
    return text


def clean(text: str) -> str:
    return fix_allah_ligature(text).strip()


def extract(pdf_path: str):
    doc = fitz.open(pdf_path)
    records = []
    problems = []

    for pno, page in enumerate(doc):
        rd = page.get_text("rawdict")
        for b in rd["blocks"]:
            lines = b.get("lines", [])
            if not lines:
                continue

            line_texts: dict[int, list[str]] = {}
            for lidx, l in enumerate(lines):
                for s in l["spans"]:
                    corrected = fix_ligature_chars(s["chars"])
                    line_texts.setdefault(lidx, []).append(corrected)

            flat = " ".join(" ".join(v) for v in line_texts.values())
            if (
                "STD_ID" in flat
                or "STD_ALLNAME" in flat
                or "STD_FATHER_NAME" in flat
                or not ID_ANY_RE.search(flat)
            ):
                continue  # header row (any language) or non-data block

            # Field assignment is positional, not header-anchored: the first
            # 10-digit token is the college id (STD_ID / رقم الطالب /
            # الرقم الجامعي). Any sequence/exam-number column
            # (SEQUENCE_NUM_FORCOLL / الرقم الامتحاني) is stripped and ignored.
            std_id = None
            allname = None
            father_parts = []

            for lidx in sorted(line_texts.keys()):
                joined = " ".join(line_texts[lidx]).strip()
                if not joined or joined in STATUS_TOKENS:
                    continue  # status column (مستجد/قديم), never a name
                tokens = joined.split()
                if not tokens:
                    continue
                first = tokens[0]
                if ID_RE.match(first):
                    std_id = first
                    rest = " ".join(tokens[1:])
                    if rest and allname is None:
                        # Newer layout: id + name share one line
                        # (e.g. "1722195227 ابتسام خرما").
                        allname = rest
                elif SEQ_RE.match(first):
                    # Sequence/exam-number prefix -- ignore number, keep name.
                    if allname is None:
                        allname = " ".join(tokens[1:]) or None
                elif allname is None:
                    allname = joined
                else:
                    father_parts.append(joined)

            if not std_id or allname is None:
                problems.append((pno, b["bbox"], line_texts))
                continue

            records.append(
                {
                    "collegeId": std_id,
                    "name": clean(allname),
                    "fatherName": clean(" ".join(father_parts)),
                }
            )

    return records, problems


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    ap.add_argument("pdf", help="path to the input PDF")
    ap.add_argument(
        "--output-dir",
        default=".",
        help="directory for the auto-named output file: "
        "<academic-year>__<year-level>__<specialization>__ids.json "
        "(e.g. mydir/2024-2025__third__general__ids.json)",
    )
    ap.add_argument(
        "--academic-year",
        required=True,
        help="value for the academicYear field: format YYYY-YYYY where "
        "the second year is the first year plus one (e.g. 2024-2025)",
    )
    ap.add_argument(
        "--specialization",
        required=True,
        help="value for the specialization field: one of SWE, AI, NET, "
        "GENERAL (case-insensitive)",
    )
    ap.add_argument(
        "--year-level",
        required=True,
        help="value for the yearLevel field: one of THIRD, FOURTH, FIFTH "
        "(case-insensitive)",
    )
    args = ap.parse_args()

    try:
        academic_year = normalize_academic_year(args.academic_year)
        specialization = normalize_enum(
            args.specialization, SPECIALIZATIONS, "--specialization"
        )
        year_level = normalize_enum(args.year_level, YEAR_LEVELS, "--year-level")
    except ValueError as e:
        ap.error(str(e))
    if not is_specialization_in_year_level(specialization, year_level):
        ap.error(
            f"Specialization {specialization} is not allowed "
            f"for year level {year_level}"
        )

    records, problems = extract(args.pdf)
    print(
        f"Extracted {len(records)} records, {len(problems)} unparsed rows",
        file=sys.stderr,
    )
    for p in problems:
        print("  UNPARSED ROW:", p, file=sys.stderr)

    students = []
    for r in records:
        student = {
            "name": r["name"],
            "fatherName": r["fatherName"],
            "collegeId": r["collegeId"],
        }
        students.append(student)

    out = {
        "academicYear": academic_year,
        "specialization": specialization,
        "yearLevel": year_level,
        "students": students,
    }

    filename = (
        f"{academic_year}__{year_level.lower()}__"
        f"{specialization.lower()}__ids.json"
    )
    os.makedirs(args.output_dir, exist_ok=True)
    output_path = os.path.join(args.output_dir, filename)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print(f"Wrote {output_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
