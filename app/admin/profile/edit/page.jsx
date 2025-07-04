"use client";
import EditAdminForm from "../../admins/[id]/edit/EditAdminForm";
import { useProfile } from "@/hooks/use-profile";
import ProfileEditSkeleton from "@/components/skeleton/profile-edit-skeleton";

export default function Page() {
  const { profile: admin, loading } = useProfile();

  if (loading) {
    return <ProfileEditSkeleton />;
  }

  if (admin === null) {
    return <div className="p-4">Admin not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditAdminForm
        admin={admin}
        hideDepartment={admin.role === "superadmin"}
        redirectTo="/admin/profile"
      />
    </div>
  );
}
