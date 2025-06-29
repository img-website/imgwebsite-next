import { NextResponse } from 'next/server';
import { sendPushNotification } from '@/app/lib/push';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function POST(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    const body = await request.json();
    if (!body?.title || !body?.body) {
      return NextResponse.json({ success: false, error: 'Title and body required' }, { status: 400 });
    }
    const res = await sendPushNotification({ title: body.title, body: body.body, data: body.data });
    if (res.success) return NextResponse.json({ success: true, data: res.data });
    return NextResponse.json({ success: false, error: res.error }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Notification error' }, { status: 500 });
  }
}
