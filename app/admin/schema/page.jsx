import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

async function getSchemaEntries() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/schema`);
  const json = await res.json();
  return Array.isArray(json.data) ? json.data : [];
}

export default async function Page() {
  const entries = await getSchemaEntries();
  return (
    <div className="w-full p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Schema Entries</h2>
        <Link href="/admin/schema/add" className="flex items-center gap-2 text-sm font-medium">
          Add New <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid gap-4">
        {entries.map((e) => (
          <div key={e._id} className="border p-4 rounded-md">
            <div className="font-semibold">{e.type}</div>
            <pre className="whitespace-pre-wrap text-xs mt-2 bg-muted p-2 rounded">
              {JSON.stringify(e.data, null, 2)}
            </pre>
          </div>
        ))}
        {entries.length === 0 && <p>No entries found.</p>}
      </div>
    </div>
  );
}
