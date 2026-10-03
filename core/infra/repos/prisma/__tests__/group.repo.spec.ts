import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { Group, GroupCreateProps } from '@/core/domain/entities/group.entity';
import { Specialization } from '@/core/domain/entities/specialization.enum';
import {
  UnresolvedMember,
  UnresolvedMemberType,
} from '@/core/domain/entities/unresolved-member.entity';
import { PrismaGroupRepo } from '../group.repo';
import { TestPostgres } from '@/core/infra/orm/prisma/__tests__/test-postgres';
import { AcademicYear } from '@/core/domain/value-objects/academic-year.vo';

const db = new TestPostgres();

const groupProps = (memberIds: string[] = ['s-seeded'], specialization = Specialization.AI) =>
  ({
    projectIdeaId: 'idea-1',
    academicYear: AcademicYear.create('2025-2026'),
    subjectId: 'subject-project-2',
    specialization,
    memberIds,
    unresolvedMembers: [],
  }) satisfies GroupCreateProps;

describe('PrismaGroupRepo', () => {
  beforeAll(async () => {
    await db.start();
  }, 180000);

  afterAll(async () => {
    await db.stop();
  }, 60000);

  beforeEach(async () => {
    await db.reset();
    await db.prisma.projectIdea.upsert({
      where: { name: 'Idea 1' },
      update: {},
      create: { id: 'idea-1', name: 'Idea 1', slug: 'idea-1' },
    });
    for (const id of ['s-seeded', 's-1']) {
      await db.prisma.student.upsert({
        where: { id },
        update: {},
        create: {
          id,
          collegeId: `college-${id}`,
          name: 'عضو',
          fatherName: 'اختبار',
          canonicalFullName: `اختبار عضو ${id}`,
          normalizedName: 'عضو',
        },
      });
    }
  });

  it('reports a missing seed hash as not existing', async () => {
    const repo = new PrismaGroupRepo(db.prisma);

    await expect(repo.existsBySeedHash('nope')).resolves.toBe(false);
  });

  it('round-trips a saved group with members and unresolved rows', async () => {
    const repo = new PrismaGroupRepo(db.prisma);
    const group = Group.create({
      ...groupProps(['s-1']),
      unresolvedMembers: [
        UnresolvedMember.create({
          conflictName: 'غائب',
          studentId: null,
          type: UnresolvedMemberType.STUDENT_NOT_FOUND,
        }),
      ],
    });

    const saved = await repo.save(group, { seedHash: 'hash-1' });

    expect(saved.id).toBe(group.id);
    expect(saved.memberIds).toEqual(['s-1']);
    expect(saved.unresolvedMembers).toHaveLength(1);
    await expect(repo.existsBySeedHash('hash-1')).resolves.toBe(true);
  });

  it('finds a grouped student within the same subject and year', async () => {
    const repo = new PrismaGroupRepo(db.prisma);
    await repo.save(Group.create(groupProps(['s-1'])), { seedHash: 'hash-1' });

    await expect(repo.isStudentGrouped('s-1', 'subject-project-2', '2025-2026')).resolves.toBe(
      true
    );
  });

  it('finds a grouped student across specializations of the same subject and year', async () => {
    const repo = new PrismaGroupRepo(db.prisma);
    await repo.save(Group.create(groupProps(['s-1'], Specialization.SWE)), {
      seedHash: 'hash-1',
    });

    await expect(repo.isStudentGrouped('s-1', 'subject-project-2', '2025-2026')).resolves.toBe(
      true
    );
  });

  it('ignores groups of other subjects and years', async () => {
    const repo = new PrismaGroupRepo(db.prisma);
    await repo.save(Group.create(groupProps(['s-1'])), { seedHash: 'hash-1' });

    await expect(repo.isStudentGrouped('s-1', 'subject-project-1', '2025-2026')).resolves.toBe(
      false
    );
    await expect(repo.isStudentGrouped('s-1', 'subject-project-2', '2024-2025')).resolves.toBe(
      false
    );
  });
});
