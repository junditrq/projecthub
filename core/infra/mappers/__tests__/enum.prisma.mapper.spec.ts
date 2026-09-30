import { describe, it, expect } from 'vitest';
import {
  Specialization as PrismaSpecialization,
  YearLevel as PrismaYearLevel,
} from '@/core/infra/orm/prisma/generated';
import { Specialization } from '@/core/domain/entities/specialization.enum';
import { YearLevel } from '@/core/domain/entities/subject.entity';
import { PrismaSpecializationMapper } from '../specialization.prisma.mapper';
import { PrismaYearLevelMapper } from '../year-level.prisma.mapper';

describe('PrismaSpecializationMapper', () => {
  it('maps every specialization in both directions', () => {
    const pairs: Array<[PrismaSpecialization, Specialization]> = [
      [PrismaSpecialization.AI, Specialization.AI],
      [PrismaSpecialization.SWE, Specialization.SWE],
      [PrismaSpecialization.NET, Specialization.NET],
      [PrismaSpecialization.GENERAL, Specialization.GENERAL],
    ];

    for (const [prisma, domain] of pairs) {
      expect(PrismaSpecializationMapper.toDomain(prisma)).toBe(domain);
      expect(PrismaSpecializationMapper.toPersistence(domain)).toBe(prisma);
    }
  });

  it('fails loudly on unknown enum values instead of misclassifying', () => {
    expect(() => PrismaSpecializationMapper.toDomain('SOMETHING_NEW' as never)).toThrow();
    expect(() => PrismaSpecializationMapper.toPersistence('SOMETHING_NEW' as never)).toThrow();
  });
});

describe('PrismaYearLevelMapper', () => {
  it('maps every year level in both directions', () => {
    const pairs: Array<[PrismaYearLevel, YearLevel]> = [
      [PrismaYearLevel.THIRD, YearLevel.THIRD],
      [PrismaYearLevel.FOURTH, YearLevel.FOURTH],
      [PrismaYearLevel.FIFTH, YearLevel.FIFTH],
    ];

    for (const [prisma, domain] of pairs) {
      expect(PrismaYearLevelMapper.toDomain(prisma)).toBe(domain);
      expect(PrismaYearLevelMapper.toPrisma(domain)).toBe(prisma);
    }
  });

  it('fails loudly on unknown enum values instead of misclassifying', () => {
    expect(() => PrismaYearLevelMapper.toDomain('SOMETHING_NEW' as never)).toThrow();
    expect(() => PrismaYearLevelMapper.toPrisma('SOMETHING_NEW' as never)).toThrow();
  });
});
