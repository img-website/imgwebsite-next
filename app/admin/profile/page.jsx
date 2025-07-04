"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/hooks/use-profile";
import ProfileDetailSkeleton from "@/components/skeleton/profile-detail-skeleton";

export default function Page() {
  const { profile } = useProfile();

  if (profile === undefined) {
    return <ProfileDetailSkeleton />;
  }

  if (profile === null) {
    return <div className="p-4">Admin not found</div>;
  }

  const imageSrc = profile.profileImage
    ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${profile.profileImage}?t=${Date.now()}`
    : null;
  const name = profile.firstName || profile.lastName
    ? `${profile.firstName || ""} ${profile.lastName || ""}`.trim()
    : profile.username || profile.email;

  return (
    <div className="w-full p-4 flex flex-col items-center gap-4">
      {imageSrc && (
        <Image src={imageSrc} alt={name} width={120} height={120} className="rounded-full object-cover" />
      )}
      <h2 className="text-xl font-bold">{name || "No Name"}</h2>
      <p className="text-sm text-muted-foreground">{profile.email}</p>
      <Link href="/admin/profile/edit">
        <Button type="button">Edit Profile</Button>
      </Link>
    </div>
  );
}
