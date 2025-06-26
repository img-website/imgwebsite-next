"use strict";

import sharp from 'sharp';
import { uploadBuffer } from '@/lib/s3';
import { fileTypeFromBuffer } from 'file-type';

// S3 key prefixes
const UPLOAD_DIRS = {
  authors: 'authors',
  blogs: 'blogs',
  categories: 'categories',
  images: 'images'
};

// Validate image file type
async function validateImageType(buffer) {
  try {
    const fileType = await fileTypeFromBuffer(buffer);
    
    if (!fileType) {
      return {
        success: false,
        error: 'Could not determine file type'
      };
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(fileType.mime)) {
      return {
        success: false,
        error: 'Please upload only image files (JPEG, PNG, WebP, or GIF)'
      };
    }

    return {
      success: true
    };
  } catch (error) {
    console.error('Error validating file type:', error);
    return {
      success: false,
      error: 'Error validating file type'
    };
  }
}

// Upload and process author image
export async function uploadAuthorImage(file) {
  try {
    if (!file || typeof file !== 'object' || typeof file.arrayBuffer !== 'function') {
      return {
        success: false,
        error: 'Please provide a valid image file'
      };
    }

    // Get file buffer
    const buffer = await file.arrayBuffer();

    // Validate file type
    const fileType = await validateImageType(Buffer.from(buffer));
    if (!fileType.success) {
      return fileType;
    }

    // Generate unique filename
    const filename = `author-${Date.now()}.webp`;
    const key = `${UPLOAD_DIRS.authors}/${filename}`;

    // Process image and upload to S3
    const processed = await sharp(Buffer.from(buffer))
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toBuffer();

    await uploadBuffer(processed, key, 'image/webp');

    return {
      success: true,
      filename: filename // Return only filename instead of full path
    };
  } catch (error) {
    console.error('Error uploading author image:', error);
    return {
      success: false,
      error: 'Error processing image'
    };
  }
}

// Upload and process blog image
export async function uploadBlogImage(file, type = 'generic', ext, storedName) {
  try {
    if (!file || typeof file !== 'object' || typeof file.arrayBuffer !== 'function') {
      return {
        success: false,
        error: 'Please provide a valid image file'
      };
    }

    const buffer = await file.arrayBuffer();

    const fileType = await validateImageType(Buffer.from(buffer));
    if (!fileType.success) {
      return fileType;
    }

    let prefix = UPLOAD_DIRS.blogs;
    let filename = storedName || `blog-${type}-${Date.now()}.webp`;
    let key;
    let width = 1080;
    let height = 617;
    if (type === 'xImage' || type === 'ogImage') {
      width = 1200;
      height = 630;
    }
    if (type === 'images') {
      prefix = UPLOAD_DIRS.images;
      filename = storedName || `image-${Date.now()}.${ext || 'webp'}`;
      key = `${prefix}/${filename}`;
      const processed = await sharp(Buffer.from(buffer)).toBuffer();
      await uploadBuffer(processed, key, fileType.mime);
    } else {
      key = `${prefix}/${filename}`;
      const processed = await sharp(Buffer.from(buffer))
        .resize(width, height, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toBuffer();
      await uploadBuffer(processed, key, 'image/webp');
    }

    return {
      success: true,
      filename
    };
  } catch (error) {
    console.error('Error uploading blog image:', error);
    return {
      success: false,
      error: 'Error processing image'
    };
  }
}
