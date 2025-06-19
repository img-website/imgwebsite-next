import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogDraft from '@/app/models/BlogDraft';
import Blog from '@/app/models/Blog';
import slugify from 'slugify';
import { verifyToken, extractToken } from '@/app/lib/auth';

async function auth(headers) {
  const token = extractToken(headers);
  if (!token) return { error: NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 }) };
  const decoded = verifyToken(token);
  if (!decoded || decoded.role !== 'admin') {
    return { error: NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 }) };
  }
  return { decoded };
}

export async function POST(req) {
  const a = await auth(req.headers);
  if (a.error) return a.error;
  try {
    await connectDB();
    const data = await req.json();
    if (data.slug) {
      data.slug = slugify(data.slug, { lower: true, strict: true, trim: true });
      const existingBlog = await Blog.findOne({ slug: data.slug });
      const existingDraft = await BlogDraft.findOne({ slug: data.slug });
      if (existingBlog || existingDraft) {
        return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
      }
    } else {
      delete data.slug;
    }
    const draft = await BlogDraft.create(data);
    return NextResponse.json({ success: true, data: draft }, { status: 201 });
  } catch (err) {
    console.error('Error creating draft:', err);
    return NextResponse.json({ success: false, error: 'Error creating draft' }, { status: 500 });
  }
}

export async function PUT(req) {
  const a = await auth(req.headers);
  if (a.error) return a.error;
  try {
    await connectDB();
    const data = await req.json();
    if (!data._id) {
      return NextResponse.json({ success: false, error: 'Draft ID required' }, { status: 400 });
    }
    if (data.slug) {
      data.slug = slugify(data.slug, { lower: true, strict: true, trim: true });
      const existingBlog = await Blog.findOne({ slug: data.slug });
      const existingDraft = await BlogDraft.findOne({ slug: data.slug, _id: { $ne: data._id } });
      if (existingBlog || existingDraft) {
        return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
      }
    } else {
      delete data.slug;
    }
    const draft = await BlogDraft.findByIdAndUpdate(data._id, data, { new: true, upsert: true });
    return NextResponse.json({ success: true, data: draft });
  } catch (err) {
    console.error('Error updating draft:', err);
    return NextResponse.json({ success: false, error: 'Error updating draft' }, { status: 500 });
  }
}

export async function DELETE(req) {
  const a = await auth(req.headers);
  if (a.error) return a.error;
  try {
    await connectDB();
    const { _id } = await req.json();
    if (!_id) {
      return NextResponse.json({ success: false, error: 'Draft ID required' }, { status: 400 });
    }
    await BlogDraft.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error deleting draft:', err);
    return NextResponse.json({ success: false, error: 'Error deleting draft' }, { status: 500 });
  }
}
