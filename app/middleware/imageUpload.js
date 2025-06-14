"use strict";

import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileTypeFromBuffer } from 'file-type';

// Base upload paths
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
const UPLOAD_DIRS = {
  authors: path.join(UPLOAD_DIR, 'authors'),
  blogs: path.join(UPLOAD_DIR, 'blogs'),
  categories: path.join(UPLOAD_DIR, 'categories')
};

// Initialize upload directories
export async function initializeUploadDirs() {
  try {
    // Create base upload directory
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    
    // Create subdirectories
    await Promise.all(
      Object.values(UPLOAD_DIRS).map(dir => 
        fs.mkdir(dir, { recursive: true })
      )
    );
  } catch (error) {
    console.error('Error creating upload directories:', error);
  }
}

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
    if (!file) {
      return {
        success: false,
        error: 'Please provide an image file'
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
    const filepath = path.join(UPLOAD_DIRS.authors, filename);

    // Process and save image
    await sharp(Buffer.from(buffer))
      .resize(400, 400, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(filepath);

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

// Call initializeUploadDirs when the module loads
initializeUploadDirs();