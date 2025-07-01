import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hasServerPermission } from "@/helpers/permissions";
import AdminsPageClient from "./AdminsPageClient";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }
  const canAdd = hasServerPermission(store, 'admins', 'write');
  const token = store.get("token")?.value || '';

  return <AdminsPageClient token={token} canAdd={canAdd} />;
}
