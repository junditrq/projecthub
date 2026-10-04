import { Specialization } from '../enums/specialization.enum';
import { YearLevel } from '../enums/year-level.enum';
import { DomainValidationError } from '../errors/domain.error';

export interface SubjectCreateProps {
  name: string;
  slug: string;
  yearLevel: YearLevel;
  allowedSpecializations: Specialization[];
}

export interface SubjectProps extends SubjectCreateProps {
  id: string;
}

export class Subject {
  private readonly _props: SubjectProps;

  constructor(props: SubjectProps) {
    this._props = {
      ...props,
      allowedSpecializations: [...props.allowedSpecializations],
    };
  }

  get id(): SubjectProps['id'] {
    return this._props.id;
  }

  get name(): SubjectProps['name'] {
    return this._props.name;
  }

  get slug(): SubjectProps['slug'] {
    return this._props.slug;
  }

  get yearLevel(): SubjectProps['yearLevel'] {
    return this._props.yearLevel;
  }

  get allowedSpecializations(): readonly Specialization[] {
    return [...this._props.allowedSpecializations];
  }

  allowsSpecialization(specialization: Specialization): boolean {
    return this._props.allowedSpecializations.includes(specialization);
  }
  belongsToYearLevel(yearLevel: YearLevel): boolean {
    return this._props.yearLevel === yearLevel;
  }

  public static create(props: SubjectCreateProps): Subject {
    if (props.name.trim() === '' || props.slug.trim() === '') {
      throw new DomainValidationError('Name and slug cannot be empty');
    }
    if (props.allowedSpecializations.length === 0) {
      throw new DomainValidationError('At least one specialization must be allowed');
    }
    const id = crypto.randomUUID();
    return new Subject({ ...props, id });
  }

  public static reconstitute(props: SubjectProps): Subject {
    return new Subject(props);
  }
}
