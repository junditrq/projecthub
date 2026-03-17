import { IStorageRepo } from "@/core/domain/repos/storage.repo";
import { minioClient } from "@/core/infra/config/minio.client";

export class MinioStorageRepo implements IStorageRepo {
  private bucketName = process.env.MINIO_BUCKET_NAME!;
  private minioClient;

  constructor() {
    this.minioClient = minioClient;
  }

  async getUploadURL(fileKey: string, expiresIn?: number): Promise<string> {
    return await this.minioClient.presignedUrl(
      "PUT",
      this.bucketName,
      fileKey,
      expiresIn,
    );
  }
}
