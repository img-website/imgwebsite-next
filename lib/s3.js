import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  } : undefined,
});

export async function uploadBuffer(buffer, key, contentType) {
  const Bucket = process.env.AWS_S3_BUCKET;
  if (!Bucket) throw new Error('AWS_S3_BUCKET not configured');
  const command = new PutObjectCommand({ Bucket, Key: key, Body: buffer, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' });
  await s3.send(command);
}

export async function deleteObject(key) {
  const Bucket = process.env.AWS_S3_BUCKET;
  if (!Bucket) throw new Error('AWS_S3_BUCKET not configured');
  const command = new DeleteObjectCommand({ Bucket, Key: key });
  await s3.send(command);
}

export function getPublicUrl(key) {
  const base = process.env.NEXT_PUBLIC_CLOUDFRONT_URL || '';
  return `${base}/${key}`;
}

export async function getObjectBuffer(key) {
  const Bucket = process.env.AWS_S3_BUCKET;
  if (!Bucket) throw new Error('AWS_S3_BUCKET not configured');
  const command = new GetObjectCommand({ Bucket, Key: key });
  const { Body, ContentType } = await s3.send(command);
  if (!Body) return null;
  const chunks = [];
  for await (const chunk of Body) {
    chunks.push(chunk);
  }
  return { buffer: Buffer.concat(chunks), contentType: ContentType };
}
