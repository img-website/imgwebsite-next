import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Faq from '@/app/models/Faq';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const faq = await Faq.findById(params.id).lean();
    if (!faq) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: faq });
  } catch (error) {
    console.error('Error fetching faq:', error);
    return NextResponse.json({ success: false, error: 'Error fetching faq' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
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
    const body = await request.json();
    if (!Array.isArray(body.faqs)) {
      return NextResponse.json({ success: false, error: 'Missing faqs' }, { status: 400 });
    }
    const faq = await Faq.findByIdAndUpdate(
      params.id,
      { faqs: body.faqs },
      { new: true }
    );
    if (!faq) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: faq });
  } catch (error) {
    console.error('Error updating faq:', error);
    return NextResponse.json({ success: false, error: 'Error updating faq' }, { status: 500 });
  }
}

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
    const faq = await Faq.findByIdAndDelete(params.id);
    if (!faq) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting faq:', error);
    return NextResponse.json({ success: false, error: 'Error deleting faq' }, { status: 500 });
  }
}
