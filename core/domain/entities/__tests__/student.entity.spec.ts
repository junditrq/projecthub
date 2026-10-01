import { describe, it, expect } from 'vitest';
import { Student, StudentProps } from '../student.entity';
import { BusinessRuleError } from '../../errors/domain-errors';

describe('Student Domain Entity', () => {
  it('should create a new student and compute canonical full name', () => {
    const student = Student.create({
      name: 'أَحْمَد',
      fatherName: 'بِلَال',
      collegeId: '1723240193',
      userId: 'user-123',
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
    });

    expect(student.userId).toBeNull();
    expect(student.canonicalFullName).toBe('علي محمد');
  });

  it('should reconstitute an existing student without altering data', () => {
    const existingData: StudentProps = {
      id: 'existing-id',
      name: 'طارق',
      fatherName: 'الجندي',
      normalizedName: 'طارق',
      collegeId: '1722168510',
      userId: 'user-456',
      canonicalFullName: 'الجندي طارق',
    };

    const student = Student.reconstitute(existingData);

    expect(student.id).toBe('existing-id');
    expect(student.name).toBe('طارق');
    expect(student.fatherName).toBe('الجندي');
    expect(student.collegeId).toBe('1722168510');
    expect(student.userId).toBe('user-456');
    expect(student.canonicalFullName).toBe('الجندي طارق');
  });

  it('should handle Arabic name normalization in canonicalFullName on create', () => {
    const student = Student.create({
      name: 'مُحَمَّد',
      fatherName: 'فَاطِمَة',
      collegeId: '1723240774',
      userId: null,
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
        })
      ).toThrow(BusinessRuleError);
    }
  });

  it.each([['12345'], ['172324019'], ['17232401933'], ['abcdefghij'], ['undefined'], ['null']])(
    'should reject invalid collegeId %s',
    (collegeId) => {
      expect(() =>
        Student.create({ name: 'محمد', fatherName: 'علي', collegeId, userId: null })
      ).toThrow(BusinessRuleError);
    }
  );
});
