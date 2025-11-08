"use server";

import { MarkUserAsPromptedUseCase } from "@/core/application/usecases/user/mark-user-as-prompted.usecase";
import { PrismaUserRepo } from "@/core/infra/repos/prisma/user.repo";
import { authActionClient } from "@/lib/safe-action";

export const markUserAsPromptedAction = authActionClient.action(
  async ({ ctx: { user } }) => {
    //     // Dependency injection: create repository and use case
    const userRepo = new PrismaUserRepo();
    const markUserAsPromptedUseCase = new MarkUserAsPromptedUseCase(userRepo);
    return await markUserAsPromptedUseCase.execute(user.id);
  },
);
