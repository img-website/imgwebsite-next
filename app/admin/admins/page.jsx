"use client";
import { AdminTable } from "@/components/adminTable";
import AdminTableSkeleton from "@/components/skeleton/admin-table-skeleton";
import { useAdmins } from "@/hooks/use-admins";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { admins } = useAdmins();
  const canAdd = usePermission('admins', 'write');

  const data = admins
    ? admins
        .filter((a) => a.role !== 'superadmin')
        .map((a) => ({
          id: a.id,
          email: a.email,
          role: a.role,
          department: a.department || '',
          createdAt: a.createdAt,
        }))
    : [];

  if (!admins) {
    return <AdminTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AdminTable data={data} canAdd={canAdd} />
    </div>
  );
}
