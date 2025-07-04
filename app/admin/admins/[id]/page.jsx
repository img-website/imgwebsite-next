"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/hooks/use-admins";
import { use as usePromise } from "react";
import AdminDetailSkeleton from "@/components/skeleton/admin-detail-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { admin } = useAdmin(id);

  if (admin === undefined) {
    return <AdminDetailSkeleton />;
  }

  if (admin === null) {
    return <div className="p-4">Admin not found</div>;
  }

  return (
    <div className="w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Admin Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Email:</strong> {admin.email}
            </p>
            <p>
              <strong>Department:</strong> {admin.department || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> {admin.role}
            </p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(admin.createdAt).toLocaleDateString("en-US", {
                timeZone: "UTC",
              })}
            </p>
          </div>
          <div className="mt-4 flex gap-2 justify-end">
            <Link href={`/admin/admins/${admin.id}/edit`}>
              <Button type="button">Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
