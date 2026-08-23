import { CreateVerificationRequestUseCaseResult } from '@/core/application/usecases/verification-requests/create-verification-request.usecase';
import { CreateVerificationRequestFormData } from '@/lib/schemas/verification-form.schema';
import { FormActionResult } from '../../types/form-action-result.type';

export type CreateVerificationRequestActionResult =
  FormActionResult<CreateVerificationRequestFormData>;

export type CreateVerificationRequestFieldErrors = Extract<
  CreateVerificationRequestActionResult,
  { success: false }
>['fieldErrors'];

export class CreateVerificationRequestPresenter {
  static present(
    result: CreateVerificationRequestUseCaseResult
  ): CreateVerificationRequestActionResult {
    if (result.success) {
      return {
        success: true,
      };
    }

    console.error('CreateVerificationRequestUseCase failed:', result.error);

    const fieldErrors: CreateVerificationRequestFieldErrors = {};

    let serverError: string | undefined = undefined;

    switch (result.error.code) {
      case 'STUDENT_NOT_FOUND':
        fieldErrors['arabicName'] = result.error.message;
        break;
      case 'INVALID_COLLEGE_ID_FILE':
        fieldErrors['collegeIdFileKey'] = result.error.message;
        break;
      case 'PENDING_VERIFICATION_REQUEST_EXISTS':
        serverError = result.error.message;
        break;
      case 'ALREADY_VERIFIED':
        serverError = result.error.message;
        break;
      default:
        serverError = result.error.code;
    }

    return {
      success: false,
      fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
      serverError,
    };
  }
}
