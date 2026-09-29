import { Student as PrismaStudent, Prisma } from '@/core/infra/orm/prisma/generated';
import { Student } from '@/core/domain/entities/student.entity';

export class PrismaStudentMapper {
  static toDomain(student: PrismaStudent): Student {
    return Student.reconstitute({
      id: student.id,
      name: student.name,
      fatherName: student.fatherName,
      collegeId: student.collegeId,
      userId: student.userId ?? null,
      canonicalFullName: student.canonicalFullName,
      normalizedName: student.normalizedName,
    });
  }

  static toPersistenceUpdate(student: Student): Prisma.StudentUncheckedUpdateInput {
    return {
      id: student.id,
      canonicalFullName: student.canonicalFullName,
      normalizedName: student.normalizedName,
      name: student.name,
      fatherName: student.fatherName,
      collegeId: student.collegeId,
      userId: student.userId,
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
    };
  }
}
