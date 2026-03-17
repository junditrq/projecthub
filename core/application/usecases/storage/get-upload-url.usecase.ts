import { IStorageRepo } from "@/core/domain/repos/storage.repo";

export class GetUploadURLUseCase {
  private storageRepo;

  constructor(storageRepo: IStorageRepo) {
    this.storageRepo = storageRepo;
  }

  async execute(fileKey: string, expiresIn?: number): Promise<string> {
    return await this.storageRepo.getUploadURL(fileKey, expiresIn);
  }
}
