import { auth } from '@/auth';
import { UnauthenticatedError, UnauthorizedError } from '@/core/application/errors/common.errors';
import { UserRoleDTO } from '@/core/application/dtos/user.dto';
import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  handleServerError: async (error) => {
    console.error('Action Error:', error);

    if (error instanceof UnauthenticatedError || error instanceof UnauthorizedError) {
      return error.toPlainObject();
    }

    return {
      code: 'INTERNAL_SERVER_ERROR',
      message: DEFAULT_SERVER_ERROR_MESSAGE,
    };
  },
});

export const authActionClient = actionClient.use(async ({ next }) => {
  const session = await auth();
  if (!session?.user) {
    throw new UnauthenticatedError();
  }
  return next({ ctx: { user: session.user } });
});

export const adminActionClient = authActionClient.use(async ({ next, ctx }) => {
  if (ctx.user.role !== UserRoleDTO.ADMIN) {
    throw new UnauthorizedError();
  }
  return next({ ctx });
});

export const studentActionClient = authActionClient.use(async ({ next, ctx }) => {
  if (!ctx.user.isStudent) {
    throw new UnauthorizedError();
  }
  return next({ ctx });
});
