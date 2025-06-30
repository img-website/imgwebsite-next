import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function Page({ params }) {
  const store = await cookies();
  const role = store.get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  const token = store.get("token")?.value || "";
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/v1/admin/admins/${params.id}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const admin = json?.data;
  if (!admin) return <div className="p-4">Admin not found</div>;
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
