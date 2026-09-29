import { Specialization } from './specialization.enum';

export enum YearLevel {
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  FIFTH = 'FIFTH',
}

export interface SubjectProps {
  id: string;
  name: string;
  slug: string;
  yearLevel: YearLevel;
  allowedSpecializations: Specialization[];
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

  public static reconstitute(props: SubjectProps): Subject {
    return new Subject(props);
  }
}
