"use server";

import container from "@/core/infra/di/container";
import { authActionClient } from "@/lib/safe-action";

export const getVerificationStatusAction = authActionClient.action(
  async ({ ctx: { user } }) => {
    const getUserVerificationStatusUserCase = container.get(
      "GetUserVerificationStatusUseCase",
    );
    return await getUserVerificationStatusUserCase.execute(user.id);
  },
);
