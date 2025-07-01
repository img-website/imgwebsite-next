import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { RedirectionTable } from "@/components/redirectionTable";
import { hasServerPermission } from "@/helpers/permissions";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const canAdd = hasServerPermission(store, 'redirections', 'write');
  const canEdit = hasServerPermission(store, 'redirections', 'edit');
  const canDelete = hasServerPermission(store, 'redirections', 'delete');

  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const token = store.get("token")?.value || '';
  const res = await fetch(`${base}/api/v1/admin/redirections`, {
    cache: 'no-store',
    headers: { Authorization: `Bearer ${token}` },
  });
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
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <RedirectionTable
        data={data}
        canAdd={canAdd}
        canEdit={canEdit}
        canDelete={canDelete}
      />
    </div>
  );
}
