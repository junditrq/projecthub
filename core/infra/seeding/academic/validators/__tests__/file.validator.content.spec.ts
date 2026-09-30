import { describe, it, expect } from 'vitest';
import { Subject, YearLevel } from '@/core/domain/entities/subject.entity';
import { Specialization } from '@/core/domain/entities/specialization.enum';
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
    students: [{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '101' }],
    ...overrides,
  });

describe('FileValidator ids content', () => {
  it('rejects unparseable json', () => {
    const result = validator().validateIdsContent('{"students":');

    expect(result).toEqual({ valid: false, message: 'Bad json' });
  });

  it('rejects payloads failing the students file shape', () => {
    const result = validator().validateIdsContent(JSON.stringify({ academicYear: '2025-2026' }));

    expect(result.valid).toBe(false);
  });

  it('rejects specializations outside the file year level', () => {
    const result = validator().validateIdsContent(
      idsFile({ specialization: 'AI', yearLevel: 'THIRD' })
    );

    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.message).toContain('AI');
    }
  });

  it('rejects duplicate college ids, including coerced number/string pairs', () => {
    const result = validator().validateIdsContent(
      idsFile({
        students: [
          { name: 'احمد تللو', fatherName: 'خالد', collegeId: 101 },
          { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '101' },
        ],
      })
    );

    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.message).toContain('101');
    }
  });

  it('passes a valid file through with its parsed content', () => {
    const result = validator().validateIdsContent(idsFile());

    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.file.academicYear).toBe('2025-2026');
      expect(result.file.students).toHaveLength(1);
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

    expect(result).toEqual({ valid: false, message: 'Bad json' });
  });

  it('rejects payloads failing the groups file shape', async () => {
    const result = await validator().validateGroupsContent(
      JSON.stringify({ academicYear: '2025-2026' })
    );

    expect(result.valid).toBe(false);
  });

  it('rejects canonical slugs missing from the database', async () => {
    const result = await validator([]).validateGroupsContent(groupsFile());

    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.message).toContain('project-2');
    }
  });

  it('rejects specializations the subject does not allow', async () => {
    const result = await validator([project1]).validateGroupsContent(
      groupsFile({ subjectSlug: 'project-1' })
    );

    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.message).toContain('Project 1');
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

    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.message).toContain('"groupIndex": 1');
      expect(result.message).toContain('احمد خالد تللو');
    }
  });

  it('passes a valid file through with its parsed content', async () => {
    const result = await validator([project2]).validateGroupsContent(groupsFile());

    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.file.subjectSlug).toBe('project-2');
      expect(result.file.groups).toHaveLength(1);
    }
  });
});
