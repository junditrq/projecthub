"use server";

import { GetCategoriesUseCase } from "@/core/application/usecases/categories/get-categories.usecase";
import { DeleteFileUseCase } from "@/core/application/usecases/storage/delete-file.usecase";
import { DeleteFilesUseCase } from "@/core/application/usecases/storage/delete-files.usecase";
import { GetUploadURLUseCase } from "@/core/application/usecases/storage/get-upload-url.usecase";
import { GetTagsUseCase } from "@/core/application/usecases/tags/get-tags.usecase";
import { MarkUserAsPromptedUseCase } from "@/core/application/usecases/user/mark-user-as-prompted.usecase";
import { MinioStorageRepo } from "@/core/infra/repos/minio/minio-storage.repo";
import { PrismaCategoryRepo } from "@/core/infra/repos/prisma/category.repo";
import { PrismaTagRepo } from "@/core/infra/repos/prisma/tag.repo";
import { PrismaUserRepo } from "@/core/infra/repos/prisma/user.repo";
import { actionClient, authActionClient } from "@/lib/safe-action";
import z from "zod";

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

export const getUploadURLAction = authActionClient
  .inputSchema(
    z.object({
      fileKey: z.string(),
      expiresIn: z.number().optional(),
    }),
  )
  .action(async ({ parsedInput: { fileKey, expiresIn } }) => {
    const storageRepo = new MinioStorageRepo();
    const getUploadURLUseCase = new GetUploadURLUseCase(storageRepo);

    return await getUploadURLUseCase.execute(fileKey, expiresIn);
  });

export const deleteStorageFileAction = authActionClient
  .inputSchema(
    z.object({
      fileKey: z.string(),
    }),
  )
  .action(async ({ parsedInput: { fileKey } }) => {
    const storageRepo = new MinioStorageRepo();
    const deleteFileUseCase = new DeleteFileUseCase(storageRepo);
    await deleteFileUseCase.execute(fileKey);
  });

export const deleteStorageFilesAction = authActionClient
  .inputSchema(
    z.object({
      fileKeys: z.string().array(),
    }),
  )
  .action(async ({ parsedInput: { fileKeys } }) => {
    const storageRepo = new MinioStorageRepo();
    const deleteFilesUseCase = new DeleteFilesUseCase(storageRepo);
    await deleteFilesUseCase.execute(fileKeys);
  });
