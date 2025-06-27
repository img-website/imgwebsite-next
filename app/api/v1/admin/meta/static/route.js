import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import StaticMeta from '@/app/models/StaticMeta';
import {
  readStaticMetaWithNotice,
  syncStaticMetaFromDB,
} from '@/app/lib/staticMetaFile';
import { staticMetaSchema } from '@/app/lib/validations/staticMeta';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET() {
  try {
    const { meta, wasCreated } = await readStaticMetaWithNotice();
    if (!meta || Object.keys(meta).length === 0) {
      return NextResponse.json({ success: false, error: 'Static meta not found' }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      data: meta,
      ...(wasCreated && {
        notice: 'Static meta JSON file was missing and has been recreated.',
      }),
    });
  } catch (error) {
    console.error('Error fetching static meta:', error);
    return NextResponse.json({ success: false, error: 'Error fetching static meta' }, { status: 500 });
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

    const body = await request.json();
    const parsed = staticMetaSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.errors[0].message }, { status: 400 });
    }

    const data = parsed.data;
    const strip = (val) => (typeof val === 'string' ? val.split('/').pop() : val);
    data.appleWebApp.startupImage.mainImageUrl = strip(data.appleWebApp.startupImage.mainImageUrl);
    data.appleWebApp.startupImage.url = strip(data.appleWebApp.startupImage.url);
    data.icons.icon = data.icons.icon.map((i) => ({ ...i, url: strip(i.url) }));
    data.icons.shortcut = strip(data.icons.shortcut);
    data.icons.apple = strip(data.icons.apple);
    data.icons.other = data.icons.other.map((i) => ({ ...i, url: strip(i.url) }));
    data.twitter.images = data.twitter.images.map(strip);
    data.openGraph.images = data.openGraph.images.map((img) => ({ ...img, url: strip(img.url) }));

    await connectDB();
    let meta = await StaticMeta.findOne();
    if (!meta) {
      meta = await StaticMeta.create(data);
    } else {
      Object.assign(meta, data);
      await meta.save();
    }
    const { wasCreated } = await syncStaticMetaFromDB();
    return NextResponse.json({
      success: true,
      data: meta,
      ...(wasCreated && {
        notice: 'Static meta JSON file was missing and has been recreated.',
      }),
    });
  } catch (error) {
    console.error('Error updating static meta:', error);
    return NextResponse.json({ success: false, error: 'Error updating static meta' }, { status: 500 });
  }
}
