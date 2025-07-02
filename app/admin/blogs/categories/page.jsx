import { CategoryTable } from "@/components/categoryTable";
import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";
import { refreshModuleServer } from "@/app/actions/apiStore";

export default async function Page() {
  const store = cookies();
  const canAdd = hasServerPermission(store, 'categories', 'write');
  const canEdit = hasServerPermission(store, 'categories', 'edit');
  await refreshModuleServer('categories', `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/categories`);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <CategoryTable canAdd={canAdd} canEdit={canEdit} />
      </div>
    </>
  );
}
