import connectDB from '@/app/lib/db';
import StaticMeta from '@/app/models/StaticMeta';

export async function readStaticMeta() {
  const { meta } = await syncStaticMetaFromDB();
  return meta;
}

export async function readStaticMetaWithNotice() {
  const { meta } = await syncStaticMetaFromDB();
  return { meta, wasCreated: false };
}

export async function syncStaticMetaFromDB() {
  await connectDB();
  const doc = await StaticMeta.findOne().lean();
  if (doc) {
    const meta = {
      ...doc,
      _id: doc._id.toString(),
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    };
    return { meta, wasCreated: false };
  }
  return { meta: null, wasCreated: false };
}
