import { AuthorTable } from "@/components/authorTable";
import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";
import { refreshModuleServer } from "@/app/actions/apiStore";

export default async function Page() {
  const store = cookies();
  const canAdd = hasServerPermission(store, 'authors', 'write');
  const canEdit = hasServerPermission(store, 'authors', 'edit');
  await refreshModuleServer('authors', `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/authors`);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <AuthorTable canAdd={canAdd} canEdit={canEdit} />
      </div>
    </>
  );
}
