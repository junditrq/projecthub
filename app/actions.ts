"use server";

import { GetCategoriesUseCase } from "@/core/application/usecases/categories/get-categories.usecase";
import { GetTagsUseCase } from "@/core/application/usecases/tags/get-tags.usecase";
import { MarkUserAsPromptedUseCase } from "@/core/application/usecases/user/mark-user-as-prompted.usecase";
import { PrismaCategoryRepo } from "@/core/infra/repos/prisma/category.repo";
import { PrismaTagRepo } from "@/core/infra/repos/prisma/tag.repo";
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

export const getTagsAction = actionClient.action(async () => {
  const tagRepo = new PrismaTagRepo();
  const getTagsUseCase = new GetTagsUseCase(tagRepo);
  return await getTagsUseCase.execute();
});
