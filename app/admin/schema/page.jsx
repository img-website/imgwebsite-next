import { SchemaPageTable } from '@/components/schemaPageTable';

async function getPages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/pages`, { cache: 'no-store' });
  const json = await res.json();
  return Array.isArray(json.data) ? json.data : [];
}

export default async function Page() {
  const pages = await getPages();
  const data = pages.map(url => ({ url }));
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <SchemaPageTable data={data} />
    </div>
  );
}
