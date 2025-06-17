import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id)
      .populate('author', 'author_name')
      .populate('categories', 'category_name')
      .lean();
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: { ...blog, id: blog._id.toString() } });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const token = extractToken(req.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();
    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    const formData = await req.formData();
    const title = formData.get('title');
    if (title) blog.title = title.trim();
    const excerpt = formData.get('excerpt');
    if (excerpt) blog.excerpt = excerpt.trim();
    const content = formData.get('content');
    if (content) blog.content = content.trim();
    const author = formData.get('author');
    if (author) blog.author = author;
    const cats = formData.get('categories');
    if (cats) blog.categories = cats.split(',').filter(Boolean);
    const status = formData.get('status');
    if (status) blog.status = status;
    const metaTitle = formData.get('meta_title');
    if (metaTitle) blog.meta_title = metaTitle.trim();
    const metaDesc = formData.get('meta_description');
    if (metaDesc) blog.meta_description = metaDesc.trim();
    const imgFile = formData.get('featured_image');
    if (imgFile && typeof imgFile !== 'string') {
      const img = await uploadBlogImage(imgFile);
      if (!img.success) {
        return NextResponse.json({ success: false, error: img.error }, { status: 400 });
      }
      blog.featured_image = img.filename;
    }
    await blog.save();
    return NextResponse.json({ success: true, data: { ...blog.toObject(), id: blog._id.toString() } });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ success: false, error: 'Error updating blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const token = extractToken(req.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();
    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    await blog.deleteOne();
    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ success: false, error: 'Error deleting blog' }, { status: 500 });
  }
}
