import type { CreateVerificationRequestError } from '@/core/application/usecases/verification-requests/create-verification-request.errors';
import type { CreateVerificationRequestFormData } from '@/lib/schemas/verification-form.schema';
import type { FieldPath } from 'react-hook-form';

export const VERIFICATION_ERROR_MAP: Record<
  CreateVerificationRequestError['code'],
  {
    field: FieldPath<CreateVerificationRequestFormData> | 'root';
    message: string;
  }
> = {
  PENDING_VERIFICATION_REQUEST_EXISTS: {
    field: 'root',
    message: 'You already have a pending verification request.',
  },
  ALREADY_STUDENT: {
    field: 'root',
    message: 'Your verification request has already been approved.',
  },
  STUDENT_NOT_FOUND: {
    field: 'collegeId',
    message: 'The provided college ID does not match any student records.',
  },
  INVALID_COLLEGE_ID_FILE: {
    field: 'collegeIdFileKey',
    message: 'File does not exist or expired. Re-upload your college ID file and try again.',
  },
  STUDENT_ALREADY_LINKED_TO_USER: {
    field: 'collegeId',
    message: 'This student is already linked to another user.',
  },
};

export const VERIFICATION_UNEXPECTED_MESSAGE =
  'An unexpected error occurred. Please try again later.';

export const VERIFICATION_SUBMIT_SUCCESS_MESSAGE = 'Your request has been submitted successfully.';
