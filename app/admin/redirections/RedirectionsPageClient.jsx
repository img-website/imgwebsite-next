"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { RedirectionTable } from '@/components/redirectionTable';

export default function RedirectionsPageClient({ token, canAdd, canEdit, canDelete }) {
  const { data, loading } = useCachedApi('redirections', async () => {
    const res = await fetch('/api/v1/admin/redirections', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    const redirections = Array.isArray(json?.data) ? json.data : [];
    return redirections.map(r => ({
      id: r.id,
      from: r.from,
      to: r.to,
      methodCode: r.methodCode,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
    }));
  });

  if (loading || !data) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <RedirectionTable data={data} canAdd={canAdd} canEdit={canEdit} canDelete={canDelete} />
    </div>
  );
}
