import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import NotificationToken from '@/app/models/NotificationToken';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    if (!body?.token) {
      return NextResponse.json({ success: false, error: 'Token required' }, { status: 400 });
    }
    const existing = await NotificationToken.findOne({ token: body.token });
    if (existing) {
      return NextResponse.json({ success: true, data: existing });
    }
    const token = await NotificationToken.create({ token: body.token, email: body.email, newsletter: body.newsletter });
    return NextResponse.json({ success: true, data: token }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Error registering token' }, { status: 500 });
  }
}
