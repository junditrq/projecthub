import 'dotenv/config';
import { Command, Option } from 'commander';
import { getAcademicDeps, printValidateReport } from './academic.shared';
import { runValidate } from './validate.command';
import { runImport } from './import.command';
import { printStudentsImportReport } from '../importers/students/student-import.report';
import { printGroupsImportReport } from '../importers/groups/groups-import.report';

const program = new Command();
program.name('academic').description('Academic seed data CLI (validate + import)');

program
  .command('validate')
  .description('Validate seed file paths, contents, and path/content consistency')
  .addOption(
    new Option('-f, --file <path>', 'Validate a single file (path or bare file name)').default(
      undefined
    )
  )
  .action(async (opts: { file?: string }) => {
    const deps = getAcademicDeps();
    try {
      const report = await runValidate(deps, { file: opts.file });
      printValidateReport(report);
      process.exit(report.ok ? 0 : 1);
    } catch (error) {
      console.error(
        `[Validate] unexpected failure: ${error instanceof Error ? error.message : error}`
      );
      process.exit(1);
    } finally {
      await deps.disconnect();
    }
  });

program
  .command('import')
  .description('Validate all seed files, then import students and groups into the database')
  .option('-v, --verbose', 'List skipped (already seeded) groups in the import report')
  .action(async (opts: { verbose?: boolean }) => {
    const deps = getAcademicDeps();
    try {
      const result = await runImport(deps);
      printValidateReport(result.validateReport);
      if (!result.ok) {
        console.error(`[Import] ${result.message}`);
        process.exit(1);
      }
      for (const { file, report } of result.studentsReports) {
        printStudentsImportReport(report, file);
      }
      for (const { file, report } of result.groupsReports) {
        printGroupsImportReport(report, file, { verbose: opts.verbose });
      }
      console.log('Academic import completed successfully.');
    } catch (error) {
      console.error(
        `[Import] unexpected failure: ${error instanceof Error ? error.message : error}`
      );
      process.exit(1);
    } finally {
      await deps.disconnect();
    }
  });

program.parseAsync(process.argv);
