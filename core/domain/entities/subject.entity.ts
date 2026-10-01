import { BusinessRuleError } from '../errors/domain-errors';
import { Specialization } from './specialization.enum';

export enum YearLevel {
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  FIFTH = 'FIFTH',
}

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
  constructor(private readonly _props: SubjectProps) {}

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

  get allowedSpecializations(): SubjectProps['allowedSpecializations'] {
    return this._props.allowedSpecializations;
  }

  allowsSpecialization(specialization: Specialization): boolean {
    return this._props.allowedSpecializations.includes(specialization);
  }
  belongsToYearLevel(yearLevel: YearLevel): boolean {
    return this._props.yearLevel === yearLevel;
  }

  public static create(props: SubjectCreateProps): Subject {
    if (props.name.trim() === '' || props.slug.trim() === '') {
      throw new BusinessRuleError('Name and slug cannot be empty');
    }
    if (props.allowedSpecializations.length === 0) {
      throw new BusinessRuleError('At least one specialization must be allowed');
    }
    const id = crypto.randomUUID();
    return new Subject({ ...props, id });
  }

  public static reconstitute(props: SubjectProps): Subject {
    return new Subject(props);
  }
}
