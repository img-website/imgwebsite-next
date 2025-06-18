import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { extractToken, verifyToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const id = params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    }
    const blog = await Blog.findById(id).lean();
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const token = extractToken(req.headers);
    if (!token) return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });

    await connectDB();
    const id = params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    const blog = await Blog.findById(id);
    if (!blog) return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });

    const formData = await req.formData();
    const fields = ['title', 'content', 'excerpt', 'meta_title', 'meta_description', 'status'];
    fields.forEach(f => {
      const val = formData.get(f);
      if (val !== null) blog[f] = val.trim();
    });
    const author = formData.get('author');
    if (author) blog.author = author;
    const categories = formData.getAll('categories');
    if (categories.length) blog.categories = categories;
    const tags = formData.get('tags');
    if (tags !== null) blog.tags = tags.split(',').map(t => t.trim()).filter(Boolean);
    const imageFile = formData.get('featured_image');
    if (imageFile && typeof imageFile !== 'string') {
      const up = await uploadBlogImage(imageFile);
      if (!up.success) return NextResponse.json({ success: false, error: up.error }, { status: 400 });
      blog.featured_image = up.filename;
    }
    blog.modified_date = new Date();
    await blog.save();
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ success: false, error: 'Error updating blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const token = extractToken(req.headers);
    if (!token) return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });

    await connectDB();
    const id = params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ success: false, error: 'Error deleting blog' }, { status: 500 });
  }
}
