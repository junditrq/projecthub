import { BusinessRuleError } from '../errors/domain-errors';
import { getCanonicalFullName } from '../utils/get-canonical-full-name.util';
import { normalizeArabicName } from '../utils/normalize-arabic-name.util';

export interface StudentCreateProps {
  name: string;
  fatherName: string;
  collegeId: string;
  userId: string | null;
}

export interface StudentProps extends StudentCreateProps {
  id: string;
  canonicalFullName: string;
  normalizedName: string;
}

export class Student {
  constructor(private readonly _props: StudentProps) {}

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

  public static create(props: StudentCreateProps): Student {
    if (props.name.trim() === '') {
      throw new BusinessRuleError('Student name cannot be empty');
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
