import { InferErrorUnion } from '@/core/domain/shared/base.error';
import { ConflictError, UnprocessableError } from '../../errors/common.errors';

export class AlreadyStudentError extends ConflictError<'ALREADY_STUDENT'> {
  readonly code = 'ALREADY_STUDENT' as const;
  constructor() {
    super('AlreadyStudentError');
  }
}

export class CollegeIdFileNotFound extends UnprocessableError<'INVALID_COLLEGE_ID_FILE'> {
  readonly code = 'INVALID_COLLEGE_ID_FILE' as const;
  constructor() {
    super('CollegeIdFileNotFound');
  }
}

export class StudentNotFoundError extends UnprocessableError<'STUDENT_NOT_FOUND'> {
  readonly code = 'STUDENT_NOT_FOUND' as const;

  constructor() {
    super('StudentNotFoundError');
  }
}

export class PendingVerificationRequestExistsError extends ConflictError<'PENDING_VERIFICATION_REQUEST_EXISTS'> {
  readonly code = 'PENDING_VERIFICATION_REQUEST_EXISTS' as const;
  constructor() {
    super('PendingVerificationRequestExistsError');
  }
}

export class StudentAlreadyLinkedToUserError extends ConflictError<'STUDENT_ALREADY_LINKED_TO_USER'> {
  readonly code = 'STUDENT_ALREADY_LINKED_TO_USER' as const;
  constructor() {
    super('StudentAlreadyLinkedToUserError');
  }
}

export const CreateVerificationRequestError = {
  alreadyStudent: () => new AlreadyStudentError(),
  collegeIdFileNotFound: () => new CollegeIdFileNotFound(),
  studentNotFound: () => new StudentNotFoundError(),
  pendingVerificationRequestExists: () => new PendingVerificationRequestExistsError(),
  studentAlreadyLinkedToUser: () => new StudentAlreadyLinkedToUserError(),
} as const;

export type CreateVerificationRequestError = InferErrorUnion<typeof CreateVerificationRequestError>;
