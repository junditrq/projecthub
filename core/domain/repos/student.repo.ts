import { Student } from '@/core/domain/entities/student.entity';

export interface IStudentRepo {
  findByName(name: string): Promise<Student | null>;
}
