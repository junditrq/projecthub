import { IStorageService } from '../../services/storage.service';

export class GetUploadURLUseCase {
  constructor(private readonly _storageService: IStorageService) {}

  async execute(fileKey: string, fileType: string, expiresIn?: number): Promise<string> {
    return await this._storageService.getUploadURL(fileKey, fileType, expiresIn);
  }
}
