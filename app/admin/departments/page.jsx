import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DepartmentTable } from "@/components/departmentTable";
import { hasServerPermission } from "@/helpers/permissions";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const canAdd = hasServerPermission(store, 'departments', 'write');

  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const token = store.get("token")?.value || '';
  const res = await fetch(`${base}/api/v1/admin/departments`, {
    cache: 'no-store',
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const depts = Array.isArray(json?.data) ? json.data : [];
  const data = depts.map(d => ({ id: d._id, name: d.name }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <DepartmentTable data={data} canAdd={canAdd} />
    </div>
  );
}
