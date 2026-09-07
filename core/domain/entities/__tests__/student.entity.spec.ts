import { describe, it, expect } from 'vitest';
import { Student, StudentProps } from '../student.entity';

describe('Student Domain Entity', () => {
  it('should create a new student and compute canonical full name', () => {
    const student = Student.create({
      name: 'أَحْمَد',
      fatherName: 'بِلَال',
      collegeId: 12345,
      userId: 'user-123',
    });

    expect(student.id).toBeDefined();
    expect(student.name).toBe('أَحْمَد');
    expect(student.fatherName).toBe('بِلَال');
    expect(student.collegeId).toBe(12345);
    expect(student.canonicalFullName).toBe('احمد بلال');
    expect(student.userId).toBe('user-123');
  });

  it('should create a student with null userId', () => {
    const student = Student.create({
      name: 'محمد',
      fatherName: 'علي',
      collegeId: 67890,
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
      collegeId: 11111,
      userId: 'user-456',
      canonicalFullName: 'الجندي طارق',
    };

    const student = Student.reconstitute(existingData);

    expect(student.id).toBe('existing-id');
    expect(student.name).toBe('طارق');
    expect(student.fatherName).toBe('الجندي');
    expect(student.collegeId).toBe(11111);
    expect(student.userId).toBe('user-456');
    expect(student.canonicalFullName).toBe('الجندي طارق');
  });

  it('should handle Arabic name normalization in canonicalFullName on create', () => {
    const student = Student.create({
      name: 'مُحَمَّد',
      fatherName: 'فَاطِمَة',
      collegeId: 99999,
      userId: null,
    });

    expect(student.name).toBe('مُحَمَّد');
    expect(student.fatherName).toBe('فَاطِمَة');
    expect(student.canonicalFullName).toBe('فاطمه محمد');
  });
});
