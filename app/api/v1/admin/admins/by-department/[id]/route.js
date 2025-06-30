import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Department ID required' }, { status: 400 });
    }
    const admins = await Admin.find({ department: id, deleted_at: null }).select('email');
    return NextResponse.json({ success: true, data: admins });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching admins' }, { status: 500 });
  }
}
