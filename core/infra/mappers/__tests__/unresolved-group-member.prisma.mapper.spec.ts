import { describe, it, expect } from 'vitest';
import {
  UnresolvedGroupMemberType as PrismaUnresolvedGroupMemberType,
  UnresolvedGroupMember as PrismaUnresolvedGroupMember,
} from '@/core/infra/orm/prisma/generated';
import {
  UnresolvedMember,
  UnresolvedMemberType,
} from '@/core/domain/entities/unresolved-member.entity';
import {
  PrismaUnresolvedGroupMemberMapper,
  PrismaUnresolvedGroupMemberTypeMapper,
} from '../unresolved-group-member.prisma.mapper';

describe('PrismaUnresolvedGroupMemberTypeMapper', () => {
  it('maps both unresolved types in both directions', () => {
    const pairs: Array<[PrismaUnresolvedGroupMemberType, UnresolvedMemberType]> = [
      [PrismaUnresolvedGroupMemberType.NAME_CONFLICT, UnresolvedMemberType.NAME_CONFLICT],
      [PrismaUnresolvedGroupMemberType.STUDENT_NOT_FOUND, UnresolvedMemberType.STUDENT_NOT_FOUND],
    ];

    for (const [prisma, domain] of pairs) {
      expect(PrismaUnresolvedGroupMemberTypeMapper.toDomain(prisma)).toBe(domain);
      expect(PrismaUnresolvedGroupMemberTypeMapper.toPersistence(domain)).toBe(prisma);
    }
  });

  it('fails loudly on unknown enum values instead of misclassifying', () => {
    expect(() =>
      PrismaUnresolvedGroupMemberTypeMapper.toDomain('SOMETHING_NEW' as never)
    ).toThrow();
    expect(() =>
      PrismaUnresolvedGroupMemberTypeMapper.toPersistence('SOMETHING_NEW' as never)
    ).toThrow();
  });
});

describe('PrismaUnresolvedGroupMemberMapper', () => {
  const prismaRow: PrismaUnresolvedGroupMember = {
    id: 'um-1',
    groupId: 'g-1',
    studentId: 's-9',
    conflictName: 'احمد',
    unresolvedType: PrismaUnresolvedGroupMemberType.NAME_CONFLICT,
  };

  it('hydrates a domain member without validation', () => {
    const member = PrismaUnresolvedGroupMemberMapper.toDomain(prismaRow);

    expect(member.id).toBe('um-1');
    expect(member.studentId).toBe('s-9');
    expect(member.conflictName).toBe('احمد');
    expect(member.type).toBe(UnresolvedMemberType.NAME_CONFLICT);
  });

  it('builds create-many rows carrying ids, names, types, and nullable student ids', () => {
    const member = UnresolvedMember.create({
      conflictName: 'احمد',
      studentId: null,
      type: UnresolvedMemberType.STUDENT_NOT_FOUND,
    });

    const row = PrismaUnresolvedGroupMemberMapper.toPersistenceCreateMany(member);

    expect(row).toMatchObject({
      id: member.id,
      conflictName: 'احمد',
      unresolvedType: PrismaUnresolvedGroupMemberType.STUDENT_NOT_FOUND,
      studentId: null,
    });
  });
});
