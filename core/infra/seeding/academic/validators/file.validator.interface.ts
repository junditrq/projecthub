import { SeedGroupsFile } from '../schemas/groups-file.schema';
import { SeedStudentsFile } from '../schemas/students-file.schema';

export type FilePathValidatorResult =
  | {
      valid: false;
      message: string;
      path: string;
    }
  | {
      valid: true;
      path: string;
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

export interface IFileValidator {
  validateFilePath(filePath: string): Promise<FilePathValidatorResult>;
  validateIdsContent(fileContent: string): IdsContentValidatorResult;
  validateGroupsContent(fileContent: string): Promise<GroupsContentValidatorResult>;
}
