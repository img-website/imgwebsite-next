import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import Fuse from 'fuse.js';
import { extractToken, verifyToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    let blogs = await Blog.find().sort({ created_date: -1 }).lean();
    if (search) {
      const fuse = new Fuse(blogs, { keys: ['title', 'excerpt', 'content'], threshold: 0.3 });
      blogs = fuse.search(search).map(res => res.item);
    }
    const total = blogs.length;
    const data = blogs.slice(skip, skip + limit);

    return NextResponse.json({ success: true, data, pagination: { total, page, limit, pages: Math.ceil(total / limit) } });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blogs' }, { status: 500 });
  }
}

export async function POST(req) {
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
    const formData = await req.formData();
    const title = formData.get('title')?.trim();
    const content = formData.get('content')?.trim();
    const excerpt = formData.get('excerpt')?.trim();
    const author = formData.get('author');
    const categories = formData.getAll('categories');
    const tags = formData.get('tags')?.split(',').map(t => t.trim()).filter(Boolean) || [];
    const meta_title = formData.get('meta_title')?.trim();
    const meta_description = formData.get('meta_description')?.trim();
    const status = formData.get('status') || 'draft';
    const imageFile = formData.get('featured_image');

    if (!title || !content || !excerpt || !author || !imageFile) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const imageRes = await uploadBlogImage(imageFile);
    if (!imageRes.success) {
      return NextResponse.json({ success: false, error: imageRes.error }, { status: 400 });
    }

    const blog = await Blog.create({
      title,
      content,
      excerpt,
      author,
      categories,
      tags,
      featured_image: imageRes.filename,
      meta_title,
      meta_description,
      status,
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ success: false, error: 'Error creating blog' }, { status: 500 });
  }
}
