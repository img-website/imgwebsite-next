import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

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
    console.error('File upload error:', error);
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
    console.error('Movie image upload error:', error);
    return {
      success: false,
      error: `Error uploading ${type} image`
    };
  }
} 