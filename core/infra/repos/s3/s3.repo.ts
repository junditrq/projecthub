import { IStorageRepo } from "@/core/domain/repos/storage.repo";
import { s3Client } from "@/core/infra/config/s3.client";
import {
    DeleteObjectCommand,
    DeleteObjectsCommand,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class S3StorageRepo implements IStorageRepo {
  private bucketName = process.env.STORAGE_BUCKET_NAME;
  private s3Client: S3Client;

  constructor() {
    this.s3Client = s3Client;
  }

  async getUploadURL(
    fileKey: string,
    fileType: string,
    expiresIn?: number,
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
      ContentType: fileType,
    });

    return await getSignedUrl(this.s3Client, command, { expiresIn });
  }

  async deleteFile(fileKey: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    await this.s3Client.send(command);
  }

  async deleteFiles(fileKeys: string[]): Promise<void> {
    const command = new DeleteObjectsCommand({
      Bucket: this.bucketName,
      Delete: {
        Objects: fileKeys.map((key) => ({ Key: key })),
      },
    });

    await this.s3Client.send(command);
  }
}
