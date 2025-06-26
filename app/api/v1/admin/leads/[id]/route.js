import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Lead, { LEAD_STATUS } from '@/app/models/Lead';
import { uploadLeadAttachment } from '@/app/middleware/attachmentUpload';

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

    const lead = await Lead.findById(id);
    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    const formData = await request.formData();
    const attachmentsFiles = formData.getAll('attachments');
    if (attachmentsFiles && attachmentsFiles.length > 0) {
      for (const file of attachmentsFiles) {
        if (file && typeof file !== 'string') {
          const res = await uploadLeadAttachment(file);
          if (!res.success) {
            return NextResponse.json({ success: false, error: res.error }, { status: 400 });
          }
          lead.attachments.push(res.filename);
        }
      }
    }

    lead.contact_name = formData.get('contact_name') || lead.contact_name;
    lead.mobile_number = formData.get('mobile_number') || lead.mobile_number;
    lead.email = formData.get('email') || lead.email;
    lead.organization = formData.get('organization') || lead.organization;
    lead.requirements = formData.get('requirements') || lead.requirements;
    lead.description = formData.get('description') || lead.description;
    lead.path = formData.get('path') || lead.path;
    lead.assign_to = formData.get('assign_to') || lead.assign_to;
    lead.assigned_date = formData.get('assigned_date') ? new Date(formData.get('assigned_date')) : lead.assigned_date;

    const statusVal = formData.get('status');
    if (statusVal && [1,2,3].includes(Number(statusVal))) {
      lead.status = Number(statusVal);
    }
    lead.modified_date = new Date();
    await lead.save();

    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error updating lead' }, { status: 500 });
  }
}
