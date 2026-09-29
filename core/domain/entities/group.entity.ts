import { BusinessRuleError } from '../errors/domain-errors';
import { Specialization } from './specialization.enum';
import { UnresolvedMember } from './unresolved-member.entity';

export interface GroupCreateProps {
  projectIdeaId: string;
  academicYearId: string;
  subjectId: string;
  specialization: Specialization;
  memberIds: readonly string[];
  unresolvedMembers: readonly UnresolvedMember[];
}

export interface GroupProps extends GroupCreateProps {
  id: string;
}

export class Group {
  private readonly _props: GroupProps;

  constructor(props: GroupProps) {
    this._props = {
      ...props,
      memberIds: [...props.memberIds],
      unresolvedMembers: [...props.unresolvedMembers],
    };
  }

  get id(): GroupProps['id'] {
    return this._props.id;
  }

  get projectIdeaId(): GroupProps['projectIdeaId'] {
    return this._props.projectIdeaId;
  }

  get academicYearId(): GroupProps['academicYearId'] {
    return this._props.academicYearId;
  }

  get subjectId(): GroupProps['subjectId'] {
    return this._props.subjectId;
  }

  get specialization(): GroupProps['specialization'] {
    return this._props.specialization;
  }

  get memberIds(): readonly string[] {
    return [...this._props.memberIds];
  }

  get unresolvedMembers(): readonly UnresolvedMember[] {
    return [...this._props.unresolvedMembers];
  }

  public static create(props: GroupCreateProps) {
    const { unresolvedMembers, memberIds } = props;

    if (unresolvedMembers.length === 0 && memberIds.length === 0) {
      throw new BusinessRuleError('A group must at least have one member.');
    }

    if (new Set(memberIds).size !== memberIds.length) {
      throw new BusinessRuleError('A group cannot have duplicate members.');
    }

    const conflictKeys = new Set<string>();
    const conflictNames = new Set<string>();
    const notFoundNames = new Set<string>();

    for (const unresolved of unresolvedMembers) {
      if (unresolved.studentId === null) {
        if (notFoundNames.has(unresolved.conflictName)) {
          throw new BusinessRuleError(
            `Duplicate not-found unresolved member: ${unresolved.conflictName}`
          );
        }

        if (conflictNames.has(unresolved.conflictName)) {
          throw new BusinessRuleError(
            `Unresolved member cannot be both not-found and conflicting: ${unresolved.conflictName}`
          );
        }

        notFoundNames.add(unresolved.conflictName);
        continue;
      }

      if (memberIds.includes(unresolved.studentId)) {
        throw new BusinessRuleError(
          `Student ${unresolved.studentId} cannot be both a resolved and an unresolved member.`
        );
      }

      const key = `${unresolved.conflictName}-${unresolved.studentId}`;

      if (conflictKeys.has(key)) {
        throw new BusinessRuleError(`Duplicate unresolved group member: ${key}`);
      }

      if (notFoundNames.has(unresolved.conflictName)) {
        throw new BusinessRuleError(
          `Unresolved member cannot be both not-found and conflicting: ${unresolved.conflictName}`
        );
      }

      conflictKeys.add(key);
      conflictNames.add(unresolved.conflictName);
    }

    const id = crypto.randomUUID();
    return new Group({ ...props, id });
  }

  public static reconstitute(props: GroupProps): Group {
    return new Group(props);
  }
}
