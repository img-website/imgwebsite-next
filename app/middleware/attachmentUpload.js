import { fileTypeFromBuffer } from 'file-type';
import { uploadBuffer } from '@/lib/s3';

const PREFIX = 'uploads/leads';

const ALLOWED_TYPES = {
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/zip': 'zip',
  'application/x-zip-compressed': 'zip',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif'
};

export async function uploadLeadAttachment(file) {
  try {
    if (!file || typeof file !== 'object' || typeof file.arrayBuffer !== 'function') {
      return { success: false, error: 'Please provide a valid file' };
    }

    const buffer = await file.arrayBuffer();
    const type = await fileTypeFromBuffer(Buffer.from(buffer));
    if (!type || !ALLOWED_TYPES[type.mime]) {
      return { success: false, error: 'Invalid file type. Only PDF, Word, Excel, Zip, or image files allowed' };
    }

    const ext = ALLOWED_TYPES[type.mime];
    const filename = `lead-${Date.now()}.${ext}`;
    const key = `${PREFIX}/${filename}`;
    await uploadBuffer(Buffer.from(buffer), key, type.mime);

    return { success: true, filename };
  } catch (error) {
    console.error('Error uploading attachment:', error);
    return { success: false, error: 'Error uploading attachment' };
  }
}
