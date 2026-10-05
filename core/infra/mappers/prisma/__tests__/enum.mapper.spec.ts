import { describe, it, expect } from 'vitest';
import {
  Specialization as PrismaSpecialization,
  YearLevel as PrismaYearLevel,
  UserRole as PrismaUserRole,
} from '@/core/infra/orm/prisma/generated';
import { Specialization } from '@/core/domain/enums/specialization.enum';
import { YearLevel } from '@/core/domain/enums/year-level.enum';
import { UserRole } from '@/core/domain/enums/user-role.enum';
import { PrismaSpecializationMapper } from '../specialization.enum.mapper';
import { PrismaYearLevelMapper } from '../year-level.enum.mapper';
import { PrismaUserRoleMapper } from '../user-role.enum.mapper';

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
      expect(PrismaYearLevelMapper.toPersistence(domain)).toBe(prisma);
    }
  });

  it('fails loudly on unknown enum values instead of misclassifying', () => {
    expect(() => PrismaYearLevelMapper.toDomain('SOMETHING_NEW' as never)).toThrow();
    expect(() => PrismaYearLevelMapper.toPersistence('SOMETHING_NEW' as never)).toThrow();
  });
});

describe('PrismaUserRoleMapper', () => {
  it('maps every user role in both directions', () => {
    const pairs: Array<[PrismaUserRole, UserRole]> = [
      [PrismaUserRole.ADMIN, UserRole.ADMIN],
      [PrismaUserRole.USER, UserRole.USER],
    ];

    for (const [prisma, domain] of pairs) {
      expect(PrismaUserRoleMapper.toDomain(prisma)).toBe(domain);
      expect(PrismaUserRoleMapper.toPersistence(domain)).toBe(prisma);
    }
  });

  it('fails loudly on unknown enum values instead of misclassifying', () => {
    expect(() => PrismaUserRoleMapper.toDomain('SOMETHING_NEW' as never)).toThrow();
    expect(() => PrismaUserRoleMapper.toPersistence('SOMETHING_NEW' as never)).toThrow();
  });
});
