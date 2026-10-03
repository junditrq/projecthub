import { Prisma } from '@/core/infra/orm/prisma/generated';
import { Student } from '@/core/domain/entities/student.entity';
import { AcademicContext } from '@/core/domain/value-objects/academic-context.vo';
import { PrismaSpecializationMapper } from './specialization.prisma.mapper';
import { AcademicYear } from '@/core/domain/value-objects/academic-year.vo';
import { PrismaYearLevelMapper } from './year-level.prisma.mapper';

export const prismaStudentWithEnrollments = {
  include: {
    enrollments: true,
  },
} satisfies Prisma.StudentDefaultArgs;

export type PrismaStudentWithEnrollments = Prisma.StudentGetPayload<
  typeof prismaStudentWithEnrollments
>;

export class PrismaStudentMapper {
  static toDomain(student: PrismaStudentWithEnrollments): Student {
    return Student.reconstitute({
      id: student.id,
      name: student.name,
      fatherName: student.fatherName,
      collegeId: student.collegeId,
      userId: student.userId ?? null,
      canonicalFullName: student.canonicalFullName,
      normalizedName: student.normalizedName,
      enrollments: student.enrollments.map((e) =>
        AcademicContext.reconstitute({
          academicYear: AcademicYear.reconstitute(e.academicYear),
          specialization: PrismaSpecializationMapper.toDomain(e.specialization),
          yearLevel: PrismaYearLevelMapper.toDomain(e.yearLevel),
        })
      ),
    });
  }

  private static nestedEnrollments(
    student: Student
  ): Pick<Prisma.StudentUncheckedCreateInput, 'enrollments'> {
    return {
      enrollments: {
        createMany: {
          data: student.enrollments.map((enrollment) => ({
            academicYear: enrollment.academicYear.toString(),
            specialization: PrismaSpecializationMapper.toPersistence(enrollment.specialization),
            yearLevel: PrismaYearLevelMapper.toPersistence(enrollment.yearLevel),
          })),
        },
      },
    };
  }

  static toPersistenceUpdate(student: Student): Prisma.StudentUncheckedUpdateInput {
    const { enrollments } = this.nestedEnrollments(student);
    return {
      id: student.id,
      canonicalFullName: student.canonicalFullName,
      normalizedName: student.normalizedName,
      name: student.name,
      fatherName: student.fatherName,
      collegeId: student.collegeId,
      userId: student.userId,
      enrollments: {
        deleteMany: {},
        ...enrollments,
      },
    };
  }

  static toPersistenceCreate(student: Student): Prisma.StudentUncheckedCreateInput {
    return {
      canonicalFullName: student.canonicalFullName,
      normalizedName: student.normalizedName,
      collegeId: student.collegeId,
      fatherName: student.fatherName,
      name: student.name,
      userId: student.userId,
      ...this.nestedEnrollments(student),
    };
  }
}
