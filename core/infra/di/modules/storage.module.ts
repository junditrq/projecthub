import { DeleteFileUseCase } from '@/core/application/usecases/storage/delete-file.usecase';
import { DeleteFilesUseCase } from '@/core/application/usecases/storage/delete-files.usecase';
import { GetUploadURLUseCase } from '@/core/application/usecases/storage/get-upload-url.usecase';
import { S3StorageService } from '../../services/s3-storage.service';
import { createAppModule } from '../registry';

export const createStorageModule = () => {
  const storageModule = createAppModule();

  storageModule.bind('IStorageService').toClass(S3StorageService);

  storageModule.bind('GetUploadURLUseCase').toClass(GetUploadURLUseCase, ['IStorageService']);
  storageModule.bind('DeleteFileUseCase').toClass(DeleteFileUseCase, ['IStorageService']);
  storageModule.bind('DeleteFilesUseCase').toClass(DeleteFilesUseCase, ['IStorageService']);

  return storageModule;
};
