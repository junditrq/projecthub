import { SeedGroupsFile } from '../../schemas/groups-file.schema';

export type SkippedSeedGroup = {
  students: string[];
  projectIdea: string;
};

export type GroupsImportReport = {
  groupsSeeded: number;
  groupsSkipped: number;
  skippedGroups: SkippedSeedGroup[];
  membersResolved: number;
  membersNotFound: number;
  membersConflict: number;
};

export const emptyReport = (): GroupsImportReport => ({
  groupsSeeded: 0,
  groupsSkipped: 0,
  skippedGroups: [],
  membersResolved: 0,
  membersNotFound: 0,
  membersConflict: 0,
});

export const printGroupsImportReport = (
  report: GroupsImportReport,
  groupsFile: SeedGroupsFile,
  opts: { verbose?: boolean } = {}
) => {
  const { academicYear, subjectSlug, specialization } = groupsFile;
  console.log('----------------------------------------');
  console.log(`Group Import Report: ${academicYear} ${subjectSlug} ${specialization}`);
  console.log(`Groups: ${report.groupsSeeded} seeded, ${report.groupsSkipped} skipped`);
  console.log(
    `Members: ${report.membersResolved} resolved, ` +
      `${report.membersNotFound} not found, ` +
      `${report.membersConflict} conflicts`
  );
  if (opts.verbose) {
    for (const skipped of report.skippedGroups) {
      console.log(`[Skipped] ${skipped.projectIdea}: ${skipped.students.join(', ')}`);
    }
  }
  console.log('----------------------------------------');
};
