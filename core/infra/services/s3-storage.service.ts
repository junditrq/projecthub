import { IStorageService } from "@/core/application/services/storage.service";
import { NotFoundError } from "@/core/domain/errors/domain-errors";
import { s3Client } from "@/core/infra/config/s3.client";
import { env } from "@/env";
import {
    CopyObjectCommand,
    DeleteObjectCommand,
    DeleteObjectsCommand,
    HeadObjectCommand,
    PutObjectCommand,
    S3Client,
    S3ServiceException,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class S3StorageService implements IStorageService {
  private bucketName = env.STORAGE_BUCKET_NAME;
  private s3Client: S3Client;

  constructor() {
    this.s3Client = s3Client;
  }

  private static mapFileKeyError(error: unknown) {
    console.error("S3StorageService error:", error);

    if (error instanceof S3ServiceException) {
      const errorName = error.name;

      if (errorName === "NotFound" || errorName === "NoSuchKey") {
        return new NotFoundError(error.message);
      }
    }

    return error;
  }

  private static async withFileKeyErrorHandling<T>(
    action: () => Promise<T>,
  ): Promise<T> {
    try {
      return await action();
    } catch (error) {
      throw S3StorageService.mapFileKeyError(error);
    }
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
    await S3StorageService.withFileKeyErrorHandling(async () => {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: fileKey,
      });

      await this.s3Client.send(command);
    });
  }

  async deleteFiles(fileKeys: string[]): Promise<void> {
    await S3StorageService.withFileKeyErrorHandling(async () => {
      const command = new DeleteObjectsCommand({
        Bucket: this.bucketName,
        Delete: {
          Objects: fileKeys.map((key) => ({ Key: key })),
        },
      });

      await this.s3Client.send(command);
    });
  }

  async fileExists(fileKey: string): Promise<boolean> {
    const command = new HeadObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    try {
      await this.s3Client.send(command);
      return true;
    } catch (error) {
      if (error instanceof S3ServiceException) {
        if (error.name === "NotFound" || error.name === "NoSuchKey") {
          return false;
        }
      }

      throw S3StorageService.mapFileKeyError(error);
    }
  }

  async copyFile(sourceKey: string, destinationKey: string): Promise<void> {
    await S3StorageService.withFileKeyErrorHandling(async () => {
      const command = new CopyObjectCommand({
        Bucket: this.bucketName,
        CopySource: encodeURI(`${this.bucketName}/${sourceKey}`),
        Key: destinationKey,
      });

      await this.s3Client.send(command);
    });
  }

  async moveFile(sourceKey: string, destinationKey: string): Promise<void> {
    await this.copyFile(sourceKey, destinationKey);
    await this.deleteFile(sourceKey);
  }
}
