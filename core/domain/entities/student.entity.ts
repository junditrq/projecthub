import { normalizeArabicName } from '../utils/normalize-arabic-name.util';

export interface CreateStudentProps {
  arabicName: string;
  userId: string | null;
}

export interface StudentProps extends CreateStudentProps {
  id: string;
  normalizedArabicName: string;
}

export class Student {
  constructor(private readonly _props: StudentProps) {}

  get id(): StudentProps['id'] {
    return this._props.id;
  }

  get arabicName(): StudentProps['arabicName'] {
    return this._props.arabicName;
  }

  get normalizedArabicName(): StudentProps['normalizedArabicName'] {
    return this._props.normalizedArabicName;
  }

  get userId(): StudentProps['userId'] {
    return this._props.userId;
  }

  public static create(props: CreateStudentProps): Student {
    return new Student({
      ...props,
      id: crypto.randomUUID(),
      normalizedArabicName: normalizeArabicName(props.arabicName),
    });
  }

  public static reconstitute(props: StudentProps): Student {
    return new Student(props);
  }
}
