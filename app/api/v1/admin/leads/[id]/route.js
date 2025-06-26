import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Lead, { LEAD_STATUS } from '@/app/models/Lead';

// GET single lead
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid lead ID' }, { status: 400 });
    }
    const lead = await Lead.findById(id).lean();
    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching lead' }, { status: 500 });
  }
}

// PUT update lead
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid lead ID' }, { status: 400 });
    }
    const body = await request.json();
    const update = {
      contact_name: body.contact_name,
      mobile_number: body.mobile_number,
      email: body.email,
      organization: body.organization,
      requirements: body.requirements,
      description: body.description
    };
    if (body.status && [1,2,3].includes(Number(body.status))) {
      update.status = Number(body.status);
    }
    update.modified_date = new Date();
    const lead = await Lead.findByIdAndUpdate(id, update, { new: true });
    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error updating lead' }, { status: 500 });
  }
}
