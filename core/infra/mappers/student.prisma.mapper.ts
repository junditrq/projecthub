import { Student as PrismaStudent } from '@/app/generated/prisma';
import { Student } from '@/core/domain/entities/student.entity';

export class PrismaStudentMapper {
  static toDomain(student: PrismaStudent): Student {
    return Student.reconstitute({
      id: student.id,
      arabicName: student.arabicName,
      normalizedArabicName: student.normalizedArabicName,
      userId: student.userId,
    });
  }
}
