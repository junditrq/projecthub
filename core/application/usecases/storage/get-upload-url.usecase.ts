import { IStorageService } from "@/core/application/services/storage.service";

export class GetUploadURLUseCase {
  private storageRepo;

  constructor(storageRepo: IStorageService) {
    this.storageRepo = storageRepo;
  }

  async execute(
    fileKey: string,
    fileType: string,
    expiresIn?: number,
  ): Promise<string> {
    return await this.storageRepo.getUploadURL(fileKey, fileType, expiresIn);
  }
}
