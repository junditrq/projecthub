import { describe, it, expect } from 'vitest';
import { AcademicContext } from '../academic-context.vo';
import { AcademicYear } from '../academic-year.vo';
import { Specialization } from '../../enums/specialization.enum';
import { YearLevel } from '../../enums/year-level.enum';

describe('AcademicContext Value Object', () => {
  const validProps = () => ({
    academicYear: AcademicYear.create('2025-2026'),
    yearLevel: YearLevel.FOURTH,
    specialization: Specialization.AI,
  });

  describe('create', () => {
    it('should create a valid academic context', () => {
      const context = AcademicContext.create(validProps());
      expect(context.academicYear.label).toBe('2025-2026');
      expect(context.yearLevel).toBe(YearLevel.FOURTH);
      expect(context.specialization).toBe(Specialization.AI);
    });
  });

  describe('reconstitute', () => {
    it('should create from persisted props', () => {
      const context = AcademicContext.reconstitute(validProps());
      expect(context.academicYear.label).toBe('2025-2026');
      expect(context.yearLevel).toBe(YearLevel.FOURTH);
      expect(context.specialization).toBe(Specialization.AI);
    });
  });

  describe('equals', () => {
    it('should return true when all fields match', () => {
      const context1 = AcademicContext.create(validProps());
      const context2 = AcademicContext.create(validProps());
      expect(context1.equals(context2)).toBe(true);
    });

    it('should return false when academic year differs', () => {
      const context1 = AcademicContext.create({
        ...validProps(),
        academicYear: AcademicYear.create('2025-2026'),
      });
      const context2 = AcademicContext.create({
        ...validProps(),
        academicYear: AcademicYear.create('2024-2025'),
      });
      expect(context1.equals(context2)).toBe(false);
    });

    it('should return false when year level differs', () => {
      const context1 = AcademicContext.create({ ...validProps(), yearLevel: YearLevel.FOURTH });
      const context2 = AcademicContext.create({ ...validProps(), yearLevel: YearLevel.FIFTH });
      expect(context1.equals(context2)).toBe(false);
    });

    it('should return false when specialization differs', () => {
      const context1 = AcademicContext.create({
        ...validProps(),
        specialization: Specialization.AI,
      });
      const context2 = AcademicContext.create({
        ...validProps(),
        specialization: Specialization.SWE,
      });
      expect(context1.equals(context2)).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return formatted string with all fields', () => {
      const context = AcademicContext.create(validProps());
      expect(context.toString()).toBe('2025-2026 - FOURTH - AI');
    });
  });
});
