import { describe, it, expect } from 'vitest';
import { Student as PrismaStudent } from '@/core/infra/orm/prisma/generated';
import { PrismaStudentMapper } from '../student.prisma.mapper';

describe('PrismaStudentMapper', () => {
  it('should accurately map from Prisma to Domain', () => {
    const mockPrismaStudent: PrismaStudent = {
      id: 'db-id-123',
      collegeId: '1',
      name: 'طارق',
      normalizedName: 'طارق',
      fatherName: 'الجندي',
      canonicalFullName: 'الجندي طارق',
      userId: 'user-456',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const domainStudent = PrismaStudentMapper.toDomain(mockPrismaStudent);

    expect(domainStudent.id).toBe(mockPrismaStudent.id);
    expect(domainStudent.name).toBe(mockPrismaStudent.name);
    expect(domainStudent.fatherName).toBe(mockPrismaStudent.fatherName);
    expect(domainStudent.collegeId).toBe('1');
    expect(domainStudent.canonicalFullName).toBe(mockPrismaStudent.canonicalFullName);
    expect(domainStudent.userId).toBe(mockPrismaStudent.userId);
  });
});
