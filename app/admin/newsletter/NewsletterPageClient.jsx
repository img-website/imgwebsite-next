"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { NewsletterTable } from '@/components/newsletterTable';

export default function NewsletterPageClient() {
  const { data, loading } = useCachedApi('newsletters', async () => {
    const res = await fetch('/api/v1/admin/newsletters');
    const json = await res.json();
    const newsletters = Array.isArray(json?.data) ? json.data : [];
    return newsletters.map(n => ({ id: n._id, email: n.email, createdAt: n.createdAt }));
  });

  if (loading || !data) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <NewsletterTable data={data} />
    </div>
  );
}
