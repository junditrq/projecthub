import { BusinessRuleError } from '../errors/domain-errors';
import { normalizeArabicName } from '../utils/normalize-arabic-name.util';

export enum UnresolvedMemberType {
  STUDENT_NOT_FOUND = 'StudentNotFound',
  NAME_CONFLICT = 'NameConflict',
}

export type UnresolvedMemberCreateProps = {
  studentId: string | null;
  conflictName: string;
  type: UnresolvedMemberType;
};

export interface UnresolvedMemberProps extends UnresolvedMemberCreateProps {
  id: string;
}

export class UnresolvedMember {
  constructor(private readonly _props: UnresolvedMemberProps) {}

  get id(): UnresolvedMemberProps['id'] {
    return this._props.id;
  }

  get studentId(): UnresolvedMemberProps['studentId'] {
    return this._props.studentId;
  }

  get conflictName(): UnresolvedMemberProps['conflictName'] {
    return this._props.conflictName;
  }

  get type(): UnresolvedMemberProps['type'] {
    return this._props.type;
  }

  public static create(props: UnresolvedMemberCreateProps): UnresolvedMember {
    const { type, studentId, conflictName } = props;

    if (conflictName.trim() === '') {
      throw new BusinessRuleError('Conflict name cannot be empty');
    }

    if (type === UnresolvedMemberType.STUDENT_NOT_FOUND && studentId !== null) {
      throw new BusinessRuleError('Student ID must be null for STUDENT_NOT_FOUND type');
    }

    if (type === UnresolvedMemberType.NAME_CONFLICT && studentId === null) {
      throw new BusinessRuleError('Student ID must not be null for NAME_CONFLICT type');
    }

    const id = crypto.randomUUID();
    return new UnresolvedMember({
      ...props,
      conflictName: normalizeArabicName(props.conflictName),
      id,
    });
  }

  public static reconstitute(props: UnresolvedMemberProps): UnresolvedMember {
    return new UnresolvedMember(props);
  }
}
