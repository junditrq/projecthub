import { IStorageService } from "@/core/application/services/storage.service";

export class DeleteFileUseCase {
  private storageRepo;

  constructor(storageRepo: IStorageService) {
    this.storageRepo = storageRepo;
  }

  async execute(fileKey: string): Promise<void> {
    await this.storageRepo.deleteFile(fileKey);
  }
}
