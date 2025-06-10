import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

// Ensure upload directory exists
const ensureUploadDir = async () => {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'test');
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
  return uploadDir;
};

// Process single image
const processImage = async (file, type) => {
  try {
    const uploadDir = await ensureUploadDir();
    const timestamp = Date.now();
    const filename = `${type}-${timestamp}.webp`;
    const filepath = path.join(uploadDir, filename);

    // Process image with sharp
    await sharp(await file.arrayBuffer())
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(filepath);

    return `/uploads/test/${filename}`;
  } catch (error) {
    throw new Error('Failed to process image');
  }
};

// Get all images from upload directory
const getAllImages = async () => {
  try {
    const uploadDir = await ensureUploadDir();
    const files = await fs.readdir(uploadDir);
    
    // Filter only image files and get their stats
    const images = await Promise.all(
      files
        .filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file))
        .map(async (file) => {
          const filepath = path.join(uploadDir, file);
          const stats = await fs.stat(filepath);
          
          return {
            name: file,
            path: `/uploads/test/${file}`,
            size: stats.size,
            createdAt: stats.birthtime,
            type: path.extname(file).toLowerCase().replace('.', '')
          };
        })
    );

    // Sort by creation date (newest first)
    return images.sort((a, b) => b.createdAt - a.createdAt);
  } catch (error) {
    throw new Error('Failed to read images');
  }
};

export async function GET() {
  try {
    const images = await getAllImages();
    
    return NextResponse.json({
      success: true,
      data: {
        total: images.length,
        images
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const results = {
      singleImage: null,
      multipleImages: []
    };

    // Handle single image upload
    const singleImage = formData.get('singleImage');
    if (singleImage) {
      results.singleImage = await processImage(singleImage, 'single');
    }

    // Handle multiple images upload
    const multipleImages = formData.getAll('multipleImages');
    if (multipleImages && multipleImages.length > 0) {
      for (let i = 0; i < multipleImages.length; i++) {
        const imagePath = await processImage(multipleImages[i], `multiple-${i}`);
        results.multipleImages.push(imagePath);
      }
    }

    return NextResponse.json({
      success: true,
      data: results
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const imageName = searchParams.get('name');

    if (!imageName) {
      return NextResponse.json({
        success: false,
        error: 'Image name is required'
      }, { status: 400 });
    }

    const uploadDir = await ensureUploadDir();
    const filepath = path.join(uploadDir, imageName);

    // Check if file exists
    try {
      await fs.access(filepath);
    } catch {
      return NextResponse.json({
        success: false,
        error: 'Image not found'
      }, { status: 404 });
    }

    // Delete the file
    await fs.unlink(filepath);

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
} 