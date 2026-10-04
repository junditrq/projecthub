import { z } from 'zod';
import path from 'path';
import fs from 'node:fs/promises';
import { SeedAcademicYearSchema } from '../schemas/academic-year.schema';
import { IFileValidator, ParsedPathParts } from './file.validator.interface';
import { SpecializationPathPartSchema } from '../schemas/specialization.path-part.schema';
import { YearLevelPathPartSchema } from '../schemas/year-level.path-part.schema';
import { SubjectPathPartSchema } from '../schemas/subject.path-part.schema';
import { ParseSpecializationPath, ParseYearLevelPath } from '../schemas/utils/to-domain-enum';
import { SeedStudentsFile, SeedStudentsFileSchema } from '../schemas/students-file.schema';
import { SeedSubjectSlug } from '../schemas/subject.schema';
import { SeedGroupsFile, SeedGroupsFileSchema } from '../schemas/groups-file.schema';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { CurriculumService } from '@/core/domain/services/curriculum.service';
import { normalizeArabicName } from '@/core/domain/utils/normalize-arabic-name.util';
import { fail, ok, Result } from '@/core/domain/shared/result';
import { FileValidatorError } from './file.validator.error';

export const PathPartsSchema = z.tuple([
  SeedAcademicYearSchema,
  YearLevelPathPartSchema,
  SpecializationPathPartSchema,
]);

export class FileValidator implements IFileValidator {
  constructor(
    private readonly _dataPath: string,
    private readonly _subjectRepo: ISubjectRepo
  ) {}

  private _parseJson(fileContent: string) {
    try {
      return { success: true, data: JSON.parse(fileContent) };
    } catch {
      return { success: false, data: null };
    }
  }

  private _findDuplicateNamesInSeedGroup(students: string[]): Set<string> {
    const seen = new Set<string>();
    const duplicates = new Set<string>();

    for (const name of students) {
      const normalized = normalizeArabicName(name);
      if (seen.has(normalized)) {
        duplicates.add(normalized);
      }
      seen.add(normalized);
    }

    return duplicates;
  }

  async validateFilePath(filePath: string): Promise<Result<ParsedPathParts, FileValidatorError>> {
    const parts = filePath.split('__');

    if (parts.length !== 4) {
      return fail(
        new FileValidatorError(
          'Invalid path structure. Expected format: <academic-year>__<year-level>__<specialization>__<file-name>.json'
        )
      );
    }

    const [academicYear, yearLevel, specialization, fileNameExt] = parts;

    const pathPartsResult = PathPartsSchema.safeParse([academicYear, yearLevel, specialization]);

    if (!pathPartsResult.success) {
      return fail(
        new FileValidatorError(
          pathPartsResult.error.issues.map((issue) => issue.message).join(', ')
        )
      );
    }

    if (!fileNameExt.endsWith('.json')) {
      return fail(new FileValidatorError('File name must end with .json'));
    }

    const fileName = fileNameExt.replace('.json', '');
    const isIds = fileName === 'ids';

    const [validAcademicYear, validYearLevel, validSpecialization] = pathPartsResult.data;
    const specializationEnum = ParseSpecializationPath.parse(validSpecialization);
    const yearLevelEnum = ParseYearLevelPath.parse(validYearLevel);

    let subjectSlug: SeedSubjectSlug | undefined;
    if (!isIds) {
      const subjectSafe = SubjectPathPartSchema.safeParse(fileName);
      if (!subjectSafe.success) {
        return fail(
          new FileValidatorError(subjectSafe.error.issues.map((issue) => issue.message).join(', '))
        );
      }
      subjectSlug = subjectSafe.data;

      const subject = await this._subjectRepo.findBySlug(subjectSlug);

      if (!subject) {
        return fail(new FileValidatorError(`Subject with slug ${fileName} not found`));
      }

      if (!subject.allowsSpecialization(specializationEnum)) {
        return fail(
          new FileValidatorError(
            `Subject ${subject.name} is not allowed for specialization ${specialization}`
          )
        );
      }

      if (!subject.belongsToYearLevel(yearLevelEnum)) {
        return fail(
          new FileValidatorError(
            `Subject ${subject.name} is not allowed for year level ${yearLevel}`
          )
        );
      }
    }

    if (isIds) {
      if (!CurriculumService.isSpecializationInYearLevel(specializationEnum, yearLevelEnum)) {
        return fail(
          new FileValidatorError(
            `Specialization ${validSpecialization} is not allowed for year level ${validYearLevel}`
          )
        );
      }
    }

    const resolvedPath = path.resolve(this._dataPath, filePath);

    try {
      await fs.access(resolvedPath);
    } catch {
      return fail(new FileValidatorError(`File does not exist at path: ${filePath}`));
    }

    if (subjectSlug === undefined) {
      return ok({
        academicYear: validAcademicYear,
        yearLevel: yearLevelEnum,
        specialization: specializationEnum,
        fileName: 'ids',
        isIds: true,
      });
    }

    return ok({
      academicYear: validAcademicYear,
      yearLevel: yearLevelEnum,
      specialization: specializationEnum,
      fileName: subjectSlug,
      isIds: false,
    });
  }

