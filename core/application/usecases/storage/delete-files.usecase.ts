import { IStorageRepo } from "@/core/domain/repos/storage.repo";

export class DeleteFilesUseCase {
  private storageRepo;

  constructor(storageRepo: IStorageRepo) {
    this.storageRepo = storageRepo;
  }

  async execute(fileKeys: string[]): Promise<void> {
    await this.storageRepo.deleteFiles(fileKeys);
  }
}
