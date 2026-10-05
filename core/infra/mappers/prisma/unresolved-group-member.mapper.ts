import {
  UnresolvedMember,
  UnresolvedMemberType,
} from '@/core/domain/entities/unresolved-member.entity';
import {
  Prisma,
  UnresolvedGroupMember as PrismaUnresolvedGroupMember,
  UnresolvedGroupMemberType as PrismaUnresolvedGroupMemberType,
} from '../../orm/prisma/generated';

export class PrismaUnresolvedGroupMemberTypeMapper {
  public static toDomain(prismaType: PrismaUnresolvedGroupMemberType): UnresolvedMemberType {
    switch (prismaType) {
      case PrismaUnresolvedGroupMemberType.NAME_CONFLICT:
        return UnresolvedMemberType.NAME_CONFLICT;
      case PrismaUnresolvedGroupMemberType.STUDENT_NOT_FOUND:
        return UnresolvedMemberType.STUDENT_NOT_FOUND;
      default:
        throw new Error(`Unknown PrismaUnresolvedGroupMemberType: ${prismaType}`);
    }
  }

  public static toPersistence(domainType: UnresolvedMemberType): PrismaUnresolvedGroupMemberType {
    switch (domainType) {
      case UnresolvedMemberType.NAME_CONFLICT:
        return PrismaUnresolvedGroupMemberType.NAME_CONFLICT;
      case UnresolvedMemberType.STUDENT_NOT_FOUND:
        return PrismaUnresolvedGroupMemberType.STUDENT_NOT_FOUND;
      default:
        throw new Error(`Unknown UnresolvedMemberType: ${domainType}`);
    }
  }
}

export class PrismaUnresolvedGroupMemberMapper {
  public static toDomain(
    prismaUnresolvedGroupMember: PrismaUnresolvedGroupMember
  ): UnresolvedMember {
    return UnresolvedMember.reconstitute({
      id: prismaUnresolvedGroupMember.id,
      studentId: prismaUnresolvedGroupMember.studentId,
      conflictName: prismaUnresolvedGroupMember.conflictName,
      type: PrismaUnresolvedGroupMemberTypeMapper.toDomain(
        prismaUnresolvedGroupMember.unresolvedType
      ),
    });
  }

  public static toPersistenceCreateMany(
    unresolvedMember: UnresolvedMember
  ): Prisma.UnresolvedGroupMemberCreateManyGroupInput {
    return {
      id: unresolvedMember.id,
      conflictName: unresolvedMember.conflictName,
      unresolvedType: PrismaUnresolvedGroupMemberTypeMapper.toPersistence(unresolvedMember.type),
      studentId: unresolvedMember.studentId,
    };
  }
}
