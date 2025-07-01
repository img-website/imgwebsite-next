import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hasServerPermission } from "@/helpers/permissions";
import RedirectionsPageClient from "./RedirectionsPageClient";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const canAdd = hasServerPermission(store, 'redirections', 'write');
  const canEdit = hasServerPermission(store, 'redirections', 'edit');
  const canDelete = hasServerPermission(store, 'redirections', 'delete');

  const token = store.get("token")?.value || '';

  return (
    <RedirectionsPageClient
      token={token}
      canAdd={canAdd}
      canEdit={canEdit}
      canDelete={canDelete}
    />
  );
}
