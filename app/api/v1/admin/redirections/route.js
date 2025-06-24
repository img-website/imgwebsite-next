import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Redirection from '@/app/models/Redirection';
import { redirectionSchema } from '@/app/lib/validations/redirection';
import { clearRedirectionsCache } from '@/app/lib/redirections';

// GET: Get all redirections
export async function GET() {
  try {
    await connectDB();
    const redirections = await Redirection.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, message: 'Redirections fetched successfully', data: redirections });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching redirections' }, { status: 500 });
  }
}

// POST: Add a new redirection
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const parsed = redirectionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.errors[0].message }, { status: 400 });
    }
    // Remove domain from URLs if present
    function stripDomain(url) {
      try {
        const u = new URL(url, 'http://dummy');
        return u.pathname + u.search + u.hash;
      } catch {
        return url;
      }
    }
    parsed.data.from = stripDomain(parsed.data.from);
    parsed.data.to = stripDomain(parsed.data.to);
    const exists = await Redirection.findOne({ from: parsed.data.from });
    if (exists) {
      return NextResponse.json({ success: false, error: 'Redirection from this URL already exists' }, { status: 400 });
    }
    const redirection = await Redirection.create(parsed.data);
    clearRedirectionsCache();
    return NextResponse.json({ success: true, message: 'Redirection created successfully', data: redirection }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error creating redirection' }, { status: 500 });
  }
}
