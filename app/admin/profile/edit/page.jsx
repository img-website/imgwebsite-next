"use client";
import EditAdminForm from "../../admins/[id]/edit/EditAdminForm";
import { useProfile } from "@/hooks/use-profile";
import ProfileEditSkeleton from "@/components/skeleton/profile-edit-skeleton";

export default function Page() {
  const { profile } = useProfile();

  if (profile === undefined) {
    return <ProfileEditSkeleton />;
  }

  if (profile === null) {
    return <div className="p-4">Admin not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditAdminForm
        admin={profile}
        hideDepartment={profile.role === 'superadmin'}
        redirectTo="/admin/profile"
      />
    </div>
  );
}
