import { describe, it, expect } from 'vitest';
import { YearLevel } from '@/core/domain/enums/year-level.enum';
import { Specialization } from '@/core/domain/enums/specialization.enum';
import { FileValidator } from '../file.validator';
import { ParsedPathParts } from '../file.validator.interface';
import { SeedGroupsFile } from '../../schemas/groups-file.schema';
import { SeedStudentsFile } from '../../schemas/students-file.schema';

const validator = (): FileValidator =>
  new FileValidator('/nonexistent-data-path', {
    findBySlug: async () => null,
  });

type IdsPathParts = Extract<ParsedPathParts, { isIds: true }>;
type GroupsPathParts = Extract<ParsedPathParts, { isIds: false }>;

const idsPathParts = (overrides: Partial<IdsPathParts> = {}): ParsedPathParts => {
  const base: IdsPathParts = {
    academicYear: '2025-2026',
    yearLevel: YearLevel.FOURTH,
    specialization: Specialization.AI,
    fileName: 'ids',
    isIds: true,
  };
  return { ...base, ...overrides };
};

const idsFile = (overrides: Partial<SeedStudentsFile> = {}): SeedStudentsFile => ({
  academicYear: '2025-2026',
  specialization: Specialization.AI,
  yearLevel: YearLevel.FOURTH,
  students: [],
  ...overrides,
});

const groupsPathParts = (overrides: Partial<GroupsPathParts> = {}): ParsedPathParts => {
  const base: GroupsPathParts = {
    academicYear: '2025-2026',
    yearLevel: YearLevel.FOURTH,
    specialization: Specialization.AI,
    fileName: 'project-2',
    isIds: false,
  };
  return { ...base, ...overrides };
};

const groupsFile = (overrides: Partial<SeedGroupsFile> = {}): SeedGroupsFile => ({
  academicYear: '2025-2026',
  subjectSlug: 'project-2',
  specialization: Specialization.AI,
  groups: [],
  ...overrides,
});

describe('FileValidator ids consistency', () => {
  it('passes when path parts match content', () => {
    expect(validator().validateIdsConsistency(idsPathParts(), idsFile())).toEqual({
      ok: true,
      value: undefined,
    });
  });

  it('rejects academic year mismatches', () => {
    const result = validator().validateIdsConsistency(
      idsPathParts({ academicYear: '2024-2025' }),
      idsFile()
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('2024-2025');
      expect(result.error.message).toContain('2025-2026');
    }
  });

  it('rejects specialization mismatches (third_ai path vs SWE content)', () => {
    const result = validator().validateIdsConsistency(
      idsPathParts({ specialization: Specialization.AI }),
      idsFile({ specialization: Specialization.SWE })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('AI');
      expect(result.error.message).toContain('SWE');
    }
  });

  it('rejects year level mismatches', () => {
    const result = validator().validateIdsConsistency(
      idsPathParts({ yearLevel: YearLevel.THIRD }),
      idsFile()
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('THIRD');
      expect(result.error.message).toContain('FOURTH');
    }
  });
});

describe('FileValidator groups consistency', () => {
  it('passes when path parts match content', () => {
    expect(validator().validateGroupsConsistency(groupsPathParts(), groupsFile())).toEqual({
      ok: true,
      value: undefined,
    });
  });

  it('rejects academic year mismatches', () => {
    const result = validator().validateGroupsConsistency(
      groupsPathParts({ academicYear: '2024-2025' }),
      groupsFile()
    );

    expect(result.ok).toBe(false);
  });

  it('rejects specialization mismatches', () => {
    const result = validator().validateGroupsConsistency(
      groupsPathParts({ specialization: Specialization.AI }),
      groupsFile({ specialization: Specialization.SWE })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('SWE');
    }
  });

  it('rejects subject slug mismatches', () => {
    const result = validator().validateGroupsConsistency(
      groupsPathParts({ fileName: 'project-2' }),
      groupsFile({ subjectSlug: 'project-1' as SeedGroupsFile['subjectSlug'] })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.message).toContain('project-2');
      expect(result.error.message).toContain('project-1');
    }
  });
});
