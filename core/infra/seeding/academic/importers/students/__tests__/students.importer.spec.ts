import { describe, it, expect } from 'vitest';
import { Student } from '@/core/domain/entities/student.entity';
import { IStudentRepo } from '@/core/domain/repos/student.repo';
import { StudentsImporter } from '../students.importer';

const fakeRepo = (seed: Student[] = []): IStudentRepo & { saved: Student[] } => {
  const stored = new Map(seed.map((s) => [s.collegeId, s]));
  const saved: Student[] = [];
  return {
    saved,
    findByCollegeId: async (collegeId) => stored.get(collegeId) ?? null,
    findCandidatesByName: async () => [],
    save: async (student) => {
      saved.push(student);
      stored.set(student.collegeId, student);
      return student;
    },
  };
};

describe('StudentsImporter', () => {
  it('skips students already present by college id without saving', async () => {
    const existing = Student.create({
      name: 'احمد',
      fatherName: 'محمد',
      collegeId: '101',
      userId: null,
    });
    const repo = fakeRepo([existing]);
    const importer = new StudentsImporter(repo);

    const report = await importer.importStudents({
      academicYear: '2025-2026',
      specialization: 'AI',
      yearLevel: 'FOURTH',
      students: [{ name: 'احمد', fatherName: 'محمد', collegeId: '101' }],
    });

    expect(report).toEqual({ studentsCreated: 0, studentsExisting: 1 });
    expect(repo.saved).toHaveLength(0);
  });

  it('creates and saves missing students, counting each outcome', async () => {
    const repo = fakeRepo();
    const importer = new StudentsImporter(repo);

    const report = await importer.importStudents({
      academicYear: '2025-2026',
      specialization: 'AI',
      yearLevel: 'FOURTH',
      students: [
        { name: 'احمد', fatherName: 'محمد', collegeId: '101' },
        { name: 'محمد', fatherName: 'علي', collegeId: '102' },
      ],
    });

    expect(report).toEqual({ studentsCreated: 2, studentsExisting: 0 });
    expect(repo.saved.map((s) => s.collegeId).sort()).toEqual(['101', '102']);
    expect(repo.saved[0].canonicalFullName).toBeDefined();
  });
});
