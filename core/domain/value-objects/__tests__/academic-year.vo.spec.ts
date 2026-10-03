import { describe, it, expect } from 'vitest';
import { AcademicYear } from '../academic-year.vo';
import { BusinessRuleError } from '../../errors/domain-errors';

describe('AcademicYear Value Object', () => {
  describe('create', () => {
    it('should create a valid academic year from correct format', () => {
      const year = AcademicYear.create('2025-2026');
      expect(year.label).toBe('2025-2026');
      expect(year.startYear).toBe(2025);
      expect(year.endYear).toBe(2026);
    });

    it('should trim whitespace from label', () => {
      const year = AcademicYear.create('  2025-2026  ');
      expect(year.label).toBe('2025-2026');
    });

    it('should throw for invalid format (missing dash)', () => {
      expect(() => AcademicYear.create('20252026')).toThrow(BusinessRuleError);
      expect(() => AcademicYear.create('2025-2026')).not.toThrow();
    });

    it('should throw for invalid format (non-numeric)', () => {
      expect(() => AcademicYear.create('abcd-efgh')).toThrow(BusinessRuleError);
      expect(() => AcademicYear.create('2025-abcd')).toThrow(BusinessRuleError);
    });

    it('should throw when end year is not start + 1', () => {
      expect(() => AcademicYear.create('2025-2027')).toThrow(BusinessRuleError);
      expect(() => AcademicYear.create('2025-2024')).toThrow(BusinessRuleError);
      expect(() => AcademicYear.create('2025-2025')).toThrow(BusinessRuleError);
    });

    it('should throw for empty string', () => {
      expect(() => AcademicYear.create('')).toThrow(BusinessRuleError);
    });

    it('should throw for whitespace only', () => {
      expect(() => AcademicYear.create('   ')).toThrow(BusinessRuleError);
    });
  });

  describe('reconstitute', () => {
    it('should create from persisted label without validation', () => {
      const year = AcademicYear.reconstitute('2025-2026');
      expect(year.label).toBe('2025-2026');
      expect(year.startYear).toBe(2025);
      expect(year.endYear).toBe(2026);
    });
  });

  describe('equals', () => {
    it('should return true for same label', () => {
      const year1 = AcademicYear.create('2025-2026');
      const year2 = AcademicYear.create('2025-2026');
      expect(year1.equals(year2)).toBe(true);
    });

    it('should return false for different labels', () => {
      const year1 = AcademicYear.create('2025-2026');
      const year2 = AcademicYear.create('2024-2025');
      expect(year1.equals(year2)).toBe(false);
    });
  });

  describe('isAfter', () => {
    it('should return true when start year is greater', () => {
      const year1 = AcademicYear.create('2025-2026');
      const year2 = AcademicYear.create('2024-2025');
      expect(year1.isAfter(year2)).toBe(true);
    });

    it('should return false when start year is less', () => {
      const year1 = AcademicYear.create('2024-2025');
      const year2 = AcademicYear.create('2025-2026');
      expect(year1.isAfter(year2)).toBe(false);
    });

    it('should return false when equal', () => {
      const year1 = AcademicYear.create('2025-2026');
      const year2 = AcademicYear.create('2025-2026');
      expect(year1.isAfter(year2)).toBe(false);
    });
  });

  describe('isBefore', () => {
    it('should return true when start year is less', () => {
      const year1 = AcademicYear.create('2024-2025');
      const year2 = AcademicYear.create('2025-2026');
      expect(year1.isBefore(year2)).toBe(true);
    });

    it('should return false when start year is greater', () => {
      const year1 = AcademicYear.create('2025-2026');
      const year2 = AcademicYear.create('2024-2025');
      expect(year1.isBefore(year2)).toBe(false);
    });

    it('should return false when equal', () => {
      const year1 = AcademicYear.create('2025-2026');
      const year2 = AcademicYear.create('2025-2026');
      expect(year1.isBefore(year2)).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return the label', () => {
      const year = AcademicYear.create('2025-2026');
      expect(year.toString()).toBe('2025-2026');
    });
  });
});
