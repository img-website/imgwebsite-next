import { CategoryTable } from "@/components/categoryTable";
import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'categories', 'write');
  const canEdit = hasServerPermission(store, 'categories', 'edit');
  // Data is loaded on the client via useModuleData hook

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <CategoryTable canAdd={canAdd} canEdit={canEdit} />
      </div>
    </>
  );
}
