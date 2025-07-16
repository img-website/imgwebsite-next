import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Lead, { LEAD_STATUS } from '@/app/models/Lead';
import { uploadLeadAttachment } from '@/app/middleware/attachmentUpload';
import { sendLeadEmail } from '@/app/lib/mail';

// GET all leads
export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find().sort({ created_date: -1 }).lean();
    return NextResponse.json({ success: true, message: 'Leads fetched successfully', data: leads }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching leads' }, { status: 500 });
  }
}

// POST add new lead
export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();

    const attachmentsFiles = formData.getAll('attachments');
    const attachments = [];
    if (attachmentsFiles && attachmentsFiles.length > 0) {
      for (const file of attachmentsFiles) {
        if (file && typeof file !== 'string') {
          const res = await uploadLeadAttachment(file);
          if (!res.success) {
            return NextResponse.json({ success: false, error: res.error }, { status: 400 });
          }
          attachments.push(res.filename);
        }
      }
    }

    const lead = await Lead.create({
      contact_name: formData.get('contact_name') || null,
      mobile_number: formData.get('mobile_number') || null,
      email: formData.get('email') || null,
      organization: formData.get('organization') || null,
      requirements: formData.get('requirements') || null,
      description: formData.get('description') || null,
      budget: formData.get('budget') || null,
      path: formData.get('path') || null,
      page_url: formData.get('page_url') || null,
      assign_to: formData.get('assign_to') || null,
      assigned_date: formData.get('assigned_date') ? new Date(formData.get('assigned_date')) : null,
      attachments,
      status: formData.get('status') && [1,2].includes(Number(formData.get('status'))) ? Number(formData.get('status')) : LEAD_STATUS.UPCOMING
    });

    await sendLeadEmail(lead);
    return NextResponse.json({ success: true, message: 'Lead created successfully', data: lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error creating lead' }, { status: 500 });
  }
}
