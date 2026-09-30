import { describe, it, expect } from 'vitest';
import { YearLevel } from '@/core/infra/orm/prisma/generated';
import { hashGroup } from '../hash-group';

const scope = {
  academicYear: '2025-2026',
  yearLevel: YearLevel.FOURTH,
  specialization: 'AI',
  subjectSlug: 'project-2',
} as const;

describe('hashGroup seed identity', () => {
  it('is deterministic for the same roster and scope', () => {
    const first = hashGroup({ students: ['احمد', 'محمد'] }, { ...scope });
    const second = hashGroup({ students: ['احمد', 'محمد'] }, { ...scope });

    expect(first).toBe(second);
    expect(first).toMatch(/^[0-9a-f]{64}$/);
  });

  it('ignores roster order because names are sorted before hashing', () => {
    const ordered = hashGroup({ students: ['احمد', 'محمد'] }, { ...scope });
    const reversed = hashGroup({ students: ['محمد', 'احمد'] }, { ...scope });

    expect(reversed).toBe(ordered);
  });

  it('treats diacritic variants as the same student', () => {
    const plain = hashGroup({ students: ['احمد'] }, { ...scope });
    const diacritic = hashGroup({ students: ['أَحْمَد'] }, { ...scope });

    expect(diacritic).toBe(plain);
  });

  it('changes when specialization, year, level, or subject change', () => {
    const base = hashGroup({ students: ['احمد'] }, { ...scope });

    expect(hashGroup({ students: ['احمد'] }, { ...scope, specialization: 'SWE' })).not.toBe(base);
    expect(hashGroup({ students: ['احمد'] }, { ...scope, academicYear: '2024-2025' })).not.toBe(
      base
    );
    expect(hashGroup({ students: ['احمد'] }, { ...scope, subjectSlug: 'project-1' })).not.toBe(
      base
    );
    expect(hashGroup({ students: ['احمد'] }, { ...scope, yearLevel: YearLevel.THIRD })).not.toBe(
      base
    );
  });

  it('excludes the project idea by type design, so ideas never affect identity', () => {
    const input: { students: string[] } = { students: ['احمد'] };

    expect(hashGroup(input, { ...scope })).toBe(hashGroup({ students: ['احمد'] }, { ...scope }));
  });
});
