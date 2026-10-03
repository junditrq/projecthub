import { describe, it, expect } from 'vitest';
import { Student, StudentProps } from '../student.entity';
import { BusinessRuleError } from '../../errors/domain-errors';
import { AcademicContext } from '../../value-objects/academic-context.vo';
import { AcademicYear } from '../../value-objects/academic-year.vo';
import { Specialization } from '../../enums/specialization.enum';
import { YearLevel } from '../../enums/year-level.enum';

const sampleEnrollment = (): AcademicContext =>
  AcademicContext.create({
    academicYear: AcademicYear.create('2025-2026'),
    yearLevel: YearLevel.FOURTH,
    specialization: Specialization.AI,
  });

const sampleEnrollments = (): AcademicContext[] => [sampleEnrollment()];

describe('Student Domain Entity', () => {
  it('should create a new student and compute canonical full name', () => {
    const student = Student.create({
      name: 'أَحْمَد',
      fatherName: 'بِلَال',
      collegeId: '1723240193',
      userId: 'user-123',
      enrollments: sampleEnrollments(),
    });

    expect(student.id).toBeDefined();
    expect(student.name).toBe('أَحْمَد');
    expect(student.fatherName).toBe('بِلَال');
    expect(student.collegeId).toBe('1723240193');
    expect(student.canonicalFullName).toBe('احمد بلال');
    expect(student.userId).toBe('user-123');
  });

  it('should create a student with null userId', () => {
    const student = Student.create({
      name: 'محمد',
      fatherName: 'علي',
      collegeId: '1720074514',
      userId: null,
      enrollments: sampleEnrollments(),
    });

    expect(student.userId).toBeNull();
    expect(student.canonicalFullName).toBe('علي محمد');
  });

  it('should reconstitute an existing student without altering data', () => {
    const enrollment = sampleEnrollment();
    const existingData: StudentProps = {
      id: 'existing-id',
      name: 'طارق',
      fatherName: 'الجندي',
      normalizedName: 'طارق',
      collegeId: '1722168510',
      userId: 'user-456',
      canonicalFullName: 'الجندي طارق',
      enrollments: [enrollment],
    };

    const student = Student.reconstitute(existingData);

    expect(student.id).toBe('existing-id');
    expect(student.name).toBe('طارق');
    expect(student.fatherName).toBe('الجندي');
    expect(student.collegeId).toBe('1722168510');
    expect(student.userId).toBe('user-456');
    expect(student.canonicalFullName).toBe('الجندي طارق');
    expect(student.enrollments).toHaveLength(1);
  });

  it('should handle Arabic name normalization in canonicalFullName on create', () => {
    const student = Student.create({
      name: 'مُحَمَّد',
      fatherName: 'فَاطِمَة',
      collegeId: '1723240774',
      userId: null,
      enrollments: sampleEnrollments(),
    });

    expect(student.name).toBe('مُحَمَّد');
    expect(student.fatherName).toBe('فَاطِمَة');
    expect(student.canonicalFullName).toBe('فاطمه محمد');
  });

  it('should reject an empty or whitespace-only student name', () => {
    for (const name of ['', '   ']) {
      expect(() =>
        Student.create({
          name,
          fatherName: 'علي',
          collegeId: '1723240193',
          userId: null,
          enrollments: sampleEnrollments(),
        })
      ).toThrow(BusinessRuleError);
    }
  });

  it.each([['12345'], ['172324019'], ['17232401933'], ['abcdefghij'], ['undefined'], ['null']])(
    'should reject invalid collegeId %s',
    (collegeId) => {
      expect(() =>
        Student.create({
          name: 'محمد',
          fatherName: 'علي',
          collegeId,
          userId: null,
          enrollments: sampleEnrollments(),
        })
      ).toThrow(BusinessRuleError);
    }
  );

  describe('enrollments', () => {
    it('should record a new enrollment and return "recored"', () => {
      const student = Student.create({
        name: 'احمد',
        fatherName: 'خالد',
        collegeId: '1723240193',
        userId: null,
        enrollments: [
          AcademicContext.create({
            academicYear: AcademicYear.create('2024-2025'),
            yearLevel: YearLevel.THIRD,
            specialization: Specialization.SWE,
          }),
        ],
      });

      const newEnrollment = AcademicContext.create({
        academicYear: AcademicYear.create('2025-2026'),
        yearLevel: YearLevel.FOURTH,
        specialization: Specialization.AI,
      });

      const result = student.recordEnrollment(newEnrollment);

      expect(result).toBe('recored');
      expect(student.enrollments).toHaveLength(2);
    });

    it('should return "exists" when enrollment for same academic year already exists', () => {
      const enrollment = AcademicContext.create({
        academicYear: AcademicYear.create('2025-2026'),
        yearLevel: YearLevel.FOURTH,
        specialization: Specialization.AI,
      });

      const student = Student.create({
        name: 'احمد',
        fatherName: 'خالد',
        collegeId: '1723240193',
        userId: null,
        enrollments: [enrollment],
      });

      const result = student.recordEnrollment(enrollment);

      expect(result).toBe('exists');
      expect(student.enrollments).toHaveLength(1);
    });

    it('should throw when trying to record conflicting enrollment for same academic year', () => {
      const student = Student.create({
        name: 'احمد',
        fatherName: 'خالد',
        collegeId: '1723240193',
        userId: null,
        enrollments: [
          AcademicContext.create({
            academicYear: AcademicYear.create('2025-2026'),
            yearLevel: YearLevel.FOURTH,
            specialization: Specialization.AI,
          }),
        ],
      });

      const conflictingEnrollment = AcademicContext.create({
        academicYear: AcademicYear.create('2025-2026'),
        yearLevel: YearLevel.FIFTH,
        specialization: Specialization.NET,
      });

      expect(() => student.recordEnrollment(conflictingEnrollment)).toThrow(BusinessRuleError);
    });

    it('getCurrentEnrollment should return the latest enrollment by academic year', () => {
      const student = Student.create({
        name: 'احمد',
        fatherName: 'خالد',
        collegeId: '1723240193',
        userId: null,
        enrollments: [
          AcademicContext.create({
            academicYear: AcademicYear.create('2023-2024'),
            yearLevel: YearLevel.THIRD,
            specialization: Specialization.SWE,
          }),
          AcademicContext.create({
            academicYear: AcademicYear.create('2025-2026'),
            yearLevel: YearLevel.FOURTH,
            specialization: Specialization.AI,
          }),
          AcademicContext.create({
            academicYear: AcademicYear.create('2024-2025'),
            yearLevel: YearLevel.THIRD,
            specialization: Specialization.NET,
          }),
        ],
      });

      const current = student.getCurrentEnrollment();
      expect(current.academicYear.label).toBe('2025-2026');
      expect(current.yearLevel).toBe(YearLevel.FOURTH);
      expect(current.specialization).toBe(Specialization.AI);
    });

    it('getCurrentEnrollment should throw when student has no enrollments', () => {
      const student = Student.reconstitute({
        id: 'test-id',
        name: 'احمد',
        fatherName: 'خالد',
        normalizedName: 'احمد',
        collegeId: '1723240193',
        userId: null,
        canonicalFullName: 'خالد احمد',
        enrollments: [],
      });

      expect(() => student.getCurrentEnrollment()).toThrow(BusinessRuleError);
    });

    it('create should reject duplicate academic years in enrollments', () => {
      expect(() =>
        Student.create({
          name: 'احمد',
          fatherName: 'خالد',
          collegeId: '1723240193',
          userId: null,
          enrollments: [
            AcademicContext.create({
              academicYear: AcademicYear.create('2025-2026'),
              yearLevel: YearLevel.FOURTH,
              specialization: Specialization.AI,
            }),
            AcademicContext.create({
              academicYear: AcademicYear.create('2025-2026'),
              yearLevel: YearLevel.FIFTH,
              specialization: Specialization.NET,
            }),
          ],
        })
      ).toThrow(BusinessRuleError);
    });

    it('create should reject empty enrollments array', () => {
      expect(() =>
        Student.create({
          name: 'احمد',
          fatherName: 'خالد',
          collegeId: '1723240193',
          userId: null,
          enrollments: [],
        })
      ).toThrow(BusinessRuleError);
    });
  });
});
