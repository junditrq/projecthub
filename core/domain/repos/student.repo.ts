import { Student } from '@/core/domain/entities/student.entity';

export interface IStudentRepo {
  findByCollegeId(collegeId: string): Promise<Student | null>;
  findCandidatesByName(normalizedName: string, canonicalFullName: string): Promise<Student[]>;
  save(student: Student): Promise<Student>;
}
