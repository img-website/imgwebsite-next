import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';

export async function GET() {
  try {
    await connectDB();
    const draft = await Blog.findOne({ status: 1 }).sort({ modified_date: -1 });
    return NextResponse.json({ success: true, data: draft });
  } catch (error) {
    console.error('Error fetching latest draft:', error);
    return NextResponse.json({ success: false, error: 'Error fetching draft' }, { status: 500 });
  }
}
