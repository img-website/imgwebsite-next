import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { RedirectionTable } from "@/components/redirectionTable";
import { hasServerPermission } from "@/helpers/permissions";
import { useRedirections } from "@/hooks/use-redirections";
import RedirectionTableSkeleton from "@/components/skeleton/redirection-table-skeleton";

export default async function Page() {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const canAdd = hasServerPermission(store, "redirections", "write");
  const canEdit = hasServerPermission(store, "redirections", "edit");
  const canDelete = hasServerPermission(store, "redirections", "delete");

  return <Client canAdd={canAdd} canEdit={canEdit} canDelete={canDelete} />;
}

function Client({ canAdd, canEdit, canDelete }) {
  "use client";
  const { redirections } = useRedirections();
  const data = redirections
    ? redirections.map((r) => ({
        id: r.id,
        from: r.from,
        to: r.to,
        methodCode: r.methodCode,
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
      }))
    : [];

  if (!redirections) {
    return <RedirectionTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <RedirectionTable
        data={data}
        canAdd={canAdd}
        canEdit={canEdit}
        canDelete={canDelete}
      />
    </div>
  );
}
