'use server';

import container from '@/core/infra/di/container';
import { CreateVerificationRequestPresenter } from '@/lib/presentation/presenters/verification-requests/create-verification-request.presenter';
import { authActionClient } from '@/lib/safe-action';
import { CreateVerificationRequestSchema } from '@/lib/schemas/verification-form.schema';

export const createVerificationRequestAction = authActionClient
  .inputSchema(CreateVerificationRequestSchema)
  .action(async ({ parsedInput: { arabicName, collegeIdFileKey }, ctx: { user } }) => {
    const createVerificationRequestUseCase = container.get('CreateVerificationRequestUseCase');

    const result = await createVerificationRequestUseCase.execute({
      arabicName,
      collegeIdFileKey,
      userId: user.id,
    });

    return CreateVerificationRequestPresenter.present(result);
  });
