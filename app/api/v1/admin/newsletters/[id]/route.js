import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Newsletter from '@/app/models/Newsletter';
import { extractToken, verifyToken } from '@/app/lib/auth';

export async function DELETE(request, { params }) {
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
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }
    const deleted = await Newsletter.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Newsletter not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Newsletter deleted successfully', data: deleted }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error deleting newsletter' }, { status: 500 });
  }
}
