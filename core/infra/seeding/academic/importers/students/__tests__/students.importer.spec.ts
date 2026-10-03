import { describe, it, expect } from 'vitest';
import { Student } from '@/core/domain/entities/student.entity';
import { Specialization } from '@/core/domain/entities/specialization.enum';
import { YearLevel } from '@/core/domain/entities/subject.entity';
import { IStudentRepo } from '@/core/domain/repos/student.repo';
import { StudentsImporter } from '../students.importer';
import { AcademicContext } from '@/core/domain/value-objects/academic-context.vo';
import { AcademicYear } from '@/core/domain/value-objects/academic-year.vo';

const sampleEnrollment = (): AcademicContext =>
  AcademicContext.create({
    academicYear: AcademicYear.create('2025-2026'),
    yearLevel: YearLevel.FOURTH,
    specialization: Specialization.AI,
  });

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
      collegeId: '1723240193',
      userId: null,
      enrollments: [sampleEnrollment()],
    });
    const repo = fakeRepo([existing]);
    const importer = new StudentsImporter(repo);

    const report = await importer.importStudents({
      academicYear: '2025-2026',
      specialization: Specialization.AI,
      yearLevel: YearLevel.FOURTH,
      students: [{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }],
    });

    expect(report).toEqual({ studentsCreated: 0, studentsExisting: 1 });
    expect(repo.saved).toHaveLength(0);
  });

  it('creates and saves missing students, counting each outcome', async () => {
    const repo = fakeRepo();
    const importer = new StudentsImporter(repo);

    const report = await importer.importStudents({
      academicYear: '2025-2026',
      specialization: Specialization.AI,
      yearLevel: YearLevel.FOURTH,
      students: [
        { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
        { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1720074514' },
      ],
    });

    expect(report).toEqual({ studentsCreated: 2, studentsExisting: 0 });
    expect(repo.saved.map((s) => s.collegeId).sort()).toEqual(['1720074514', '1723240193']);
    expect(repo.saved[0].canonicalFullName).toBeDefined();
  });
});
