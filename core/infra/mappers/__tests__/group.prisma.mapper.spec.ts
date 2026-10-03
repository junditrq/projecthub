import { describe, it, expect } from 'vitest';
import {
  Specialization as PrismaSpecialization,
  UnresolvedGroupMemberType as PrismaUnresolvedGroupMemberType,
} from '@/core/infra/orm/prisma/generated';
import { Group } from '@/core/domain/entities/group.entity';
import { Specialization } from '@/core/domain/entities/specialization.enum';
import {
  UnresolvedMember,
  UnresolvedMemberType,
} from '@/core/domain/entities/unresolved-member.entity';
import { PrismaGroupMapper, PrismaGroupWithMembers } from '../group.prisma.mapper';
import { AcademicYear } from '@/core/domain/value-objects/academic-year.vo';

const persistedGroup = (): PrismaGroupWithMembers => ({
  id: 'g-1',
  seedHash: 'hash-1',
  projectIdeaId: 'idea-1',
  academicYear: '2025-2026',
  subjectId: 'subject-1',
  specialization: PrismaSpecialization.AI,
  createdAt: new Date(),
  updatedAt: new Date(),
  groupMembers: [{ groupId: 'g-1', studentId: 's-1' }],
  unresolvedGroupMembers: [
    {
      id: 'um-1',
      groupId: 'g-1',
      studentId: null,
      conflictName: 'احمد',
      unresolvedType: PrismaUnresolvedGroupMemberType.STUDENT_NOT_FOUND,
    },
  ],
});

const domainGroup = (): Group =>
  Group.create({
    projectIdeaId: 'idea-1',
    academicYear: AcademicYear.create('2025-2026'),
    subjectId: 'subject-1',
    specialization: Specialization.AI,
    memberIds: ['s-1'],
    unresolvedMembers: [
      UnresolvedMember.create({
        conflictName: 'احمد',
        studentId: null,
        type: UnresolvedMemberType.STUDENT_NOT_FOUND,
      }),
    ],
  });

describe('PrismaGroupMapper', () => {
  it('hydrates a domain group with members split by resolution', () => {
    const group = PrismaGroupMapper.toDomain(persistedGroup());

    expect(group.id).toBe('g-1');
    expect(group.memberIds).toEqual(['s-1']);
    expect(group.specialization).toBe(Specialization.AI);
    expect(group.unresolvedMembers).toHaveLength(1);
    expect(group.unresolvedMembers[0].type).toBe(UnresolvedMemberType.STUDENT_NOT_FOUND);
  });

  it('builds a create payload carrying the seed hash and nested membership rows', () => {
    const payload = PrismaGroupMapper.toPersistenceCreate(domainGroup(), { seedHash: 'hash-1' });

    expect(payload.seedHash).toBe('hash-1');
    expect(payload.groupMembers).toMatchObject({
      createMany: { data: [{ studentId: 's-1' }] },
    });
    const unresolved = payload.unresolvedGroupMembers as {
      createMany: { data: unknown[] };
    };
    expect(unresolved.createMany.data).toHaveLength(1);
  });

  it('builds an update payload that only replaces membership, never scalars', () => {
    const payload = PrismaGroupMapper.toPersistenceUpdate(domainGroup());

    expect(payload.groupMembers).toMatchObject({ deleteMany: {} });
    expect(payload.unresolvedGroupMembers).toMatchObject({ deleteMany: {} });
    expect(payload).not.toHaveProperty('projectIdeaId');
    expect(payload).not.toHaveProperty('seedHash');
  });
});
