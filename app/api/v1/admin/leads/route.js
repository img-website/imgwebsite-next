import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Lead, { LEAD_STATUS } from '@/app/models/Lead';

// GET all leads
export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find().sort({ created_date: -1 }).lean();
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching leads' }, { status: 500 });
  }
}

// POST add new lead
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const lead = await Lead.create({
      contact_name: body.contact_name || null,
      mobile_number: body.mobile_number || null,
      email: body.email || null,
      organization: body.organization || null,
      requirements: body.requirements || null,
      description: body.description || null,
      status: body.status && [1,2,3].includes(Number(body.status)) ? Number(body.status) : LEAD_STATUS.UPCOMING
    });
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error creating lead' }, { status: 500 });
  }
}
