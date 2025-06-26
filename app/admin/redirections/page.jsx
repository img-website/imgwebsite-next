import { RedirectionTable } from "@/components/redirectionTable";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/redirections`, { cache: 'no-store' });
  const json = await res.json();
  const redirections = Array.isArray(json?.data) ? json.data : [];
  const data = redirections.map(r => ({
    id: r.id,
    from: r.from,
    to: r.to,
    methodCode: r.methodCode,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
  }));

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <RedirectionTable data={data} />
      </div>
    </>
  );
}
