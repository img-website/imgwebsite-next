import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Middleware to handle profile image upload with compression and multiple sizes
 * @param {FormData} formData - Form data object
 * @returns {Promise<{success: boolean, error?: string, profileImagePath?: string}>}
 */
export async function uploadProfileImage(formData) {
  try {
    const file = formData.get('profileImage');

    if (!file) {
      return { success: true, profileImagePath: null };
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return {
        success: false,
        error: 'Please upload only image files'
      };
    }

    // Validate file size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      return {
        success: false,
        error: 'Image size should be less than 2MB'
      };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const uniqueSuffix = `${timestamp}-${Math.round(Math.random() * 1E9)}`;
    const extension = file.name.split('.').pop();
    const filename = `profile-${uniqueSuffix}.${extension}`;

    // Create directory if it doesn't exist
    const uploadDir = 'public/uploads/profiles';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save original file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const originalPath = path.join(uploadDir, `original-${filename}`);
    fs.writeFileSync(originalPath, buffer);

    // Generate different sizes
    const sizes = [
      { width: 150, height: 150, suffix: 'thumbnail' },
      { width: 300, height: 300, suffix: 'medium' },
      { width: 600, height: 600, suffix: 'large' }
    ];

    for (const size of sizes) {
      await sharp(buffer)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 80 })
        .toFile(path.join(uploadDir, `${size.suffix}-${filename}`));
    }

    // Delete original file after generating sizes
    fs.unlinkSync(originalPath);

    // Return success with profile image paths
    return {
      success: true,
      profileImagePath: `/uploads/profiles/medium-${filename}`,
      thumbnailPath: `/uploads/profiles/thumbnail-${filename}`,
      largePath: `/uploads/profiles/large-${filename}`
    };

  } catch (error) {
    return {
      success: false,
      error: 'Error uploading profile image'
    };
  }
}

/**
 * Middleware to handle movie image uploads (poster and banner)
 * @param {FormData} formData - Form data object
 * @param {string} type - Type of image (poster or banner)
 * @returns {Promise<{success: boolean, error?: string, imagePath?: string}>}
 */
export async function uploadMovieImage(formData, type) {
  try {
    const file = formData.get(type === 'poster' ? 'posterImage' : 'bannerImage');

    if (!file) {
      return { success: true, imagePath: null };
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return {
        success: false,
        error: 'Please upload only image files'
      };
    }

    // Validate file size (5MB for movie images)
    if (file.size > 5 * 1024 * 1024) {
      return {
        success: false,
        error: 'Image size should be less than 5MB'
      };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const uniqueSuffix = `${timestamp}-${Math.round(Math.random() * 1E9)}`;
    const extension = file.name.split('.').pop();
    const filename = `${type}-${uniqueSuffix}.${extension}`;

    // Create directory if it doesn't exist
    const uploadDir = `public/uploads/movies/${type}s`;
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save original file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const originalPath = path.join(uploadDir, `original-${filename}`);
    fs.writeFileSync(originalPath, buffer);

    // Generate different sizes based on type
    const sizes = type === 'poster' 
      ? [
          { width: 200, height: 300, suffix: 'thumbnail' },
          { width: 400, height: 600, suffix: 'medium' },
          { width: 800, height: 1200, suffix: 'large' }
        ]
      : [
          { width: 800, height: 200, suffix: 'thumbnail' },
          { width: 1600, height: 400, suffix: 'medium' },
          { width: 2400, height: 600, suffix: 'large' }
        ];

    for (const size of sizes) {
      await sharp(buffer)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 80 })
        .toFile(path.join(uploadDir, `${size.suffix}-${filename}`));
    }

    // Delete original file after generating sizes
    fs.unlinkSync(originalPath);

    // Return success with image path
    return {
      success: true,
      imagePath: `/uploads/movies/${type}s/medium-${filename}`
    };

  } catch (error) {
    return {
      success: false,
      error: `Error uploading ${type} image`
    };
  }
}

/**
 * Validate image file type
 * @param {Buffer} buffer - File buffer to validate
 * @returns {Promise<{success: boolean, error?: string}>}
 */
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

/**
 * Upload and process author image
 * @param {File} file - The image file from form data
 * @returns {Promise<{success: boolean, imagePath?: string, error?: string}>}
 */
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

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'authors');
    await fs.mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const filename = `author-${Date.now()}.webp`;
    const filepath = path.join(uploadDir, filename);

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
      imagePath: `/uploads/authors/${filename}`
    };
  } catch (error) {
    console.error('Error uploading author image:', error);
    return {
      success: false,
      error: 'Error processing image'
    };
  }
}