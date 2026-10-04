'use server';

import container from '@/core/infra/di/container';
import { authActionClient } from '@/lib/safe-action';

export const markUserAsPromptedAction = authActionClient.action(async ({ ctx: { user } }) => {
  const markUserAsPromptedUseCase = container.get('MarkUserAsPromptedUseCase');
  await markUserAsPromptedUseCase.execute(user.id);
});
