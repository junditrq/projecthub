import type { IFileValidator, ParsedPathParts } from '../validators/file.validator.interface';
import type { SeedGroupsFile } from '../schemas/groups-file.schema';
import type { SeedStudentsFile } from '../schemas/students-file.schema';
import { normalizeFileArg } from './academic.shared';
import { IFileRepo } from '../repos/file.repo.interface';

export type ValidateIssueStage = 'discovery' | 'path' | 'read' | 'content' | 'consistency';

export type ValidateIssue = {
  file: string;
  stage: ValidateIssueStage;
  message: string;
  level: 'error' | 'warn';
};

export type ValidateReport = {
  /** All targeted files, oldest-first. */
  files: string[];
  idsCount: number;
  groupsCount: number;
  /** Parsed payloads, only for fully valid files, oldest-first. Reused by import. */
  studentsFiles: SeedStudentsFile[];
  groupsFiles: SeedGroupsFile[];
  issues: ValidateIssue[];
  ok: boolean;
};

export type ValidateDeps = {
  dataPath: string;
  fileRepo: IFileRepo;
  fileValidator: IFileValidator;
};

const isIdsFile = (file: string): boolean => file.endsWith('ids.json');

/** Derives `<year>__<level>__<spec>__ids.json` from a group file name. */
const expectedIdsFile = (groupFile: string): string | null => {
  const parts = groupFile.split('__');
  if (parts.length !== 4) return null;
  return `${parts[0]}__${parts[1]}__${parts[2]}__ids.json`;
};

/**
 * Single source of truth for academic file validation.
 * Used by both `academic validate` and as the gate for `academic import`.
 * Collects all errors instead of failing fast.
 */
export const runValidate = async (
  deps: ValidateDeps,
  options: { file?: string } = {}
): Promise<ValidateReport> => {
  const { dataPath, fileRepo, fileValidator } = deps;
  const issues: ValidateIssue[] = [];
  const studentsFiles: SeedStudentsFile[] = [];
  const groupsFiles: SeedGroupsFile[] = [];

  let targets: string[];
  let listing: string[] | null = null;

  if (options.file !== undefined) {
    const normalized = normalizeFileArg(dataPath, options.file);
    if (!normalized.ok) {
      return {
        files: [options.file],
        idsCount: 0,
        groupsCount: 0,
        studentsFiles,
        groupsFiles,
        issues: [{ file: options.file, stage: 'path', message: normalized.error, level: 'error' }],
        ok: false,
      };
    }
    targets = [normalized.file];
  } else {
    const discovered = await fileRepo.getFiles();
    if (!discovered.success) {
      return {
        files: [],
        idsCount: 0,
        groupsCount: 0,
        studentsFiles,
        groupsFiles,
        issues: [
          { file: '(discovery)', stage: 'discovery', message: discovered.error, level: 'error' },
        ],
        ok: false,
      };
    }
    // Lexicographic sort matches academic-year labels: oldest years first.
    listing = [...discovered.files].sort();
    targets = listing;
  }

  const idsTargets = targets.filter(isIdsFile);
  const groupTargets = targets.filter((f) => !isIdsFile(f));

  // P1 — path validation for every target.
  const pathPartsByFile = new Map<string, ParsedPathParts>();
  for (const file of targets) {
    const validated = await fileValidator.validateFilePath(file);
    if (!validated.ok) {
      issues.push({ file, stage: 'path', message: validated.error.message, level: 'error' });

      continue;
    }
    pathPartsByFile.set(file, validated.value);
  }

  // P2 — content + path/content consistency, ids first then groups.
  for (const file of idsTargets) {
    if (!pathPartsByFile.has(file)) continue;
    const raw = await fileRepo.readFileContent(file);
    if (!raw.success) {
      issues.push({ file, stage: 'read', message: raw.error, level: 'error' });
      continue;
    }
    const validated = fileValidator.validateIdsContent(raw.data);
    if (!validated.ok) {
      issues.push({ file, stage: 'content', message: validated.error.message, level: 'error' });
      continue;
    }
    const consistent = fileValidator.validateIdsConsistency(
      pathPartsByFile.get(file)!,
      validated.value
    );
    if (!consistent.ok) {
      issues.push({
        file,
        stage: 'consistency',
        message: consistent.error.message,
        level: 'error',
      });
      continue;
    }
    studentsFiles.push(validated.value);
  }

  for (const file of groupTargets) {
    if (!pathPartsByFile.has(file)) continue;
    const raw = await fileRepo.readFileContent(file);
    if (!raw.success) {
      issues.push({ file, stage: 'read', message: raw.error, level: 'error' });
      continue;
    }
    const validated = await fileValidator.validateGroupsContent(raw.data);
    if (!validated.ok) {
      issues.push({ file, stage: 'content', message: validated.error.message, level: 'error' });
      continue;
    }
    const consistent = fileValidator.validateGroupsConsistency(
      pathPartsByFile.get(file)!,
      validated.value
    );
    if (!consistent.ok) {
      issues.push({
        file,
        stage: 'consistency',
        message: consistent.error.message,
        level: 'error',
      });
      continue;
    }
    groupsFiles.push(validated.value);
  }

  // Orphan-group warning: no matching ids file for this year/level/spec.
  // Warn only — validation of the file itself already passed.
  if (listing === null) {
    const discovered = await fileRepo.getFiles();
    if (discovered.success) listing = discovered.files;
  }
  if (listing !== null) {
    const known = new Set(listing);
    for (const file of groupTargets) {
      if (!pathPartsByFile.has(file)) continue;
      const expected = expectedIdsFile(file);
      if (expected && !known.has(expected)) {
        issues.push({
          file,
          stage: 'consistency',
          message: `No matching ids file (${expected}) found for this group file.`,
          level: 'warn',
        });
      }
    }
  }

  return {
    files: targets,
    idsCount: idsTargets.length,
    groupsCount: groupTargets.length,
    studentsFiles,
    groupsFiles,
    issues,
    ok: !issues.some((i) => i.level === 'error'),
  };
};
