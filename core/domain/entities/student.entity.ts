import { BusinessRuleError } from '../errors/domain-errors';
import { getCanonicalFullName } from '../utils/get-canonical-full-name.util';
import { normalizeArabicName } from '../utils/normalize-arabic-name.util';
import { AcademicContext } from '../value-objects/academic-context.vo';

export interface StudentCreateProps {
  name: string;
  fatherName: string;
  collegeId: string;
  userId: string | null;
  enrollments: AcademicContext[];
}

export interface StudentProps extends StudentCreateProps {
  id: string;
  canonicalFullName: string;
  normalizedName: string;
}

export class Student {
  private static readonly COLLEGE_ID_PATTERN = /^\d{10}$/;
  constructor(private readonly _props: StudentProps) {
    this._props = {
      ..._props,
      enrollments: [..._props.enrollments],
    };
  }

  get id(): StudentProps['id'] {
    return this._props.id;
  }

  get name(): StudentProps['name'] {
    return this._props.name;
  }

  get fatherName(): StudentProps['fatherName'] {
    return this._props.fatherName;
  }

  get collegeId(): StudentProps['collegeId'] {
    return this._props.collegeId;
  }

  get canonicalFullName(): StudentProps['canonicalFullName'] {
    return this._props.canonicalFullName;
  }

  get userId(): StudentProps['userId'] {
    return this._props.userId;
  }

  get normalizedName(): StudentProps['normalizedName'] {
    return this._props.normalizedName;
  }

  get enrollments(): StudentProps['enrollments'] {
    return [...this._props.enrollments];
  }

  public recordEnrollment(enrollment: AcademicContext): 'recored' | 'exists' {
    const existing = this._props.enrollments.find((e) =>
      e.academicYear.equals(enrollment.academicYear)
    );

    if (existing && !existing.equals(enrollment)) {
      throw new BusinessRuleError(
        `${this.collegeId} already has an enrollment for academic year ${enrollment.academicYear.label}` +
          `. Existing enrollment: ${existing.yearLevel} - ${existing.specialization}, ` +
          `New enrollment: ${enrollment.yearLevel} - ${enrollment.specialization}`
      );
    }

    if (existing) {
      return 'exists';
    }

    this._props.enrollments.push(enrollment);
    return 'recored';
  }

  public getCurrentEnrollment(): AcademicContext {
    if (this._props.enrollments.length === 0) {
      throw new BusinessRuleError('Student has no enrollments');
    }
    return this._props.enrollments.reduce((latest, current) => {
      return current.academicYear.isAfter(latest.academicYear) ? current : latest;
    });
  }

  public static create(props: StudentCreateProps): Student {
    if (props.name.trim() === '') {
      throw new BusinessRuleError('Student name cannot be empty');
    }
    if (!Student.COLLEGE_ID_PATTERN.test(props.collegeId)) {
      throw new BusinessRuleError('Student collegeId must be exactly 10 digits');
    }

    if (props.enrollments.length === 0) {
      throw new BusinessRuleError('Student must have at least one enrollment');
    }

    const years = props.enrollments.map((e) => e.academicYear.label);
    const uniqueYears = new Set(years);
    if (uniqueYears.size !== years.length) {
      throw new BusinessRuleError('Student enrollments must have unique academic years');
    }

    return new Student({
      ...props,
      id: crypto.randomUUID(),
      canonicalFullName: getCanonicalFullName(props.name, props.fatherName),
      normalizedName: normalizeArabicName(props.name),
    });
  }

  public static reconstitute(props: StudentProps): Student {
    return new Student(props);
  }
}
