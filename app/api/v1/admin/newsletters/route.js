import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Newsletter from '@/app/models/Newsletter';
import { ensurePermission } from '@/lib/rbac';

// GET all newsletter emails
export async function GET(req) {
  const admin = await ensurePermission(req, 'newsletter', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  try {
    await connectDB();
    const emails = await Newsletter.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, message: 'Emails fetched successfully', data: emails }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching newsletters' }, { status: 500 });
  }
}

// POST add new email
export async function POST(request) {
  const admin = await ensurePermission(request, 'newsletter', 'write');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  try {
    await connectDB();
    const body = await request.json();
    if (!body?.email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }
    const existing = await Newsletter.findOne({ email: body.email });
    if (existing) {
      return NextResponse.json({ success: false, error: 'Email already subscribed' }, { status: 409 });
    }
    const newsletter = await Newsletter.create({ email: body.email });
    return NextResponse.json({ success: true, message: 'Email subscribed successfully', data: newsletter }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error subscribing to newsletter' }, { status: 500 });
  }
}
