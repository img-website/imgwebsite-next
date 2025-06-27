import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import SchemaEntry from '@/app/models/SchemaEntry';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const pageUrl = searchParams.get('pageUrl');
    const type = searchParams.get('type');
    const isGlobal = searchParams.get('global') === 'true';
    if (isGlobal) {
      if (!type) {
        const entries = await SchemaEntry.find({ isGlobal: true }).lean();
        return NextResponse.json({ success: true, data: entries });
      }
      const entry = await SchemaEntry.findOne({ type, isGlobal: true }).lean();
      return NextResponse.json({ success: true, data: entry || null });
    }
    if (pageUrl) {
      const query = { pageUrl, isGlobal: false };
      if (type) query.type = type;
      const entry = await SchemaEntry.findOne(query).lean();
      if (!entry) {
        return NextResponse.json({ success: true, data: null });
      }
      return NextResponse.json({ success: true, data: entry });
    }
    const entries = await SchemaEntry.find().sort({ created_date: -1 }).lean();
    return NextResponse.json({ success: true, data: entries });
  } catch (error) {
    console.error('Error fetching schema entries:', error);
    return NextResponse.json({ success: false, error: 'Error fetching schema entries' }, { status: 500 });
  }
}

export async function POST(request) {
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
    const body = await request.json();
    if (!body.type || !body.data) {
      return NextResponse.json({ success: false, error: 'Missing type or data' }, { status: 400 });
    }
    const isGlobal = ['Organization', 'LocalBusiness', 'LocalBusiness2'].includes(body.type);
    const pageUrl = isGlobal ? 'global' : body.pageUrl;
    if (!isGlobal && !pageUrl) {
      return NextResponse.json({ success: false, error: 'Missing pageUrl' }, { status: 400 });
    }
    const entry = await SchemaEntry.create({ pageUrl, type: body.type, data: body.data, isGlobal });
    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    console.error('Error creating schema entry:', error);
    return NextResponse.json({ success: false, error: 'Error creating schema entry' }, { status: 500 });
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
    await connectDB();
    const body = await request.json();
    if (!body.type || !body.data) {
      return NextResponse.json({ success: false, error: 'Missing type or data' }, { status: 400 });
    }
    const isGlobal = ['Organization', 'LocalBusiness', 'LocalBusiness2'].includes(body.type);
    const pageUrl = isGlobal ? 'global' : body.pageUrl;
    if (!isGlobal && !pageUrl) {
      return NextResponse.json({ success: false, error: 'Missing pageUrl' }, { status: 400 });
    }
    const entry = await SchemaEntry.findOneAndUpdate(
      isGlobal ? { type: body.type, isGlobal: true } : { pageUrl },
      { pageUrl, type: body.type, data: body.data, isGlobal },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: entry });
  } catch (error) {
    console.error('Error updating schema entry:', error);
    return NextResponse.json({ success: false, error: 'Error updating schema entry' }, { status: 500 });
  }
}
