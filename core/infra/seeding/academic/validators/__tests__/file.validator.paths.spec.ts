import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { Subject } from '@/core/domain/entities/subject.entity';
import { Specialization } from '@/core/domain/enums/specialization.enum';
import { YearLevel } from '@/core/domain/enums/year-level.enum';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { FileValidator } from '../file.validator';

// Canonical subjects mirrored from seeding data: project-2 is FOURTH year for AI/SWE/NET
// project-1 is THIRD year for GENERAL only.
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

const fakeSubjectRepo = (subjects: Subject[]): ISubjectRepo => ({
  findBySlug: async (slug) => subjects.find((s) => s.slug === slug) ?? null,
});

describe('FileValidator paths', () => {
  let dir: string;
  let validator: FileValidator;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), 'projecthub-paths-'));
    validator = new FileValidator(dir, fakeSubjectRepo([project2, project1]));
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  const withEmptyFile = async (filePath: string) => {
    await writeFile(path.join(dir, filePath), '{}');
    return validator.validateFilePath(filePath);
  };

  it('rejects paths that do not split into four segments', async () => {
    const result = await validator.validateFilePath('2025-2026__fourth__ai.json');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('Invalid path structure');
    }
  });

  it('rejects malformed academic years', async () => {
    const result = await validator.validateFilePath('25-26__fourth__ai__ids.json');

    expect(result.ok).toBe(false);
  });

  it('rejects unknown year levels and specializations', async () => {
    for (const filePath of [
      '2025-2026__sixth__ai__ids.json',
      '2025-2026__fourth__design__ids.json',
    ]) {
      const result = await validator.validateFilePath(filePath);
      expect(result.ok).toBe(false);
    }
  });

  it('rejects file names without a json extension', async () => {
    const result = await validator.validateFilePath('2025-2026__fourth__ai__ids.txt');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('.json');
    }
  });

  it('accepts ids files without consulting subjects', async () => {
    const result = await withEmptyFile('2025-2026__fourth__ai__ids.json');

    expect(result).toMatchObject({
      ok: true,
      value: {
        academicYear: '2025-2026',
        yearLevel: YearLevel.FOURTH,
        specialization: Specialization.AI,
        fileName: 'ids',
        isIds: true,
      },
    });
  });

  it('rejects ids files with specializations outside the path year level', async () => {
    const result = await withEmptyFile('2025-2026__third__ai__ids.json');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('ai');
      expect(result.error.message).toContain('third');
    }
  });

  it('rejects subject slugs outside the canonical list', async () => {
    const result = await validator.validateFilePath('2025-2026__fourth__ai__nope.json');

    expect(result.ok).toBe(false);
  });

  it('rejects canonical slugs missing from the database', async () => {
    const withoutVr = new FileValidator(dir, fakeSubjectRepo([project2]));
    await writeFile(path.join(dir, '2025-2026__fourth__ai__vr.json'), '{}');

    const result = await withoutVr.validateFilePath('2025-2026__fourth__ai__vr.json');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('vr');
    }
  });

  it('rejects specializations the subject does not allow', async () => {
    const result = await validator.validateFilePath('2025-2026__third__ai__project-1.json');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('Project 1');
    }
  });

  it('rejects year levels the subject does not belong to', async () => {
    const result = await validator.validateFilePath('2025-2026__third__ai__project-2.json');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('Project 2');
    }
  });

  it('accepts a fully valid group path backed by a real file', async () => {
    const result = await withEmptyFile('2025-2026__fourth__ai__project-2.json');

    expect(result).toMatchObject({
      ok: true,
      value: {
        academicYear: '2025-2026',
        yearLevel: YearLevel.FOURTH,
        specialization: Specialization.AI,
        fileName: 'project-2',
        isIds: false,
      },
    });
  });

  it('rejects valid paths with no file on disk', async () => {
    const result = await validator.validateFilePath('2025-2026__fourth__ai__project-2.json');

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('does not exist');
    }
  });
});
