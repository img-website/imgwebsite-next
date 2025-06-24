import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Image from '@/app/models/Image';
import { uploadBlogImage } from '@/app/middleware/imageUpload';
import { verifyToken, extractToken } from '@/app/lib/auth';

// GET single image
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const image = await Image.findById(id).lean();
    if (!image) {
      return NextResponse.json({ success: false, error: 'Image not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: image });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching image' }, { status: 500 });
  }
}

// PUT edit image (replace file, keep same name)
export async function PUT(request, { params }) {
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
    const { id } = await params;
    const imageDoc = await Image.findById(id);
    if (!imageDoc) {
      return NextResponse.json({ success: false, error: 'Image not found' }, { status: 404 });
    }
    const formData = await request.formData();
    const file = formData.get('file');
    if (file && typeof file !== 'string') {
      // Use the existing storedName for the new upload
      const uploadRes = await uploadBlogImage(file, 'images', undefined, imageDoc.storedName);
      if (!uploadRes.success) {
        return NextResponse.json({ success: false, error: uploadRes.error }, { status: 400 });
      }
    }
    // No need to update storedName, just update updatedAt
    imageDoc.updatedAt = new Date();
    await imageDoc.save();
    return NextResponse.json({ success: true, data: imageDoc });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error updating image' }, { status: 500 });
  }
}
