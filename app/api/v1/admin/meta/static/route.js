import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import StaticMeta from '@/app/models/StaticMeta';
import { staticMetaSchema } from '@/app/lib/validations/staticMeta';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const meta = await StaticMeta.findOne().lean();
    if (!meta) {
      return NextResponse.json({ success: false, error: 'Static meta not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: meta });
  } catch (error) {
    console.error('Error fetching static meta:', error);
    return NextResponse.json({ success: false, error: 'Error fetching static meta' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    const body = await request.json();
    const parsed = staticMetaSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.errors[0].message }, { status: 400 });
    }

    await connectDB();
    let meta = await StaticMeta.findOne();
    if (!meta) {
      meta = await StaticMeta.create(parsed.data);
    } else {
      Object.assign(meta, parsed.data);
      await meta.save();
    }
    return NextResponse.json({ success: true, data: meta });
  } catch (error) {
    console.error('Error updating static meta:', error);
    return NextResponse.json({ success: false, error: 'Error updating static meta' }, { status: 500 });
  }
}
