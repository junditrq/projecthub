import { Student as PrismaStudent } from '@/core/infra/orm/prisma/generated';
import { Student } from '@/core/domain/entities/student.entity';

export class PrismaStudentMapper {
  static toDomain(student: PrismaStudent): Student {
    return Student.reconstitute({
      id: student.id,
      name: student.name,
      fatherName: student.fatherName,
      collegeId: parseInt(student.collegeId),
      userId: student.userId ?? null,
      canonicalFullName: student.canonicalFullName,
    });
  }
}
