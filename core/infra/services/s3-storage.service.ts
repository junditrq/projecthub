import {
  IStorageService,
  StorageFileNotFoundError,
} from '@/core/application/services/storage.service';
import { fail, ok, Result } from '@/core/domain/shared/result';
import { s3Client } from '@/core/infra/config/s3.client';
import { env } from '@/env';
import {
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
  S3ServiceException,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export class S3StorageService implements IStorageService {
  private bucketName = env.STORAGE_BUCKET_NAME;

  constructor(private readonly _s3Client: S3Client = s3Client) {}

  private static isFileNotFoundError(error: unknown): boolean {
    return (
      error instanceof S3ServiceException &&
      (error.name === 'NotFound' || error.name === 'NoSuchKey')
    );
  }

  async getUploadURL(fileKey: string, fileType: string, expiresIn?: number): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
      ContentType: fileType,
    });

    return await getSignedUrl(this._s3Client, command, { expiresIn });
  }

  async deleteFile(fileKey: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    await this._s3Client.send(command);
  }

  async deleteFiles(fileKeys: string[]): Promise<void> {
    const command = new DeleteObjectsCommand({
      Bucket: this.bucketName,
      Delete: {
        Objects: fileKeys.map((key) => ({ Key: key })),
      },
    });

    await this._s3Client.send(command);
  }

  async fileExists(fileKey: string): Promise<boolean> {
    const command = new HeadObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    try {
      await this._s3Client.send(command);
      return true;
    } catch (error) {
      if (S3StorageService.isFileNotFoundError(error)) {
        return false;
      }

      throw error;
    }
  }

  async copyFile(
    sourceKey: string,
    destinationKey: string
  ): Promise<Result<void, StorageFileNotFoundError>> {
    const command = new CopyObjectCommand({
      Bucket: this.bucketName,
      CopySource: encodeURI(`${this.bucketName}/${sourceKey}`),
      Key: destinationKey,
    });

    try {
      await this._s3Client.send(command);
      return ok(undefined);
    } catch (error) {
      if (S3StorageService.isFileNotFoundError(error)) {
        return fail(new StorageFileNotFoundError(sourceKey));
      }

      throw error;
    }
  }

  async moveFile(
    sourceKey: string,
    destinationKey: string
  ): Promise<Result<void, StorageFileNotFoundError>> {
    const copiedResult = await this.copyFile(sourceKey, destinationKey);
    if (!copiedResult.ok) {
      return copiedResult;
    }

    await this.deleteFile(sourceKey);
    return ok(undefined);
  }
}
