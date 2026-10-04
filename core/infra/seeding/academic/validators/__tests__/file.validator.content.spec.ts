import { describe, it, expect } from 'vitest';
import { Subject } from '@/core/domain/entities/subject.entity';
import { Specialization } from '@/core/domain/enums/specialization.enum';
import { YearLevel } from '@/core/domain/enums/year-level.enum';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { FileValidator } from '../file.validator';

const validator = (subjects: Subject[] = []): FileValidator => {
  const repo: ISubjectRepo = {
    findBySlug: async (slug) => subjects.find((s) => s.slug === slug) ?? null,
  };
  return new FileValidator('/nonexistent-data-path', repo);
};

const idsFile = (overrides: Record<string, unknown> = {}): string =>
  JSON.stringify({
    academicYear: '2025-2026',
    specialization: 'AI',
    yearLevel: 'FOURTH',
    students: [{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }],
    ...overrides,
  });

describe('FileValidator ids content', () => {
  it('rejects unparseable json', () => {
    const result = validator().validateIdsContent('{"students":');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toBe('Bad json');
    }
  });

  it('rejects payloads failing the students file shape', () => {
    const result = validator().validateIdsContent(JSON.stringify({ academicYear: '2025-2026' }));

    expect(result.ok).toBe(false);
  });

  it('rejects specializations outside the file year level', () => {
    const result = validator().validateIdsContent(
      idsFile({ specialization: 'AI', yearLevel: 'THIRD' })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('AI');
    }
  });

  it('rejects duplicate college ids', () => {
    const result = validator().validateIdsContent(
      idsFile({
        students: [
          { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
          { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1723240193' },
        ],
      })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('1723240193');
    }
  });

  it.each([
    ['short id', '12345'],
    ['non-digit id', 'abcdefghij'],
    ['coerced undefined', 'undefined'],
    ['coerced null', 'null'],
  ])('rejects invalid collegeId (%s)', (_label, collegeId) => {
    const result = validator().validateIdsContent(
      idsFile({
        students: [{ name: 'احمد تللو', fatherName: 'خالد', collegeId }],
      })
    );

    expect(result.ok).toBe(false);
  });

  it('rejects numeric collegeIds without coercion', () => {
    const result = validator().validateIdsContent(
      idsFile({
        students: [{ name: 'احمد تللو', fatherName: 'خالد', collegeId: 1723240193 }],
      })
    );

    expect(result.ok).toBe(false);
  });

  it('rejects empty student names', () => {
    for (const name of ['', '   ']) {
      const result = validator().validateIdsContent(
        idsFile({
          students: [{ name, fatherName: 'خالد', collegeId: '1723240193' }],
        })
      );

      expect(result.ok).toBe(false);
    }
  });

  it('passes a valid file through with its parsed content', () => {
    const result = validator().validateIdsContent(idsFile());

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.academicYear).toBe('2025-2026');
      expect(result.value.students).toHaveLength(1);
    }
  });
});

const project2 = Subject.reconstitute({
  id: 'subject-project-2',
  name: 'Project 2',
  slug: 'project-2',
  yearLevel: YearLevel.FOURTH,
  allowedSpecializations: [Specialization.AI, Specialization.SWE, Specialization.NET],
});

const project1 = Subject.reconstitute({
  id: 'subject-project-1',
  name: 'Project 1',
  slug: 'project-1',
  yearLevel: YearLevel.THIRD,
  allowedSpecializations: [Specialization.GENERAL],
});

const groupsFile = (overrides: Record<string, unknown> = {}): string =>
  JSON.stringify({
    academicYear: '2025-2026',
    subjectSlug: 'project-2',
    specialization: 'AI',
    groups: [{ projectIdea: 'Smart campus', students: ['احمد خالد تللو', 'سارة خالد المحمود'] }],
    ...overrides,
  });

describe('FileValidator groups content', () => {
  it('rejects unparseable json', async () => {
    const result = await validator().validateGroupsContent('{"groups":');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toBe('Bad json');
    }
  });

  it('rejects payloads failing the groups file shape', async () => {
    const result = await validator().validateGroupsContent(
      JSON.stringify({ academicYear: '2025-2026' })
    );

    expect(result.ok).toBe(false);
  });

  it('rejects canonical slugs missing from the database', async () => {
    const result = await validator([]).validateGroupsContent(groupsFile());

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('project-2');
    }
  });

  it('rejects specializations the subject does not allow', async () => {
    const result = await validator([project1]).validateGroupsContent(
      groupsFile({ subjectSlug: 'project-1' })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('Project 1');
    }
  });

  it('rejects duplicate names inside one group and reports the group index', async () => {
    const result = await validator([project2]).validateGroupsContent(
      groupsFile({
        groups: [
          { projectIdea: 'A', students: ['احمد خالد تللو', 'سارة خالد المحمود'] },
          { projectIdea: 'B', students: ['أَحْمَد خالد تللو', 'احمد خالد تللو'] },
        ],
      })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('"groupIndex": 1');
      expect(result.error.message).toContain('احمد خالد تللو');
    }
  });

  it('rejects empty project ideas and empty student names', async () => {
    for (const groups of [
      [{ projectIdea: '', students: ['احمد خالد تللو'] }],
      [{ projectIdea: '   ', students: ['احمد خالد تللو'] }],
      [{ projectIdea: 'Smart campus', students: [''] }],
      [{ projectIdea: 'Smart campus', students: ['   '] }],
    ]) {
      const result = await validator([project2]).validateGroupsContent(groupsFile({ groups }));

      expect(result.ok).toBe(false);
    }
  });

  it('passes a valid file through with its parsed content', async () => {
    const result = await validator([project2]).validateGroupsContent(groupsFile());

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.subjectSlug).toBe('project-2');
      expect(result.value.groups).toHaveLength(1);
    }
  });
});
