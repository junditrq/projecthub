import { IStorageService } from '../../services/storage.service';

export class DeleteFilesUseCase {
  constructor(private readonly _storageService: IStorageService) {}

  async execute(fileKeys: string[]): Promise<void> {
    await this._storageService.deleteFiles(fileKeys);
  }
}
