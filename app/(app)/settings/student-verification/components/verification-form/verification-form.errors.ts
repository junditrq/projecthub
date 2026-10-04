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
    field: 'arabicName',
    message:
      'Your name was not found in the college list. Please make sure you entered it correctly.',
  },
  INVALID_COLLEGE_ID_FILE: {
    field: 'collegeIdFileKey',
    message: 'File does not exist or expired. Re-upload your college ID file and try again.',
  },
};

export const VERIFICATION_UNEXPECTED_MESSAGE =
  'An unexpected error occurred. Please try again later.';

export const VERIFICATION_SUBMIT_SUCCESS_MESSAGE = 'Your request has been submitted successfully.';
