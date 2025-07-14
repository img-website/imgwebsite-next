"use client";
import EditAdminForm from "./EditAdminForm";
import { useAdmin } from "@/hooks/use-admins";
import { use as usePromise } from "react";
import AdminEditSkeleton from "@/components/skeleton/admin-edit-skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Update Profile</CardTitle>
          <CardDescription className="max-sm:text-xs">
            Update the admin profile details below. Ensure all fields are filled out correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <EditAdminForm admin={admin} />
        </CardContent>
      </Card>
    </div>
  );
}
