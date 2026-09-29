import path from 'path';
import prisma from '../../orm/prisma/prisma.client';
import { PrismaStudentRepo } from '../../repos/prisma/student.repo';
import { PrismaSubjectRepo } from '../../repos/prisma/subject.repo';
import { SeedGroupsFile } from './schemas/groups-file.schema';
import { SeedStudentsFile } from './schemas/students-file.schema';
import { FileRepo } from './repos/file.repo';
import { FileValidator } from './validators/file.validator';
import { StudentsImporter } from './importers/students/students.importer';
import { GroupsImporter } from './importers/groups/groups.importer';
import { printStudentsImportReport } from './importers/students/student-import.report';
import { printGroupsImportReport } from './importers/groups/groups-import.report';

// WIP fly-testing harness. Run with:
//   tsx core/infra/seeding/academic/import.ts
// Flow: discover -> validate paths -> validate content -> seed ids (oldest
// first) -> seed groups (oldest first, stops run on first file error).
// Staging only: clone prod locally, iterate here, import prod when satisfied.

const DATA_PATH = path.resolve(__dirname, '../academic/data/');

const fail = async (message: string): Promise<never> => {
  console.error(message);
  await prisma.$disconnect();
  process.exit(1);
};

async function main() {
  const fileRepo = new FileRepo(DATA_PATH);
  const subjectRepo = new PrismaSubjectRepo();
  const fileValidator = new FileValidator(DATA_PATH, subjectRepo);
  const studentImporter = new StudentsImporter(new PrismaStudentRepo());
  const groupImporter = new GroupsImporter(prisma, subjectRepo);

  // P0 — discovery, oldest years first (lexicographic sort matches academic-year labels).
  const filesResult = await fileRepo.getFiles();
  if (!filesResult.success) {
    return fail(`[Discovery] ${filesResult.error}`);
  }
  const allFiles = [...filesResult.files].sort();
  const idsFiles = allFiles.filter((f) => f.endsWith('ids.json'));
  const groupFiles = allFiles.filter((f) => f.endsWith('.json') && !f.endsWith('ids.json'));

  console.log(
    `[Discovery] ${allFiles.length} files: ${idsFiles.length} ids, ${groupFiles.length} groups (oldest first).`
  );

  // P1 — path + file-name validation.
  for (const file of allFiles) {
    const validated = await fileValidator.validateFilePath(file);
    if (!validated.valid) {
      return fail(`[Path] ${validated.path} | ${validated.message}`);
    }
  }
  console.log('[Paths] all file paths and names are valid. Validating contents...');

  // P2 — content validation.
  const studentsFiles: SeedStudentsFile[] = [];
  for (const file of idsFiles) {
    const raw = await fileRepo.readFileContent(file);
    if (!raw.success) {
      return fail(`[Content] ${file} | ${raw.error}`);
    }
    const validated = fileValidator.validateIdsContent(raw.data);
    if (!validated.valid) {
      return fail(`[Content] ${file} | ${validated.message}`);
    }
    studentsFiles.push(validated.file);
  }

  const groupsFiles: SeedGroupsFile[] = [];
  for (const file of groupFiles) {
    const raw = await fileRepo.readFileContent(file);
    if (!raw.success) {
      return fail(`[Content] ${file} | ${raw.error}`);
    }
    const validated = await fileValidator.validateGroupsContent(raw.data);
    if (!validated.valid) {
      return fail(`[Content] ${file} | ${validated.message}`);
    }
    groupsFiles.push(validated.file);
  }
  console.log('[Content] all files are valid. Seeding students first, then groups.');

  // P3 — students.
  for (const file of studentsFiles) {
    const report = await studentImporter.importStudents(file);
    printStudentsImportReport(report, file);
  }

  // P4 — groups, one transaction per file. First error stops the whole run:
  // later files may depend on earlier commits (cross-specialization grouping).
  for (const file of groupsFiles) {
    try {
      const report = await groupImporter.importGroups(file);
      printGroupsImportReport(report, file);
    } catch (error) {
      return fail(
        `[Groups] aborted on ${file.academicYear} ${file.subjectSlug} ${file.specialization} — ` +
          `file rolled back, fix and reseed. ${error instanceof Error ? error.message : error}`
      );
    }
  }

  console.log('Academic seeding completed successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
