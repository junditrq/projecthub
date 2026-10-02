import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { Student } from '@/core/domain/entities/student.entity';
import { Specialization } from '@/core/domain/entities/specialization.enum';
import { BusinessRuleError } from '@/core/domain/errors/domain-errors';
import { TestPostgres } from '@/core/infra/orm/prisma/__tests__/test-postgres';
import { PrismaStudentRepo } from '@/core/infra/repos/prisma/student.repo';
import { PrismaSubjectRepo } from '@/core/infra/repos/prisma/subject.repo';
import { GroupsImporter } from '../groups.importer';
import { SeedGroupsFile } from '../../../schemas/groups-file.schema';

const db = new TestPostgres();

const groupsFile = (
  groups: SeedGroupsFile['groups'],
  overrides: Partial<SeedGroupsFile> = {}
): SeedGroupsFile => ({
  academicYear: '2025-2026',
  subjectSlug: 'project-2',
  specialization: Specialization.AI,
  groups,
  ...overrides,
});

const seedStudent = async (
  name: string,
  fatherName: string,
  collegeId: string
): Promise<Student> => {
  const repo = new PrismaStudentRepo(db.prisma);
  return repo.save(Student.create({ name, fatherName, collegeId, userId: null }));
};

const groupCount = (): Promise<number> => db.prisma.group.count();
const unresolvedCount = (): Promise<number> => db.prisma.unresolvedGroupMember.count();

describe('GroupsImporter', () => {
  beforeAll(async () => {
    await db.start();
  }, 180000);

  afterAll(async () => {
    await db.stop();
  }, 60000);

  beforeEach(async () => {
    await db.reset();
  });

  const importer = () => new GroupsImporter(db.prisma, new PrismaSubjectRepo(db.prisma));

  it('persists an all-resolved group with member links and counts', async () => {
    await seedStudent('احمد تللو', 'خالد', '1723240193');
    await seedStudent('سارة', 'خالد المحمود', '1720074514');

    const report = await importer().importGroups(
      groupsFile([
        { projectIdea: 'Smart campus', students: ['احمد خالد تللو', 'سارة خالد المحمود'] },
      ])
    );

    expect(report.groupsSeeded).toBe(1);
    expect(report.membersResolved).toBe(2);
    await expect(groupCount()).resolves.toBe(1);
    await expect(db.prisma.groupMember.count()).resolves.toBe(2);
  });

  it('persists unknown names as not-found unresolved rows while keeping the group', async () => {
    const report = await importer().importGroups(
      groupsFile([{ projectIdea: 'Smart campus', students: ['غائب تماما الحاضر'] }])
    );

    expect(report.groupsSeeded).toBe(1);
    expect(report.membersNotFound).toBe(1);
    expect(report.membersResolved).toBe(0);
    await expect(groupCount()).resolves.toBe(1);
    await expect(unresolvedCount()).resolves.toBe(1);
  });

  it('persists one conflict row per candidate, each hitting a different match branch', async () => {
    const studentA = await seedStudent('احمد تللو', 'خالد', '1723240193');
    const studentB = await seedStudent('احمد خالد تللو', 'عباس', '1720074514');

    const report = await importer().importGroups(
      groupsFile([{ projectIdea: 'Smart campus', students: ['احمد خالد تللو'] }])
    );

    expect(report.groupsSeeded).toBe(1);
    expect(report.membersConflict).toBe(2);
    const rows = await db.prisma.unresolvedGroupMember.findMany();
    expect(new Set(rows.map((r) => r.studentId))).toEqual(new Set([studentA.id, studentB.id]));
  });

  it('skips reruns by seed hash without writing', async () => {
    await seedStudent('احمد تللو', 'خالد', '1723240193');
    const file = groupsFile([{ projectIdea: 'Smart campus', students: ['احمد خالد تللو'] }]);
    await importer().importGroups(file);

    const report = await importer().importGroups(file);

    expect(report).toMatchObject({ groupsSeeded: 0, groupsSkipped: 1 });
    expect(report.skippedGroups).toEqual([
      { students: ['احمد خالد تللو'], projectIdea: 'Smart campus' },
    ]);
    await expect(groupCount()).resolves.toBe(1);
  });

  it('rolls back the whole file when a student is already grouped', async () => {
    await seedStudent('احمد تللو', 'خالد', '1723240193');
    await seedStudent('سارة', 'خالد المحمود', '1720074514');
    await importer().importGroups(
      groupsFile([{ projectIdea: 'First idea', students: ['احمد خالد تللو'] }])
    );

    await expect(
      importer().importGroups(
        groupsFile([
          { projectIdea: 'Second idea', students: ['احمد خالد تللو', 'سارة خالد المحمود'] },
        ])
      )
    ).rejects.toThrow(BusinessRuleError);
    await expect(groupCount()).resolves.toBe(1);
  });

  it('rejects the same student grouped under another specialization', async () => {
    await seedStudent('احمد تللو', 'خالد', '1723240193');
    await importer().importGroups(
      groupsFile([{ projectIdea: 'AI idea', students: ['احمد خالد تللو'] }])
    );

    await expect(
      importer().importGroups(
        groupsFile([{ projectIdea: 'SWE idea', students: ['احمد خالد تللو'] }], {
          specialization: Specialization.SWE,
        })
      )
    ).rejects.toThrow(BusinessRuleError);
    await expect(groupCount()).resolves.toBe(1);
  });

  it('rejects canonical-but-unseeded subjects with zero writes', async () => {
    await expect(
      importer().importGroups(
        groupsFile([{ projectIdea: 'X', students: ['احمد خالد تللو'] }], { subjectSlug: 'vr' })
      )
    ).rejects.toThrow(/doesn't exist/);
    await expect(groupCount()).resolves.toBe(0);
  });

  it('rejects specializations the subject disallows, as the importer currently does', async () => {
    await expect(
      importer().importGroups(
        groupsFile([{ projectIdea: 'X', students: ['احمد خالد تللو'] }], {
          subjectSlug: 'project-1',
          specialization: Specialization.AI,
        })
      )
    ).rejects.toThrow(/not allowed/);
    await expect(groupCount()).resolves.toBe(0);
  });

  it('rolls back groups with no members at all', async () => {
    await expect(
      importer().importGroups(groupsFile([{ projectIdea: 'Empty', students: [] }]))
    ).rejects.toThrow(BusinessRuleError);
    await expect(groupCount()).resolves.toBe(0);
  });
});
