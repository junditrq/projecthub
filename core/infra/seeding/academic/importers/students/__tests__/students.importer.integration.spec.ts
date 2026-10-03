import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { TestPostgres } from '@/core/infra/orm/prisma/__tests__/test-postgres';
import { PrismaStudentRepo } from '@/core/infra/repos/prisma/student.repo';
import { StudentsImporter } from '../students.importer';
import { SeedStudentsFile } from '../../../schemas/students-file.schema';
import { Specialization } from '@/core/domain/entities/specialization.enum';
import { YearLevel } from '@/core/domain/entities/subject.entity';

const db = new TestPostgres();

const createSeedFile = (
  students: SeedStudentsFile['students'],
  overrides: Partial<SeedStudentsFile> = {}
): SeedStudentsFile => ({
  academicYear: '2025-2026',
  specialization: Specialization.AI,
  yearLevel: YearLevel.FOURTH,
  students,
  ...overrides,
});

const createSeedFile2024 = (
  students: SeedStudentsFile['students'],
  overrides: Partial<SeedStudentsFile> = {}
): SeedStudentsFile => ({
  academicYear: '2024-2025',
  specialization: Specialization.SWE,
  yearLevel: YearLevel.THIRD,
  students,
  ...overrides,
});

describe('StudentsImporter Integration Tests', () => {
  beforeAll(async () => {
    await db.start();
  }, 180000);

  afterAll(async () => {
    await db.stop();
  }, 60000);

  beforeEach(async () => {
    await db.reset();
  });

  const makeImporter = () => new StudentsImporter(new PrismaStudentRepo(db.prisma));

  it('creates students with enrollments on first import', async () => {
    const importer = makeImporter();
    const file = createSeedFile([
      { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
      { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1720074514' },
    ]);

    const report = await importer.importStudents(file);

    expect(report.studentsCreated).toBe(2);
    expect(report.studentsExisting).toBe(0);

    const student1 = await db.prisma.student.findUnique({
      where: { collegeId: '1723240193' },
      include: { enrollments: true },
    });
    expect(student1).toBeDefined();
    expect(student1?.enrollments).toHaveLength(1);
    expect(student1?.enrollments[0].academicYear).toBe('2025-2026');
    expect(student1?.enrollments[0].specialization).toBe('AI');
    expect(student1?.enrollments[0].yearLevel).toBe('FOURTH');
  });

  it('adds new enrollment for existing student when importing different academic year', async () => {
    const importer = makeImporter();

    await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    const report = await importer.importStudents(
      createSeedFile2024([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    expect(report.studentsCreated).toBe(0);
    expect(report.studentsExisting).toBe(1);

    const student = await db.prisma.student.findUnique({
      where: { collegeId: '1723240193' },
      include: { enrollments: true },
    });
    expect(student?.enrollments).toHaveLength(2);

    const years = student?.enrollments.map((e) => e.academicYear).sort();
    expect(years).toEqual(['2024-2025', '2025-2026']);
  });

  it('does not duplicate enrollment when same academic year is imported again', async () => {
    const importer = makeImporter();

    await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    const report = await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    expect(report.studentsCreated).toBe(0);
    expect(report.studentsExisting).toBe(1);

    const student = await db.prisma.student.findUnique({
      where: { collegeId: '1723240193' },
      include: { enrollments: true },
    });
    expect(student?.enrollments).toHaveLength(1);
  });

  it('throws when same student has different specialization for same academic year', async () => {
    const importer = makeImporter();

    await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    await expect(
      importer.importStudents(
        createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }], {
          specialization: Specialization.SWE,
        })
      )
    ).rejects.toThrow('already has an enrollment for academic year');
  });

  it('throws when same student has different year level for same academic year', async () => {
    const importer = makeImporter();

    await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    await expect(
      importer.importStudents(
        createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }], {
          yearLevel: YearLevel.FIFTH,
        })
      )
    ).rejects.toThrow('already has an enrollment for academic year');
  });

  it('handles multiple students across multiple academic years', async () => {
    const importer = makeImporter();

    await importer.importStudents(
      createSeedFile([
        { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
        { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1720074514' },
      ])
    );

    await importer.importStudents(
      createSeedFile2024([
        { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
        { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1720074514' },
        { name: 'محمد', fatherName: 'علي', collegeId: '1722168510' },
      ])
    );

    const students = await db.prisma.student.findMany({
      include: { enrollments: true },
      orderBy: { collegeId: 'asc' },
    });

    expect(students).toHaveLength(3);

    const ahmed = students.find((s) => s.collegeId === '1723240193');
    expect(ahmed?.enrollments).toHaveLength(2);

    const sara = students.find((s) => s.collegeId === '1720074514');
    expect(sara?.enrollments).toHaveLength(2);

    const mohamed = students.find((s) => s.collegeId === '1722168510');
    expect(mohamed?.enrollments).toHaveLength(1);
    expect(mohamed?.enrollments[0].academicYear).toBe('2024-2025');
  });

  it('correctly tracks created vs existing counts across multiple imports', async () => {
    const importer = makeImporter();

    const report1 = await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );
    expect(report1).toEqual({ studentsCreated: 1, studentsExisting: 0 });

    const report2 = await importer.importStudents(
      createSeedFile([
        { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
        { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1720074514' },
      ])
    );
    expect(report2).toEqual({ studentsCreated: 1, studentsExisting: 1 });

    const report3 = await importer.importStudents(
      createSeedFile2024([
        { name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' },
        { name: 'سارة', fatherName: 'خالد المحمود', collegeId: '1720074514' },
      ])
    );
    expect(report3).toEqual({ studentsCreated: 0, studentsExisting: 2 });
  });

  it('preserves existing enrollment data when adding new academic year', async () => {
    const importer = makeImporter();

    await importer.importStudents(
      createSeedFile([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    const firstStudent = await db.prisma.student.findUnique({
      where: { collegeId: '1723240193' },
      include: { enrollments: true },
    });
    const firstEnrollmentYear = firstStudent?.enrollments[0].academicYear;
    const firstEnrollmentSpecialization = firstStudent?.enrollments[0].specialization;
    const firstEnrollmentYearLevel = firstStudent?.enrollments[0].yearLevel;

    await importer.importStudents(
      createSeedFile2024([{ name: 'احمد تللو', fatherName: 'خالد', collegeId: '1723240193' }])
    );

    const student = await db.prisma.student.findUnique({
      where: { collegeId: '1723240193' },
      include: { enrollments: true },
    });

    expect(student?.enrollments).toHaveLength(2);
    const years = student?.enrollments.map((e) => e.academicYear).sort();
    expect(years).toEqual(['2024-2025', '2025-2026']);
    // Original enrollment data should be preserved (even if ID changes due to upsert)
    const originalEnrollment = student?.enrollments.find(
      (e) => e.academicYear === firstEnrollmentYear
    );
    expect(originalEnrollment?.specialization).toBe(firstEnrollmentSpecialization);
    expect(originalEnrollment?.yearLevel).toBe(firstEnrollmentYearLevel);
  });
});