  validateIdsContent(fileContent: string): Result<SeedStudentsFile, FileValidatorError> {
    const parsed = this._parseJson(fileContent);
    if (!parsed.success) {
      return fail(new FileValidatorError('Bad json'));
    }

    const result = SeedStudentsFileSchema.safeParse(parsed.data);
    if (!result.success) {
      return fail(
        new FileValidatorError(result.error.issues.map((issue) => issue.message).join(', '))
      );
    }

    const { specialization, yearLevel } = result.data;

    if (!CurriculumService.isSpecializationInYearLevel(specialization, yearLevel)) {
      return fail(
        new FileValidatorError(
          `Specialization ${specialization} is not allowed for year level ${yearLevel}`
        )
      );
    }

    const seenIds = new Set<string>();
    const duplicateIds = new Set<string>();

    for (const student of result.data.students) {
      if (seenIds.has(student.collegeId)) {
        duplicateIds.add(student.collegeId);
      } else {
        seenIds.add(student.collegeId);
      }
    }

    if (duplicateIds.size > 0) {
      return fail(
        new FileValidatorError(
          `Duplicate college IDs found: ${Array.from(duplicateIds).join(', ')}`
        )
      );
    }

    return ok(result.data);
  }

  validateIdsConsistency(
    pathParts: ParsedPathParts,
    file: SeedStudentsFile
  ): Result<void, FileValidatorError> {
    if (pathParts.academicYear !== file.academicYear) {
      return fail(
        new FileValidatorError(
          `Academic year mismatch: path has ${pathParts.academicYear} but content has ${file.academicYear}`
        )
      );
    }
    if (pathParts.specialization !== file.specialization) {
      return fail(
        new FileValidatorError(
          `Specialization mismatch: path has ${pathParts.specialization} but content has ${file.specialization}`
        )
      );
    }
    if (pathParts.yearLevel !== file.yearLevel) {
      return fail(
        new FileValidatorError(
          `Year level mismatch: path has ${pathParts.yearLevel} but content has ${file.yearLevel}`
        )
      );
    }
    return ok(undefined);
  }

  async validateGroupsContent(
    fileContent: string
  ): Promise<Result<SeedGroupsFile, FileValidatorError>> {
    const parsed = this._parseJson(fileContent);
    if (!parsed.success) {
      return fail(new FileValidatorError('Bad json'));
    }

    const result = SeedGroupsFileSchema.safeParse(parsed.data);
    if (!result.success) {
      return fail(
        new FileValidatorError(result.error.issues.map((issue) => issue.message).join(', '))
      );
    }

    const { subjectSlug, specialization, groups } = result.data;

    const subject = await this._subjectRepo.findBySlug(subjectSlug);
    if (!subject) {
      return fail(new FileValidatorError(`Subject with slug ${subjectSlug} not found`));
    }

    if (!subject.allowsSpecialization(specialization)) {
      return fail(
        new FileValidatorError(
          `Subject ${subject.name} is not allowed for specialization ${specialization}`
        )
      );
    }

    const groupsWithDuplicates = [];
    for (const [i, group] of groups.entries()) {
      const duplicates = this._findDuplicateNamesInSeedGroup(group.students);
      if (duplicates.size > 0) {
        groupsWithDuplicates.push({
          groupIndex: i,
          duplicates: Array.from(duplicates),
        });
      }
    }

    if (groupsWithDuplicates.length > 0) {
      return fail(
        new FileValidatorError(
          `Duplicate student names found in groups: ${JSON.stringify(groupsWithDuplicates, null, 2)}`
        )
      );
    }

    return ok(result.data);
  }

  validateGroupsConsistency(
    pathParts: ParsedPathParts,
    file: SeedGroupsFile
  ): Result<void, FileValidatorError> {
    if (pathParts.academicYear !== file.academicYear) {
      return fail(
        new FileValidatorError(
          `Academic year mismatch: path has ${pathParts.academicYear} but content has ${file.academicYear}`
        )
      );
    }
    if (pathParts.specialization !== file.specialization) {
      return fail(
        new FileValidatorError(
          `Specialization mismatch: path has ${pathParts.specialization} but content has ${file.specialization}`
        )
      );
    }
    if (pathParts.fileName !== file.subjectSlug) {
      return fail(
        new FileValidatorError(
          `Subject mismatch: path has ${pathParts.fileName} but content has ${file.subjectSlug}`
        )
      );
    }
    return ok(undefined);
  }
}
