import { Student } from '@/core/domain/entities/student.entity';

export interface IStudentRepo {
  findByArabicName(arabicName: string): Promise<Student | null>;
}
