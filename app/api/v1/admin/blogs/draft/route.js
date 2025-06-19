import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogDraft from '@/app/models/BlogDraft';
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
    const draft = await BlogDraft.findByIdAndUpdate(data._id, data, { new: true, upsert: true });
    return NextResponse.json({ success: true, data: draft });
  } catch (err) {
    console.error('Error updating draft:', err);
    return NextResponse.json({ success: false, error: 'Error updating draft' }, { status: 500 });
  }
}
