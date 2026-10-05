import { BaseError } from '@/core/domain/shared/base.error';

export class FileValidatorError extends BaseError<'FILE_VALIDATION_FAILED'> {
  readonly code = 'FILE_VALIDATION_FAILED' as const;
}
