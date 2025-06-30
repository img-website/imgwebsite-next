import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Page({ params }) {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const token = store.get("token")?.value || "";
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/v1/admin/admins/${params.id}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const admin = json?.data;
  if (!admin) return <div className="p-4">Admin not found</div>;
  return (
    <div className="p-4 space-y-2">
      <h1 className="text-xl font-semibold">{admin.email}</h1>
      <p>Department: {admin.department || "N/A"}</p>
      <p>Role: {admin.role}</p>
      <p>Created: {new Date(admin.createdAt).toLocaleDateString("en-US", { timeZone: "UTC" })}</p>
      <Link href={`/admin/admins/${admin.id}/edit`} className="text-blue-600 underline">
        Edit
      </Link>
    </div>
  );
}
