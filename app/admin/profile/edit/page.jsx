"use client";
import EditAdminForm from "../../admins/[id]/edit/EditAdminForm";
import { useProfile } from "@/hooks/use-profile";
import ProfileEditSkeleton from "@/components/skeleton/profile-edit-skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Update Profile</CardTitle>
          <CardDescription className="max-sm:text-xs">
            Update the admin profile details below. Ensure all fields are filled out correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <EditAdminForm
            admin={profile}
            hideDepartment={profile.role === 'superadmin'}
            redirectTo="/admin/profile"
          />
        </CardContent>
      </Card>
    </div>
  );
}
