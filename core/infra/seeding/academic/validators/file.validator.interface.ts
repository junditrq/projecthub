import { Specialization } from '@/core/domain/enums/specialization.enum';
import { YearLevel } from '@/core/domain/enums/year-level.enum';
import { SeedGroupsFile } from '../schemas/groups-file.schema';
import { SeedStudentsFile } from '../schemas/students-file.schema';
import { SeedSubjectSlug } from '../schemas/subject.schema';
import { Result } from '@/core/domain/shared/result';
import { FileValidatorError } from './file.validator.error';

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

export interface IFileValidator {
  validateFilePath(filePath: string): Promise<Result<ParsedPathParts, FileValidatorError>>;
  validateIdsContent(fileContent: string): Result<SeedStudentsFile, FileValidatorError>;
  validateGroupsContent(fileContent: string): Promise<Result<SeedGroupsFile, FileValidatorError>>;
  validateIdsConsistency(
    pathParts: ParsedPathParts,
    file: SeedStudentsFile
  ): Result<void, FileValidatorError>;
  validateGroupsConsistency(
    pathParts: ParsedPathParts,
    file: SeedGroupsFile
  ): Result<void, FileValidatorError>;
}
