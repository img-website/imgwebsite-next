import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import NotificationToken from '@/app/models/NotificationToken';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body?.token) {
      return NextResponse.json(
        { success: false, error: 'Token required' },
        { status: 400 }
      );
    }

    await NotificationToken.updateOne(
      { token: body.token },
      { $set: { token: body.token } },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Token registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Error registering token' },
      { status: 500 }
    );
  }
}
