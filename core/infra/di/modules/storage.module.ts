import { DeleteFileUseCase } from "@/core/application/usecases/storage/delete-file.usecase";
import { DeleteFilesUseCase } from "@/core/application/usecases/storage/delete-files.usecase";
import { GetUploadURLUseCase } from "@/core/application/usecases/storage/get-upload-url.usecase";
import { S3StorageRepo } from "../../repos/s3/s3.repo";
import { createAppModule } from "../registry";

export const createStorageModule = () => {
  const storageModule = createAppModule();

  storageModule.bind("IStorageRepo").toClass(S3StorageRepo);

  storageModule
    .bind("GetUploadURLUseCase")
    .toClass(GetUploadURLUseCase, ["IStorageRepo"]);
  storageModule
    .bind("DeleteFileUseCase")
    .toClass(DeleteFileUseCase, ["IStorageRepo"]);
  storageModule
    .bind("DeleteFilesUseCase")
    .toClass(DeleteFilesUseCase, ["IStorageRepo"]);

  return storageModule;
};
