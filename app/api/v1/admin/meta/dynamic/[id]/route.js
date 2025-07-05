import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import DynamicMeta from '@/app/models/DynamicMeta';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    await connectDB();
    const entry = await DynamicMeta.findById(id).lean();
    if (!entry) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: entry });
  } catch (error) {
    console.error('Error fetching dynamic meta:', error);
    return NextResponse.json({ success: false, error: 'Error fetching dynamic meta' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
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
    await connectDB();
    const entry = await DynamicMeta.findByIdAndUpdate(id, body, { new: true });
    if (!entry) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: entry });
  } catch (error) {
    console.error('Error updating dynamic meta:', error);
    return NextResponse.json({ success: false, error: 'Error updating dynamic meta' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    await connectDB();
    const entry = await DynamicMeta.findByIdAndDelete(id);
    if (!entry) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting dynamic meta:', error);
    return NextResponse.json({ success: false, error: 'Error deleting dynamic meta' }, { status: 500 });
  }
}
