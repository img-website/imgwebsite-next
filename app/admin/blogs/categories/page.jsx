import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";
import CategoriesPageClient from "./CategoriesPageClient";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'categories', 'write');
  const canEdit = hasServerPermission(store, 'categories', 'edit');
  return <CategoriesPageClient canAdd={canAdd} canEdit={canEdit} />;
}
