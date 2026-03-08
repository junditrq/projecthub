"use server";

import { GetCategoriesUseCase } from "@/core/application/usecases/categories/get-categories.usecase";
import { MarkUserAsPromptedUseCase } from "@/core/application/usecases/user/mark-user-as-prompted.usecase";
import { PrismaCategoryRepo } from "@/core/infra/repos/prisma/category.repo";
import { PrismaUserRepo } from "@/core/infra/repos/prisma/user.repo";
import { actionClient, authActionClient } from "@/lib/safe-action";

export const markUserAsPromptedAction = authActionClient.action(
  async ({ ctx: { user } }) => {
    //     // Dependency injection: create repository and use case
    const userRepo = new PrismaUserRepo();
    const markUserAsPromptedUseCase = new MarkUserAsPromptedUseCase(userRepo);
    return await markUserAsPromptedUseCase.execute(user.id);
  },
);

export const getCategoriesAction = actionClient.action(async () => {
  const categoryRepo = new PrismaCategoryRepo();
  const getCategoriesUseCase = new GetCategoriesUseCase(categoryRepo);
  return await getCategoriesUseCase.execute();
});
