import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminTable } from "@/components/adminTable";
import { hasServerPermission } from "@/helpers/permissions";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }
  const canAdd = hasServerPermission(store, 'admins', 'write');

  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const token = store.get("token")?.value || '';
  const res = await fetch(`${base}/api/v1/admin/admins`, {
    cache: 'no-store',
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const admins = Array.isArray(json?.data) ? json.data : [];
  const data = admins
    .filter((a) => a.role !== 'superadmin')
    .map((a) => ({
      id: a.id,
      email: a.email,
      role: a.role,
      department: a.department || '',
      createdAt: a.createdAt,
    }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AdminTable data={data} canAdd={canAdd} />
    </div>
  );
}
