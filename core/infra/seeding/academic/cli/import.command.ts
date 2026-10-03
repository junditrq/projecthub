import type { GroupsImporter } from '../importers/groups/groups.importer';
import type { GroupsImportReport } from '../importers/groups/groups-import.report';
import type { StudentsImporter } from '../importers/students/students.importer';
import type { StudentsImportReport } from '../importers/students/student-import.report';
import type { SeedGroupsFile } from '../schemas/groups-file.schema';
import type { SeedStudentsFile } from '../schemas/students-file.schema';
import { runValidate, type ValidateDeps, type ValidateReport } from './validate.command';

export type ImportDeps = ValidateDeps & {
  studentImporter: StudentsImporter;
  groupImporter: GroupsImporter;
};

export type ImportResult =
  | {
      ok: true;
      validateReport: ValidateReport;
      studentsReports: { file: SeedStudentsFile; report: StudentsImportReport }[];
      groupsReports: { file: SeedGroupsFile; report: GroupsImportReport }[];
    }
  | {
      ok: false;
      validateReport: ValidateReport;
      /** Set when validation itself failed (no import attempted). */
      validationFailed: boolean;
      failedFile?: SeedGroupsFile;
      message: string;
    };

/**
 * Runs full-directory validation first (same logic as `academic validate`),
 * then imports students oldest-first and groups (one transaction per file,
 * first error stops the run since later files may depend on earlier commits).
 */
export const runImport = async (deps: ImportDeps): Promise<ImportResult> => {
  const { studentImporter, groupImporter } = deps;

  const validateReport = await runValidate(deps);
  if (!validateReport.ok) {
    return {
      ok: false,
      validateReport,
      validationFailed: true,
      message: 'Validation failed, no data was imported. Fix the errors above and retry.',
    };
  }

  const studentsReports: { file: SeedStudentsFile; report: StudentsImportReport }[] = [];
  for (const file of validateReport.studentsFiles.sort()) {
    console.log(
      `Importing students from ${file.academicYear} ${file.yearLevel} ${file.specialization}...`
    );
    const report = await studentImporter.importStudents(file);
    studentsReports.push({ file, report });
  }

  const groupsReports: { file: SeedGroupsFile; report: GroupsImportReport }[] = [];
  for (const file of validateReport.groupsFiles) {
    try {
      const report = await groupImporter.importGroups(file);
      groupsReports.push({ file, report });
    } catch (error) {
      return {
        ok: false,
        validateReport,
        validationFailed: false,
        failedFile: file,
        message:
          `[Groups] aborted on ${file.academicYear} ${file.subjectSlug} ${file.specialization} — ` +
          `file rolled back, fix and reseed. ${error instanceof Error ? error.message : error}`,
      };
    }
  }

  return { ok: true, validateReport, studentsReports, groupsReports };
};
