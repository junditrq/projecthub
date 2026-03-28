"use server";

import container from "@/core/infra/di/container";
import { authActionClient } from "@/lib/safe-action";
import z from "zod";

export const getUploadURLAction = authActionClient
  .inputSchema(
    z.object({
      fileKey: z.string(),
      fileType: z.string(),
      expiresIn: z.number().optional(),
    }),
  )
  .action(async ({ parsedInput: { fileKey, fileType, expiresIn } }) => {
    const getUploadURLUseCase = container.get("GetUploadURLUseCase");
    return await getUploadURLUseCase.execute(fileKey, fileType, expiresIn);
  });

export const deleteStorageFileAction = authActionClient
  .inputSchema(
    z.object({
      fileKey: z.string(),
    }),
  )
  .action(async ({ parsedInput: { fileKey } }) => {
    const deleteFileUseCase = container.get("DeleteFileUseCase");
    await deleteFileUseCase.execute(fileKey);
  });

export const deleteStorageFilesAction = authActionClient
  .inputSchema(
    z.object({
      fileKeys: z.string().array(),
    }),
  )
  .action(async ({ parsedInput: { fileKeys } }) => {
    const deleteFilesUseCase = container.get("DeleteFilesUseCase");
    await deleteFilesUseCase.execute(fileKeys);
  });
