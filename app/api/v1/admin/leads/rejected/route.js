import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Lead, { LEAD_STATUS } from '@/app/models/Lead';

export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find({ status: LEAD_STATUS.REJECTED }).sort({ created_date: -1 }).lean();
    return NextResponse.json({ success: true, message: 'Leads fetched successfully', data: leads }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching leads' }, { status: 500 });
  }
}
