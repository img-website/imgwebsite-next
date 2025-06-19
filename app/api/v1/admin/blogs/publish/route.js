import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import BlogDraft from '@/app/models/BlogDraft';
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
    const { draftId } = await req.json();
    if (!draftId) {
      return NextResponse.json({ success: false, error: 'draftId is required' }, { status: 400 });
    }
    const draft = await BlogDraft.findById(draftId).lean();
    if (!draft) {
      return NextResponse.json({ success: false, error: 'Draft not found' }, { status: 404 });
    }
    if (draft.slug) {
      draft.slug = slugify(draft.slug, { lower: true, strict: true, trim: true });
      const existingBlog = await Blog.findOne({ slug: draft.slug, _id: { $ne: draft.blogId } });
      const existingDraft = await BlogDraft.findOne({ slug: draft.slug, _id: { $ne: draftId } });
      if (existingBlog || existingDraft) {
        return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
      }
    } else {
      delete draft.slug;
    }
    const data = { ...draft };
    delete data._id;
    delete data.created_date;
    delete data.modified_date;
    let blog;
    if (draft.blogId) {
      blog = await Blog.findByIdAndUpdate(draft.blogId, data, { new: true });
    } else {
      blog = await Blog.create(data);
    }
    await BlogDraft.findByIdAndDelete(draftId);
    return NextResponse.json({ success: true, data: blog });
  } catch (err) {
    console.error('Error publishing blog:', err);
    return NextResponse.json({ success: false, error: 'Error publishing blog' }, { status: 500 });
  }
}
