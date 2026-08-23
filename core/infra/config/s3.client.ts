import { env } from '@/env';
import { S3Client } from '@aws-sdk/client-s3';

const endpoint = env.STORAGE_ENDPOINT;

export const s3Client = new S3Client({
  region: env.STORAGE_REGION || 'us-east-1',

  ...(endpoint && { endpoint }),

  credentials: {
    accessKeyId: env.STORAGE_ACCESS_KEY,
    secretAccessKey: env.STORAGE_SECRET_KEY,
  },
  forcePathStyle: true,
});
