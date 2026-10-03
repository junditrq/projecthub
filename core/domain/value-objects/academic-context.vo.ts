import { Specialization } from '../enums/specialization.enum';
import { YearLevel } from '../enums/year-level.enum';
import { AcademicYear } from './academic-year.vo';

export interface AcademicContextProps {
  academicYear: AcademicYear;
  yearLevel: YearLevel;
  specialization: Specialization;
}

export class AcademicContext {
  private constructor(private readonly _props: AcademicContextProps) {}

  get academicYear(): AcademicYear {
    return this._props.academicYear;
  }

  get yearLevel(): YearLevel {
    return this._props.yearLevel;
  }

  get specialization(): Specialization {
    return this._props.specialization;
  }

  public static create(props: AcademicContextProps): AcademicContext {
    return new AcademicContext(props);
  }

  public static reconstitute(props: AcademicContextProps): AcademicContext {
    return new AcademicContext(props);
  }

  public equals(other: AcademicContext): boolean {
    return (
      this.academicYear.equals(other.academicYear) &&
      this.yearLevel === other.yearLevel &&
      this.specialization === other.specialization
    );
  }

  public toString(): string {
    return `${this.academicYear.toString()} - ${this.yearLevel} - ${this.specialization}`;
  }
}
