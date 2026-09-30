import { z } from 'zod';
import path from 'path';
import fs from 'node:fs/promises';
import { SeedAcademicYearSchema } from '../schemas/academic-year.schema';
import {
  FilePathValidatorResult,
  GroupsContentValidatorResult,
  IdsContentValidatorResult,
  IFileValidator,
} from './file.validator.interface';
import { SpecializationPathPartSchema } from '../schemas/specialization.path-part.schema';
import { YearLevelPathPartSchema } from '../schemas/year-level.path-part.schema';
import { SubjectPathPartSchema } from '../schemas/subject.path-part.schema';
import { ParseSpecializationPath, ParseYearLevelPath } from '../schemas/utils/to-prisma-enum';
import { SeedStudentsFileSchema } from '../schemas/students-file.schema';
import { SeedGroupsFileSchema } from '../schemas/groups-file.schema';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { PrismaSpecializationMapper } from '@/core/infra/mappers/specialization.prisma.mapper';
import { PrismaYearLevelMapper } from '@/core/infra/mappers/year-level.prisma.mapper';
import { CurriculumService } from '@/core/domain/services/curriculum.service';
import { normalizeArabicName } from '@/core/domain/utils/normalize-arabic-name.util';

export const PathPartsSchema = z.tuple([
  SeedAcademicYearSchema,
  YearLevelPathPartSchema,
  SpecializationPathPartSchema,
]);

export class FileValidator implements IFileValidator {
  private static readonly INVALID_PATH_STRUCTURE_ERROR =
    'Invalid path structure. Expected format: <academic-year>__<year-level>__<specialization>__<file-name>.json';

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

  async validateFilePath(filePath: string): Promise<FilePathValidatorResult> {
    const parts = filePath.split('__');

    if (parts.length !== 4) {
      return {
        valid: false,
        message: FileValidator.INVALID_PATH_STRUCTURE_ERROR,
        path: filePath,
      };
    }

    const [academicYear, yearLevel, specialization, fileNameExt] = parts;

    const pathPartsResult = PathPartsSchema.safeParse([academicYear, yearLevel, specialization]);

    if (!pathPartsResult.success) {
      return {
        valid: false,
        message: pathPartsResult.error.issues.map((issue) => issue.message).join(', '),
        path: filePath,
      };
    }

    if (!fileNameExt.endsWith('.json')) {
      return {
        valid: false,
        message: 'File name must end with .json',
        path: filePath,
      };
    }

    const fileName = fileNameExt.replace('.json', '');
    const isIds = fileName === 'ids';

    const [, validYearLevel, validSpecialization] = pathPartsResult.data;
    const specializationEnum = ParseSpecializationPath.parse(validSpecialization);
    const yearLevelEnum = ParseYearLevelPath.parse(validYearLevel);

    if (!isIds) {
      const subjectSafe = SubjectPathPartSchema.safeParse(fileName);
      if (!subjectSafe.success) {
        return {
          valid: false,
          message: subjectSafe.error.issues.map((issue) => issue.message).join(', '),
          path: filePath,
        };
      }

      const subject = await this._subjectRepo.findBySlug(fileName);

      if (!subject) {
        return {
          valid: false,
          message: `Subject with slug ${fileName} not found`,
          path: filePath,
        };
      }

      // TODO: The mapper should be injected and not importer.
      // Requires adding a mapper interface.
      if (!subject.allowsSpecialization(PrismaSpecializationMapper.toDomain(specializationEnum))) {
        return {
          valid: false,
          message: `Subject ${subject.name} is not allowed for specialization ${specialization}`,
          path: filePath,
        };
      }

      if (!subject.belongsToYearLevel(PrismaYearLevelMapper.toDomain(yearLevelEnum))) {
        return {
          valid: false,
          message: `Subject ${subject.name} is not allowed for year level ${yearLevel}`,
          path: filePath,
        };
      }
    }

    if (isIds) {
      if (
        !CurriculumService.isSpecializationInYearLevel(
          PrismaSpecializationMapper.toDomain(specializationEnum),
          PrismaYearLevelMapper.toDomain(yearLevelEnum)
        )
      ) {
        return {
          valid: false,
          message: `Specialization ${validSpecialization} is not allowed for year level ${validYearLevel}`,
          path: filePath,
        };
      }
    }

    const resolvedPath = path.resolve(this._dataPath, filePath);

    try {
      await fs.access(resolvedPath);
    } catch {
      return {
        valid: false,
        message: `File does not exist at path: ${filePath}`,
        path: filePath,
      };
    }

    return {
      valid: true,
      path: filePath,
    };
  }

  validateIdsContent(fileContent: string): IdsContentValidatorResult {
    const parsed = this._parseJson(fileContent);
    if (!parsed.success) {
      return {
        valid: false,
        message: 'Bad json',
      };
    }

    const result = SeedStudentsFileSchema.safeParse(parsed.data);
    if (!result.success) {
      return {
        valid: false,
        message: result.error.issues.map((issue) => issue.message).join(', '),
      };
    }

    const { specialization, yearLevel } = result.data;

    if (
      !CurriculumService.isSpecializationInYearLevel(
        PrismaSpecializationMapper.toDomain(specialization),
        PrismaYearLevelMapper.toDomain(yearLevel)
      )
    ) {
      return {
        valid: false,
        message: `Specialization ${specialization} is not allowed for year level ${yearLevel}`,
      };
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
      return {
        valid: false,
        message: `Duplicate college IDs found: ${Array.from(duplicateIds).join(', ')}`,
      };
    }

    return {
      valid: true,
      file: result.data,
    };
  }

  async validateGroupsContent(fileContent: string): Promise<GroupsContentValidatorResult> {
    const parsed = this._parseJson(fileContent);
    if (!parsed.success) {
      return {
        valid: false,
        message: 'Bad json',
      };
    }

    const result = SeedGroupsFileSchema.safeParse(parsed.data);
    if (!result.success) {
      return {
        valid: false,
        message: result.error.issues.map((issue) => issue.message).join(', '),
      };
    }

    const { subjectSlug, specialization, groups } = result.data;

    const subject = await this._subjectRepo.findBySlug(subjectSlug);
    if (!subject) {
      return {
        valid: false,
        message: `Subject with slug ${subjectSlug} not found`,
      };
    }

    if (!subject.allowsSpecialization(PrismaSpecializationMapper.toDomain(specialization))) {
      return {
        valid: false,
        message: `Subject ${subject.name} is not allowed for specialization ${specialization}`,
      };
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
      return {
        valid: false,
        message: `Duplicate student names found in groups: ${JSON.stringify(groupsWithDuplicates, null, 2)}`,
      };
    }

    return {
      valid: true,
      file: result.data,
    };
  }
}
