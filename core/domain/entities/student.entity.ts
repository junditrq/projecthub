import { getCanonicalFullName } from '../utils/get-canonical-full-name.util';

export interface CreateStudentProps {
  name: string;
  fatherName: string;
  collegeId: number;
  userId: string | null;
}

export interface StudentProps extends CreateStudentProps {
  id: string;
  canonicalFullName: string;
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

  public static create(props: CreateStudentProps): Student {
    return new Student({
      ...props,
      id: crypto.randomUUID(),
      canonicalFullName: getCanonicalFullName(props.name, props.fatherName),
    });
  }

  public static reconstitute(props: StudentProps): Student {
    return new Student(props);
  }
}
