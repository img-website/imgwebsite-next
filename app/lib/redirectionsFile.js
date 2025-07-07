import connectDB from '@/app/lib/db';
import Redirection from '@/app/models/Redirection';

export async function readRedirections() {
  const { data } = await syncRedirectionsFromDB();
  return data;
}

export async function readRedirectionsWithNotice() {
  const { data } = await syncRedirectionsFromDB();
  return { redirections: data, wasCreated: false };
}

export async function syncRedirectionsFromDB() {
  await connectDB();
  const docs = await Redirection.find({}).sort({ createdAt: -1 }).lean();
  const data = docs.map(doc => ({
    id: doc._id.toString(),
    from: doc.from,
    to: doc.to,
    methodCode: doc.methodCode,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }));
  return { data, wasCreated: false };
}
