"use client";
import EditAdminForm from "./EditAdminForm";
import { useAdmin } from "@/hooks/use-admins";
import { use as usePromise } from "react";
import AdminEditSkeleton from "@/components/skeleton/admin-edit-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { admin } = useAdmin(id);

  if (admin === undefined) {
    return <AdminEditSkeleton />;
  }

  if (admin === null) {
    return <div className="p-4">Admin not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditAdminForm admin={admin} />
    </div>
  );
}
