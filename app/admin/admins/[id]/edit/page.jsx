import EditAdminForm from "./EditAdminForm";

export default async function Page({ params }) {
  const { id } = await params;
  const store = await cookies();
  const token = store.get("token")?.value || "";
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/v1/admin/admins/${id}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const admin = json?.data;
  if (!admin) return <div className="p-4">Admin not found</div>;
  return (
    <div className="w-full p-4">
      <EditAdminForm admin={admin} />
    </div>
  );
}
