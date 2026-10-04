'use server';

import { serializeResult } from '@/core/domain/shared/result';
import container from '@/core/infra/di/container';
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

    return serializeResult(result);
  });
