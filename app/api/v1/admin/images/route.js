import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Image from '@/app/models/Image';
import { uploadBlogImage } from '@/app/middleware/imageUpload';
import { verifyToken, extractToken } from '@/app/lib/auth';
import slugify from 'slugify';

// GET all images
export async function GET() {
  try {
    await connectDB();
    const images = await Image.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, message: 'Images fetched successfully', data: images });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching images' }, { status: 500 });
  }
}

// POST add image
export async function POST(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    await connectDB();
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }
    // Slugify original name (keep extension)
    const ext = file.name.split('.').pop();
    const base = file.name.replace(/\.[^/.]+$/, '');
    const storedName = slugify(base, { lower: true, strict: true }) + (ext ? `.${ext}` : '');

    // Check for duplicate before saving file
    const exists = await Image.findOne({ storedName });
    if (exists) {
      return NextResponse.json({ success: false, error: 'Image already exists' }, { status: 409 });
    }

    // Use uploadBlogImage but save in /uploads/images
    const uploadRes = await uploadBlogImage(file, 'images', ext, storedName);
    if (!uploadRes.success) {
      return NextResponse.json({ success: false, error: uploadRes.error }, { status: 400 });
    }
    const uploadedBy = decoded._id || decoded.id;
    const image = await Image.create({
      storedName,
      uploadedBy,
    });
    return NextResponse.json({ success: true, message: 'Image uploaded successfully', data: image }, { status: 201 });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'Image already exists' }, { status: 409 });
    }
    return NextResponse.json({ success: false, error: 'Error uploading image' }, { status: 500 });
  }
}
