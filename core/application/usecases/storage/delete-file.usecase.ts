import { IStorageRepo } from "@/core/domain/repos/storage.repo";

export class DeleteFileUseCase {
  private storageRepo;

  constructor(storageRepo: IStorageRepo) {
    this.storageRepo = storageRepo;
  }

  async execute(fileKey: string): Promise<void> {
    await this.storageRepo.deleteFile(fileKey);
  }
}
