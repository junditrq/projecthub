import { SeedStudentsFile } from '../../schemas/students-file.schema';

export type StudentsImportReport = { studentsCreated: number; studentsExisting: number };

export const emptyReport = (): StudentsImportReport => ({
  studentsCreated: 0,
  studentsExisting: 0,
});

export const printStudentsImportReport = (
  report: StudentsImportReport,
  studentsFile: SeedStudentsFile
): void => {
  const { academicYear, yearLevel, specialization } = studentsFile;
  console.log('----------------------------------------');
  console.log(`Student Import Report: ${academicYear} ${yearLevel} ${specialization}`);
  console.log(`Students Created: ${report.studentsCreated}`);
  console.log(`Students Skipped: ${report.studentsExisting}`);
  console.log('----------------------------------------');
};
