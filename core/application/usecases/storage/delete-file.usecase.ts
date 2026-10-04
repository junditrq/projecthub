import { IStorageService } from '../../services/storage.service';

export class DeleteFileUseCase {
  constructor(private readonly _storageService: IStorageService) {}

  async execute(fileKey: string): Promise<void> {
    await this._storageService.deleteFile(fileKey);
  }
}
