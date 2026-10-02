import path from 'node:path';
import container from '../../../di/container';
import prisma from '../../../orm/prisma/prisma.client';
import { StudentsImporter } from '../importers/students/students.importer';
import { GroupsImporter } from '../importers/groups/groups.importer';
import type { ValidateReport } from './validate.command';
import { IFileRepo } from '../repos/file.repo.interface';
import { IFileValidator } from '../validators/file.validator.interface';

export type AcademicDeps = {
  dataPath: string;
  fileRepo: IFileRepo;
  fileValidator: IFileValidator;
  studentImporter: StudentsImporter;
  groupImporter: GroupsImporter;
  disconnect: () => Promise<void>;
};

export const getAcademicDeps = (): AcademicDeps => {
  return {
    dataPath: container.get('AcademicDataPath'),
    fileRepo: container.get('IFileRepo'),
    fileValidator: container.get('IFileValidator'),
    studentImporter: container.get('StudentsImporter'),
    groupImporter: container.get('GroupsImporter'),
    disconnect: () => prisma.$disconnect(),
  };
};

export type NormalizeFileResult = { ok: true; file: string } | { ok: false; error: string };

/**
 * Normalizes a `--file` argument to a data-dir-relative file name.
 * Accepts absolute paths, cwd-relative paths, or bare file names.
 * Rejects anything escaping the data directory.
 */
export const normalizeFileArg = (dataPath: string, raw: string): NormalizeFileResult => {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, error: 'Empty --file value. Provide a file path.' };
  }
  const absolute = path.isAbsolute(trimmed)
    ? path.normalize(trimmed)
    : path.basename(trimmed) === trimmed
      ? path.join(dataPath, trimmed)
      : path.resolve(process.cwd(), trimmed);
  const relative = path.relative(dataPath, absolute);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    return {
      ok: false,
      error: `File is outside the data directory (${dataPath}): ${trimmed}`,
    };
  }
  if (relative.includes(path.sep)) {
    return {
      ok: false,
      error: `Nested paths are not supported, expected a file directly in ${dataPath}: ${trimmed}`,
    };
  }
  return { ok: true, file: relative };
};

export const printValidateReport = (report: ValidateReport): void => {
  const failed = new Set(report.issues.filter((i) => i.level === 'error').map((i) => i.file));
  for (const file of report.files) {
    const errors = report.issues.filter((i) => i.file === file && i.level === 'error');
    if (errors.length === 0) {
      console.log(`[OK] ${file}`);
    }
    for (const issue of errors) {
      console.log(`[FAIL] ${issue.file} | [${issue.stage}] ${issue.message}`);
    }
  }
  for (const issue of report.issues.filter((i) => i.level === 'warn')) {
    console.log(`[WARN] ${issue.file} | [${issue.stage}] ${issue.message}`);
  }
  if (report.issues.length === 0) {
    console.log(
      `[Validate] ${report.files.length} files valid ` +
        `(${report.idsCount} ids, ${report.groupsCount} groups).`
    );
  } else {
    const errorCount = report.issues.filter((i) => i.level === 'error').length;
    const warnCount = report.issues.length - errorCount;
    console.log(
      `[Validate] ${report.files.length} files: ` +
        `${report.files.length - failed.size} passed, ${failed.size} failed ` +
        `(${errorCount} errors, ${warnCount} warnings).`
    );
  }
};
