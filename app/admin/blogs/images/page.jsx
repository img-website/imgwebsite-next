import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";
import ImagesPageClient from "./ImagesPageClient";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'images', 'write');
  const canEdit = hasServerPermission(store, 'images', 'edit');

  return <ImagesPageClient canAdd={canAdd} canEdit={canEdit} />;
}
