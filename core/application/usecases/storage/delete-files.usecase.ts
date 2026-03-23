import { IStorageService } from "@/core/application/services/storage.service";

export class DeleteFilesUseCase {
  private storageRepo;

  constructor(storageRepo: IStorageService) {
    this.storageRepo = storageRepo;
  }

  async execute(fileKeys: string[]): Promise<void> {
    await this.storageRepo.deleteFiles(fileKeys);
  }
}
