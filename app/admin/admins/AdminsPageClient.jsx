"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { AdminTable } from '@/components/adminTable';

export default function AdminsPageClient({ token, canAdd }) {
  const { data: admins, loading } = useCachedApi('admins', async () => {
    const res = await fetch('/api/v1/admin/admins', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    return Array.isArray(json?.data) ? json.data : [];
  });

  if (loading || !admins) {
    return <div className="p-4">Loading...</div>;
  }

  const rows = admins
    .filter(a => a.role !== 'superadmin')
    .map(a => ({
      id: a.id,
      email: a.email,
      role: a.role,
      department: a.department || '',
      createdAt: a.createdAt,
    }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AdminTable data={rows} canAdd={canAdd} />
    </div>
  );
}
