import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { uploadBuffer, getPublicUrl, deleteObject } from '@/lib/s3';

const PREFIX = 'test';

async function processImage(file, type) {
  const timestamp = Date.now();
  const filename = `${type}-${timestamp}.webp`;
  const key = `${PREFIX}/${filename}`;
  const processed = await sharp(await file.arrayBuffer())
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  await uploadBuffer(processed, key, 'image/webp');
  return getPublicUrl(key);
}

export async function GET() {
  return NextResponse.json({ success: true, data: { total: 0, images: [] } });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const results = { singleImage: null, multipleImages: [] };

    const singleImage = formData.get('singleImage');
    if (singleImage) {
      results.singleImage = await processImage(singleImage, 'single');
    }

    const multipleImages = formData.getAll('multipleImages');
    if (multipleImages && multipleImages.length > 0) {
      for (let i = 0; i < multipleImages.length; i++) {
        const url = await processImage(multipleImages[i], `multiple-${i}`);
        results.multipleImages.push(url);
      }
    }

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const imageName = searchParams.get('name');
    if (!imageName) {
      return NextResponse.json({ success: false, error: 'Image name is required' }, { status: 400 });
    }
    const key = `${PREFIX}/${imageName}`;
    await deleteObject(key);
    return NextResponse.json({ success: true, message: 'Image deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
