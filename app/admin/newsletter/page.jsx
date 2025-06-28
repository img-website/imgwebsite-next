import { NewsletterTable } from "@/components/newsletterTable";

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/v1/admin/newsletters`, { cache: 'no-store' });
  const json = await res.json();
  const newsletters = Array.isArray(json?.data) ? json.data : [];
  const data = newsletters.map(n => ({
    id: n._id,
    email: n.email,
    createdAt: n.createdAt,
  }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <NewsletterTable data={data} />
    </div>
  );
}
