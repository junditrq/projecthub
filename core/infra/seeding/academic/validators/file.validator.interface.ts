import { Specialization } from '@/core/domain/entities/specialization.enum';
import { YearLevel } from '@/core/domain/entities/subject.entity';
import { SeedGroupsFile } from '../schemas/groups-file.schema';
import { SeedStudentsFile } from '../schemas/students-file.schema';
import { SeedSubjectSlug } from '../schemas/subject.schema';

export type ParsedPathParts =
  | {
      academicYear: string;
      yearLevel: YearLevel;
      specialization: Specialization;
      fileName: 'ids';
      isIds: true;
    }
  | {
      academicYear: string;
      yearLevel: YearLevel;
      specialization: Specialization;
      fileName: SeedSubjectSlug;
      isIds: false;
    };

export type FilePathValidatorResult =
  | {
      valid: false;
      message: string;
      path: string;
    }
  | {
      valid: true;
      path: string;
      pathParts: ParsedPathParts;
    };

export type IdsContentValidatorResult =
  | {
      valid: false;
      message: string;
    }
  | {
      valid: true;
      file: SeedStudentsFile;
    };

export type GroupsContentValidatorResult =
  | {
      valid: false;
      message: string;
    }
  | {
      valid: true;
      file: SeedGroupsFile;
    };

export type IdsConsistencyValidatorResult =
  | {
      valid: false;
      message: string;
    }
  | {
      valid: true;
    };

export type GroupsConsistencyValidatorResult =
  | {
      valid: false;
      message: string;
    }
  | {
      valid: true;
    };

export interface IFileValidator {
  validateFilePath(filePath: string): Promise<FilePathValidatorResult>;
  validateIdsContent(fileContent: string): IdsContentValidatorResult;
  validateGroupsContent(fileContent: string): Promise<GroupsContentValidatorResult>;
  validateIdsConsistency(
    pathParts: ParsedPathParts,
    file: SeedStudentsFile
  ): IdsConsistencyValidatorResult;
  validateGroupsConsistency(
    pathParts: ParsedPathParts,
    file: SeedGroupsFile
  ): GroupsConsistencyValidatorResult;
}
