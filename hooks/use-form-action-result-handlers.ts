import { DOMAIN_ERROR_CODES } from '@/core/domain/errors/domain-error-codes';
import { FormActionResult } from '@/lib/presentation/types/form-action-result.type';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FieldValues, UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';

interface params<FormDataType extends FieldValues> {
  setError: UseFormSetError<FormDataType>;
  onSuccess?: () => void;
  onError?: (error: string | Error) => void;
}

export const useFormActionResultHandlers = <FormDataType extends FieldValues>({
  setError,
  onError,
  onSuccess = () => {},
}: params<FormDataType>) => {
  const router = useRouter();

  const handleUnauthenticated = async () => {
    toast.error('Your session has expired.');
    await signOut({ redirect: false });
    router.replace(`/`);
  };

  const handleSuccess = async (result: FormActionResult<FormDataType>) => {
    if (result.success) {
      onSuccess();
      return;
    }

    if (result.serverError) {
      if (result.serverError === DOMAIN_ERROR_CODES.UNAUTHENTICATED) {
        handleUnauthenticated();
      } else {
        if (onError) {
          onError(result.serverError);
        }
        setError('root', {
          message: result.serverError,
        });
      }
    }

    if (result.fieldErrors) {
      for (const [key, message] of Object.entries(result.fieldErrors)) {
        setError(
          key as keyof Extract<FormActionResult<FormDataType>, { success: false }>['fieldErrors'],
          {
            message,
          }
        );
      }
    }
  };

  const handleError = (serverError: string | undefined, thrownError: Error | undefined) => {
    if (serverError === DOMAIN_ERROR_CODES.UNAUTHENTICATED) {
      handleUnauthenticated();
      return;
    }

    const errorMessage = serverError || thrownError?.message || 'An unexpected error occurred.';

    if (onError) {
      onError(serverError || thrownError || errorMessage);
    }

    setError('root', {
      message: errorMessage,
    });
  };

  return { handleSuccess, handleError };
};
