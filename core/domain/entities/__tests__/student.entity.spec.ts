import { describe, it, expect } from 'vitest';
import { Student } from '../student.entity';

describe('Student Domain Entity', () => {
  it('should create a new student and normalize the arabic name', () => {
    const student = Student.create({
      arabicName: 'أَحْمَد بِلَال',
      userId: 'user-123',
    });

    expect(student.id).toBeDefined();
    expect(student.arabicName).toBe('أَحْمَد بِلَال');
    expect(student.normalizedArabicName).toBe('احمد بلال'); // Proves domain logic fired
    expect(student.userId).toBe('user-123');
  });

  it('should reconstitute an existing student without altering data', () => {
    const existingData = {
      id: 'existing-id',
      arabicName: 'طارق',
      normalizedArabicName: 'طارق',
      userId: null,
    };

    const student = Student.reconstitute(existingData);

    expect(student.id).toBe('existing-id');
    expect(student.arabicName).toBe('طارق');
    expect(student.normalizedArabicName).toBe('طارق');
    expect(student.userId).toBeNull();
  });
});
