import { auth } from "@/auth";
import {
    AuthenticationError,
    BusinessRuleError,
    DomainError,
} from "@/core/domain/errors/domain-errors";
import {
    createSafeActionClient,
    DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

export const actionClient = createSafeActionClient({
  handleServerError: async (error) => {
    console.error("Action Error:", error);

    if (error instanceof DomainError) {
      if (error instanceof BusinessRuleError) {
        return error.message;
      }
      return error.code;
    }
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

export const authActionClient = actionClient.use(async ({ next }) => {
  const session = await auth();
  if (!session?.user) {
    throw new AuthenticationError();
  }

  return next({ ctx: { user: session.user } });
});
