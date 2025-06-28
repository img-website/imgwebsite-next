import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Faq from '@/app/models/Faq';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const pageUrl = searchParams.get('pageUrl');
    if (pageUrl) {
      const faq = await Faq.findOne({ pageUrl }).lean();
      return NextResponse.json({ success: true, data: faq });
    }
    const faqs = await Faq.find().lean();
    return NextResponse.json({ success: true, data: faqs });
  } catch (error) {
    console.error('Error fetching faqs:', error);
    return NextResponse.json({ success: false, error: 'Error fetching faqs' }, { status: 500 });
  }
}

export async function POST(request) {
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
    if (!body.pageUrl || !Array.isArray(body.faqs)) {
      return NextResponse.json({ success: false, error: 'Missing pageUrl or faqs' }, { status: 400 });
    }
    const doc = await Faq.create({ pageUrl: body.pageUrl, faqs: body.faqs });
    return NextResponse.json({ success: true, data: doc }, { status: 201 });
  } catch (error) {
    console.error('Error creating faq:', error);
    return NextResponse.json({ success: false, error: 'Error creating faq' }, { status: 500 });
  }
}

export async function PUT(request) {
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
    if (!body.pageUrl || !Array.isArray(body.faqs)) {
      return NextResponse.json({ success: false, error: 'Missing pageUrl or faqs' }, { status: 400 });
    }
    const doc = await Faq.findOneAndUpdate(
      { pageUrl: body.pageUrl },
      { pageUrl: body.pageUrl, faqs: body.faqs },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: doc });
  } catch (error) {
    console.error('Error updating faq:', error);
    return NextResponse.json({ success: false, error: 'Error updating faq' }, { status: 500 });
  }
}
