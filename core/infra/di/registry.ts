import { IStorageService } from "@/core/application/services/storage.service";
import { GetCategoriesUseCase } from "@/core/application/usecases/categories/get-categories.usecase";
import { DeleteFileUseCase } from "@/core/application/usecases/storage/delete-file.usecase";
import { DeleteFilesUseCase } from "@/core/application/usecases/storage/delete-files.usecase";
import { GetUploadURLUseCase } from "@/core/application/usecases/storage/get-upload-url.usecase";
import { GetTagsUseCase } from "@/core/application/usecases/tags/get-tags.usecase";
import { GetUserVerificationStatusUseCase } from "@/core/application/usecases/user/get-student-verificaiton-status.usecase";
import { MarkUserAsPromptedUseCase } from "@/core/application/usecases/user/mark-user-as-prompted.usecase";
import { ICategoryRepo } from "@/core/domain/repos/category.repo";
import { IStudentRepo } from "@/core/domain/repos/student.repo";
import { ITagRepo } from "@/core/domain/repos/tag.repo";
import { IUserRepo } from "@/core/domain/repos/user.repo";
import { IVerificationRequestRepo } from "@/core/domain/repos/verification-request.repo";
import { createContainer, createModule } from "@evyweb/ioctopus";

export type DI_REGISTRY = {
  // repos
  ICategoryRepo: ICategoryRepo;
  ITagRepo: ITagRepo;
  IVerificationRequestRepo: IVerificationRequestRepo;
  IUserRepo: IUserRepo;
  IStorageService: IStorageService;
  IStudentRepo: IStudentRepo;

  // use cases
  GetCategoriesUseCase: GetCategoriesUseCase;

  GetTagsUseCase: GetTagsUseCase;

  MarkUserAsPromptedUseCase: MarkUserAsPromptedUseCase;
  GetUserVerificationStatusUseCase: GetUserVerificationStatusUseCase;

  DeleteFileUseCase: DeleteFileUseCase;
  DeleteFilesUseCase: DeleteFilesUseCase;
  GetUploadURLUseCase: GetUploadURLUseCase;
};

export const createAppModule = () => createModule<DI_REGISTRY>();

export const createAppContainer = () => createContainer<DI_REGISTRY>();
