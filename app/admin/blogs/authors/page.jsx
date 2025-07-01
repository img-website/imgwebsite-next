import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";
import AuthorsPageClient from "./AuthorsPageClient";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'authors', 'write');
  const canEdit = hasServerPermission(store, 'authors', 'edit');
  return <AuthorsPageClient canAdd={canAdd} canEdit={canEdit} />;
}
