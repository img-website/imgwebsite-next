import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminTable } from "@/components/adminTable";

export default async function Page() {
  const role = cookies().get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${base}/api/v1/admin/admins`, { cache: 'no-store' });
  const json = await res.json();
  const admins = Array.isArray(json?.data) ? json.data : [];
  const data = admins.map(a => ({
    id: a._id,
    email: a.email,
    role: a.role,
    department: a.department?.name || '',
    createdAt: a.createdAt,
  }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AdminTable data={data} />
    </div>
  );
}
