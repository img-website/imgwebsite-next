"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { DepartmentTable } from '@/components/departmentTable';

export default function DepartmentsPageClient({ token, canAdd }) {
  const { data, loading } = useCachedApi('departments', async () => {
    const res = await fetch('/api/v1/admin/departments', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    const depts = Array.isArray(json?.data) ? json.data : [];
    return depts.map(d => ({ id: d._id, name: d.name }));
  });

  if (loading || !data) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <DepartmentTable data={data} canAdd={canAdd} />
    </div>
  );
}
