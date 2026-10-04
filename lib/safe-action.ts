import { auth } from '@/auth';
import { UnauthenticatedError, UnauthorizedError } from '@/core/application/errors/common.errors';
import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  handleServerError: async (error) => {
    console.error('Action Error:', error);

    if (error instanceof UnauthenticatedError || error instanceof UnauthorizedError) {
      return error.code;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

export const authActionClient = actionClient.use(async ({ next }) => {
  const session = await auth();
  if (!session?.user) {
    throw new UnauthenticatedError();
  }
  return next({ ctx: { user: session.user } });
});
