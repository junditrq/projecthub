import { BaseError } from '@/core/domain/shared/base.error';
import { Result } from '@/core/domain/shared/result';

export class StorageFileNotFoundError extends BaseError<'STORAGE_FILE_NOT_FOUND'> {
  readonly code = 'STORAGE_FILE_NOT_FOUND' as const;

  constructor(readonly sourceKey: string) {
    super(`Storage file not found: ${sourceKey}`);
  }
}

export interface IStorageService {
  getUploadURL: (fileKey: string, fileType: string, expiresIn?: number) => Promise<string>;
  deleteFile: (fileKey: string) => Promise<void>;
  deleteFiles: (fileKeys: string[]) => Promise<void>;
  fileExists: (fileKey: string) => Promise<boolean>;
  copyFile: (
    sourceKey: string,
    destinationKey: string
  ) => Promise<Result<void, StorageFileNotFoundError>>;
  moveFile: (
    sourceKey: string,
    destinationKey: string
  ) => Promise<Result<void, StorageFileNotFoundError>>;
}
