import { Student as PrismaStudent } from '@/app/generated/prisma';
import { Student } from '@/core/domain/entities/student.entity';

export class PrismaStudentMapper {
  static toDomain(student: PrismaStudent): Student {
    return {
      arabicName: student.arabicName,
      id: student.id,
      userId: student.userId,
    };
  }
}
