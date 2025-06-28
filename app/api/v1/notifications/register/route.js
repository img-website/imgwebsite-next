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
    const doc = await NotificationToken.findOneAndUpdate(
      { token: body.token },
      { token: body.token },
      { upsert: true, new: true }
    );
    return NextResponse.json({ success: true, data: doc }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error registering token' }, { status: 500 });
  }
}
