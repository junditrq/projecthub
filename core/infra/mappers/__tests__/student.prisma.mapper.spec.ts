import { describe, it, expect } from 'vitest';
import { Student as PrismaStudent } from '@/core/infra/orm/prisma/generated';
import { PrismaStudentMapper } from '../student.prisma.mapper';
import { Specialization } from '@/core/domain/enums/specialization.enum';
import { YearLevel } from '@/core/domain/enums/year-level.enum';

describe('PrismaStudentMapper', () => {
  it('should accurately map from Prisma to Domain', () => {
    const mockPrismaStudent: PrismaStudent & {
      enrollments: Array<{
        id: string;
        studentId: string;
        academicYear: string;
        specialization: Specialization;
        yearLevel: YearLevel;
        createdAt: Date;
        updatedAt: Date;
      }>;
    } = {
      id: 'db-id-123',
      collegeId: '1723240193',
      name: 'طارق',
      normalizedName: 'طارق',
      fatherName: 'الجندي',
      canonicalFullName: 'الجندي طارق',
      userId: 'user-456',
      createdAt: new Date(),
      updatedAt: new Date(),
      enrollments: [
        {
          id: 'enrollment-1',
          studentId: 'db-id-123',
          academicYear: '2025-2026',
          specialization: Specialization.AI,
          yearLevel: YearLevel.FOURTH,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    };

    const domainStudent = PrismaStudentMapper.toDomain(mockPrismaStudent);

    expect(domainStudent.id).toBe(mockPrismaStudent.id);
    expect(domainStudent.name).toBe(mockPrismaStudent.name);
    expect(domainStudent.fatherName).toBe(mockPrismaStudent.fatherName);
    expect(domainStudent.collegeId).toBe('1723240193');
    expect(domainStudent.canonicalFullName).toBe(mockPrismaStudent.canonicalFullName);
    expect(domainStudent.userId).toBe(mockPrismaStudent.userId);
    expect(domainStudent.enrollments).toHaveLength(1);
    expect(domainStudent.enrollments[0].academicYear.label).toBe('2025-2026');
    expect(domainStudent.enrollments[0].specialization).toBe(Specialization.AI);
    expect(domainStudent.enrollments[0].yearLevel).toBe(YearLevel.FOURTH);
  });
});
