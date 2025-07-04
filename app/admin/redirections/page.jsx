"use client";
import { RedirectionTable } from "@/components/redirectionTable";
import { useRedirections } from "@/hooks/use-redirections";
import RedirectionTableSkeleton from "@/components/skeleton/redirection-table-skeleton";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { redirections } = useRedirections();
  const canAdd = usePermission("redirections", "write");
  const canEdit = usePermission("redirections", "edit");
  const canDelete = usePermission("redirections", "delete");
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
