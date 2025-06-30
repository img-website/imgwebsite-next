import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DepartmentForm from "@/components/department-form";

export default async function Page({ params }) {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }
  const token = store.get("token")?.value || '';
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/departments/${params.id}`, {
    cache: 'no-store',
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const department = json?.data;
  if (!department) {
    return <div className="p-4">Department not found</div>;
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Department</h2>
      <DepartmentForm department={department} />
    </div>
  );
}

