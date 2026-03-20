import { S3Client } from "@aws-sdk/client-s3";

const endpoint = process.env.STORAGE_ENDPOINT;

export const s3Client = new S3Client({
  region: process.env.STORAGE_REGION || "us-east-1",

  ...(endpoint && { endpoint }),

  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY!,
    secretAccessKey: process.env.STORAGE_SECRET_KEY!,
  },
  forcePathStyle: true,
});
