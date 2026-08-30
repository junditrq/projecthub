import { describe, it, expect } from 'vitest';
import { Student as PrismaStudent } from '@/app/generated/prisma';
import { PrismaStudentMapper } from '../student.prisma.mapper';

describe('PrismaStudentMapper', () => {
  it('should accurately map from Prisma to Domain', () => {
    const mockPrismaStudent: PrismaStudent = {
      id: 'db-id-123',
      arabicName: 'طارق الجندي',
      normalizedArabicName: 'طارق الجندي',
      userId: 'user-456',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const domainStudent = PrismaStudentMapper.toDomain(mockPrismaStudent);

    expect(domainStudent.id).toBe(mockPrismaStudent.id);
    expect(domainStudent.arabicName).toBe(mockPrismaStudent.arabicName);
    expect(domainStudent.normalizedArabicName).toBe(mockPrismaStudent.normalizedArabicName);
    expect(domainStudent.userId).toBe(mockPrismaStudent.userId);
  });
});
