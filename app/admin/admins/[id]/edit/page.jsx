import EditAdminForm from "./EditAdminForm";

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/admins/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const admin = json?.data;
  if (!admin) return <div className="p-4">Admin not found</div>;
  return (
    <div className="w-full p-4">
      <EditAdminForm admin={admin} />
    </div>
  );
}
