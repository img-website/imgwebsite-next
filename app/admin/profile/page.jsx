import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const store = await cookies();
  const token = store.get("token")?.value || "";
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/v1/admin/admins/me`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  const admin = json?.data;
  if (!admin) return <div className="p-4">Admin not found</div>;
  const imageSrc = admin.profileImage
    ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${admin.profileImage}?t=${Date.now()}`
    : null;
  const name = admin.firstName || admin.lastName
    ? `${admin.firstName || ""} ${admin.lastName || ""}`.trim()
    : admin.username || admin.email;
  return (
    <div className="w-full p-4 flex flex-col items-center gap-4">
      {imageSrc && (
        <Image src={imageSrc} alt={name} width={120} height={120} className="rounded-full object-cover" />
      )}
      <h2 className="text-xl font-bold">{name || "No Name"}</h2>
      <p className="text-sm text-muted-foreground">{admin.email}</p>
      <Link href="/admin/profile/edit">
        <Button type="button">Edit Profile</Button>
      </Link>
    </div>
  );
}
