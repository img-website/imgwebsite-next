import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hasServerPermission } from "@/helpers/permissions";
import DepartmentsPageClient from "./DepartmentsPageClient";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const canAdd = hasServerPermission(store, 'departments', 'write');

  const token = store.get("token")?.value || '';

  return <DepartmentsPageClient token={token} canAdd={canAdd} />;
}
