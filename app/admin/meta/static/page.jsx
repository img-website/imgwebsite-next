import EditStaticMetaForm from './EditStaticMetaForm';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/meta/static`, { cache: 'no-store' });
  const json = await res.json();
  const meta = json?.data || {};

  return (
    <div className="w-full p-4">
      <EditStaticMetaForm meta={meta} />
    </div>
  );
}
