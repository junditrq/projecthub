import { IStorageService } from '@/core/application/services/storage.service';
import { GetCategoriesUseCase } from '@/core/application/usecases/categories/get-categories.usecase';
import { DeleteFileUseCase } from '@/core/application/usecases/storage/delete-file.usecase';
import { DeleteFilesUseCase } from '@/core/application/usecases/storage/delete-files.usecase';
import { GetUploadURLUseCase } from '@/core/application/usecases/storage/get-upload-url.usecase';
import { GetTagsUseCase } from '@/core/application/usecases/tags/get-tags.usecase';
import { GetUserVerificationStatusUseCase } from '@/core/application/usecases/verification-requests/get-user-verification-status.usecase';
import { MarkUserAsPromptedUseCase } from '@/core/application/usecases/user/mark-user-as-prompted.usecase';
import { CreateVerificationRequestUseCase } from '@/core/application/usecases/verification-requests/create-verification-request.usecase';
import { ICategoryRepo } from '@/core/domain/repos/category.repo';
import { IStudentRepo } from '@/core/domain/repos/student.repo';
import { ISubjectRepo } from '@/core/domain/repos/subject.repo';
import { ITagRepo } from '@/core/domain/repos/tag.repo';
import { IUserRepo } from '@/core/domain/repos/user.repo';
import { IVerificationRequestRepo } from '@/core/domain/repos/verification-request.repo';
import { createContainer, createModule } from '@evyweb/ioctopus';
import { IFileValidator } from '../seeding/academic/validators/file.validator.interface';
import { IFileRepo } from '../seeding/academic/repos/file.repo.interface';
import { GroupsImporter } from '../seeding/academic/importers/groups/groups.importer';
import { StudentsImporter } from '../seeding/academic/importers/students/students.importer';

export type DI_REGISTRY = {
  // repos
  ICategoryRepo: ICategoryRepo;
  ITagRepo: ITagRepo;
  IVerificationRequestRepo: IVerificationRequestRepo;
  IUserRepo: IUserRepo;
  IStorageService: IStorageService;
  IStudentRepo: IStudentRepo;
  ISubjectRepo: ISubjectRepo;

  // use cases
  GetCategoriesUseCase: GetCategoriesUseCase;

  GetTagsUseCase: GetTagsUseCase;

  MarkUserAsPromptedUseCase: MarkUserAsPromptedUseCase;
  GetUserVerificationStatusUseCase: GetUserVerificationStatusUseCase;

  DeleteFileUseCase: DeleteFileUseCase;
  DeleteFilesUseCase: DeleteFilesUseCase;
  GetUploadURLUseCase: GetUploadURLUseCase;

  CreateVerificationRequestUseCase: CreateVerificationRequestUseCase;

  // academic
  AcademicDataPath: string;
  IFileValidator: IFileValidator;
  IFileRepo: IFileRepo;
  GroupsImporter: GroupsImporter;
  StudentsImporter: StudentsImporter;
};

export const createAppModule = () => createModule<DI_REGISTRY>();

export const createAppContainer = () => createContainer<DI_REGISTRY>();
