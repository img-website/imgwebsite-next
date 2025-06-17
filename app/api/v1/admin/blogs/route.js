import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    const query = {};
    if (status) query.status = status;
    if (search) query.$text = { $search: search };

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .populate('author', 'author_name')
      .populate('categories', 'category_name')
      .skip(skip)
      .limit(limit)
      .sort({ created_date: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: blogs.map(b => ({ ...b, id: b._id.toString() })),
      pagination: { total, page, limit, pages: Math.ceil(total / limit) }
    });
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
    const imageFile = formData.get('featured_image');
    const img = await uploadBlogImage(imageFile);
    if (!img.success) {
      return NextResponse.json({ success: false, error: img.error }, { status: 400 });
    }

    const blog = await Blog.create({
      title: formData.get('title'),
      excerpt: formData.get('excerpt'),
      content: formData.get('content'),
      author: formData.get('author'),
      categories: formData.get('categories')?.split(',').filter(Boolean) || [],
      featured_image: img.filename,
      status: formData.get('status') || 'draft',
      meta_title: formData.get('meta_title'),
      meta_description: formData.get('meta_description')
    });

    return NextResponse.json({ success: true, data: { ...blog.toObject(), id: blog._id.toString() } }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ success: false, error: 'Error creating blog' }, { status: 500 });
  }
}
