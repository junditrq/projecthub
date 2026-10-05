import { DomainValidationError } from '../errors/domain.error';

export class AcademicYear {
  private static readonly LABEL_PATTERN = /^\d{4}-\d{4}$/;
  private constructor(
    private readonly _label: string,
    private readonly _startYear: number
  ) {}

  get label(): string {
    return this._label;
  }

  get startYear(): number {
    return this._startYear;
  }

  get endYear(): number {
    return this._startYear + 1;
  }

  public static create(label: string): AcademicYear {
    const trimmed = label.trim();
    if (!AcademicYear.LABEL_PATTERN.test(trimmed)) {
      throw new DomainValidationError('Invalid academic year format. Expected format: YYYY-YYYY');
    }

    const [start, end] = trimmed.split('-').map(Number);
    if (end !== start + 1) {
      throw new DomainValidationError('Academic year end must be start + 1');
    }

    return new AcademicYear(trimmed, start);
  }

  public static reconstitute(label: string): AcademicYear {
    const start = Number(label.slice(0, 4));
    return new AcademicYear(label, start);
  }

  public equals(other: AcademicYear): boolean {
    return this._label === other._label;
  }

  public isAfter(other: AcademicYear): boolean {
    return this._startYear > other._startYear;
  }

  public isBefore(other: AcademicYear): boolean {
    return this._startYear < other._startYear;
  }

  public toString(): string {
    return this._label;
  }
}
