import { Group } from '@/core/domain/entities/group.entity';
import { Prisma } from '../orm/prisma/generated';
import { PrismaSpecializationMapper } from './specialization.prisma.mapper';
import { PrismaUnresolvedGroupMemberMapper } from './unresolved-group-member.prisma.mapper';
import { GroupSaveContext } from '@/core/domain/repos/group.repo';
import { AcademicYear } from '@/core/domain/value-objects/academic-year.vo';

export const prismaGroupWithMembers = {
  include: {
    groupMembers: true,
    unresolvedGroupMembers: true,
  },
} satisfies Prisma.GroupDefaultArgs;

export type PrismaGroupWithMembers = Prisma.GroupGetPayload<typeof prismaGroupWithMembers>;

export class PrismaGroupMapper {
  public static toDomain(prismaGroup: PrismaGroupWithMembers): Group {
    return Group.reconstitute({
      id: prismaGroup.id,
      projectIdeaId: prismaGroup.projectIdeaId,
      subjectId: prismaGroup.subjectId,
      academicYear: AcademicYear.reconstitute(prismaGroup.academicYear),
      specialization: PrismaSpecializationMapper.toDomain(prismaGroup.specialization),
      memberIds: prismaGroup.groupMembers.map((member) => member.studentId),
      unresolvedMembers: prismaGroup.unresolvedGroupMembers.map(
        PrismaUnresolvedGroupMemberMapper.toDomain
      ),
    });
  }

  private static nestedMembers(group: Group) {
    return {
      groupMembers: {
        createMany: { data: group.memberIds.map((studentId) => ({ studentId })) },
      },
      unresolvedGroupMembers: {
        createMany: {
          data: group.unresolvedMembers.map(
            PrismaUnresolvedGroupMemberMapper.toPersistenceCreateMany
          ),
        },
      },
    } satisfies Pick<Prisma.GroupUncheckedCreateInput, 'groupMembers' | 'unresolvedGroupMembers'>;
  }

  public static toPersistenceCreate(
    group: Group,
    context: GroupSaveContext
  ): Prisma.GroupUncheckedCreateInput {
    const { seedHash } = context;
    return {
      id: group.id,
      projectIdeaId: group.projectIdeaId,
      subjectId: group.subjectId,
      academicYear: group.academicYear.toString(),
      specialization: PrismaSpecializationMapper.toPersistence(group.specialization),
      seedHash: seedHash,
      ...this.nestedMembers(group),
    };
  }

  public static toPersistenceUpdate(group: Group): Prisma.GroupUncheckedUpdateInput {
    const { groupMembers, unresolvedGroupMembers } = this.nestedMembers(group);
    return {
      groupMembers: {
        deleteMany: {},
        ...groupMembers,
      },
      unresolvedGroupMembers: {
        deleteMany: {},
        ...unresolvedGroupMembers,
      },
    };
  }
}
