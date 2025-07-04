"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProfileSkeleton from "@/components/skeleton/profile-skeleton";
import { useProfile } from "@/hooks/use-profile";

export default function Page() {
  const { profile: admin, loading } = useProfile();

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (admin === null) {
    return <div className="p-4">Admin not found</div>;
  }

  const imageSrc = admin.profileImage
    ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${admin.profileImage}?t=${Date.now()}`
    : null;
  const name =
    admin.firstName || admin.lastName
      ? `${admin.firstName || ""} ${admin.lastName || ""}`.trim()
      : admin.username || admin.email;
  return (
    <div className="w-full p-4 flex flex-col items-center gap-4">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      )}
      <h2 className="text-xl font-bold">{name || "No Name"}</h2>
      <p className="text-sm text-muted-foreground">{admin.email}</p>
      <Link href="/admin/profile/edit">
        <Button type="button">Edit Profile</Button>
      </Link>
    </div>
  );
}
