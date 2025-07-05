import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import DynamicMeta from '@/app/models/DynamicMeta';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { dynamicMetaSchema } from '@/app/lib/validations/dynamicMeta';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const pageUrl = searchParams.get('pageUrl');
    if (pageUrl) {
      const entry = await DynamicMeta.findOne({ pageUrl }).lean();
      return NextResponse.json({ success: true, data: entry || null });
    }
    const entries = await DynamicMeta.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: entries });
  } catch (error) {
    console.error('Error fetching dynamic meta:', error);
    return NextResponse.json({ success: false, error: 'Error fetching dynamic meta' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    const body = await request.json();
    const parsed = dynamicMetaSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.errors[0].message }, { status: 400 });
    }
    await connectDB();
    const existing = await DynamicMeta.findOne({ pageUrl: parsed.data.pageUrl });
    if (existing) {
      return NextResponse.json({ success: false, error: 'Meta already exists' }, { status: 400 });
    }
    const entry = await DynamicMeta.create(parsed.data);
    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    console.error('Error creating dynamic meta:', error);
    return NextResponse.json({ success: false, error: 'Error creating dynamic meta' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    const body = await request.json();
    const parsed = dynamicMetaSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.errors[0].message }, { status: 400 });
    }
    await connectDB();
    const entry = await DynamicMeta.findOneAndUpdate(
      { pageUrl: parsed.data.pageUrl },
      parsed.data,
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: entry });
  } catch (error) {
    console.error('Error updating dynamic meta:', error);
    return NextResponse.json({ success: false, error: 'Error updating dynamic meta' }, { status: 500 });
  }
}
