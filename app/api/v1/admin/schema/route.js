import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import SchemaEntry from '@/app/models/SchemaEntry';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request) {
  try {
    await connectDB();
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
    if (!body.type || !body.data || !body.pageUrl) {
      return NextResponse.json({ success: false, error: 'Missing type, data or pageUrl' }, { status: 400 });
    }
    const entry = await SchemaEntry.create({ pageUrl: body.pageUrl, type: body.type, data: body.data });
    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    console.error('Error creating schema entry:', error);
    return NextResponse.json({ success: false, error: 'Error creating schema entry' }, { status: 500 });
  }
}
