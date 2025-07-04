"use client";

import * as React from "react";

import {
  ChevronsUpDown,
  CircleUser,
  LogOut,
  Settings2,
  Users,
  UserPlus,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useProfile } from "@/hooks/use-profile";
import { NavUserSkeleton } from "@/components/skeleton/nav-user-skeleton";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { profile: admin, loading } = useProfile();
  const profile = React.useMemo(() => {
    if (!admin) return { name: "", email: "", avatar: null, initials: "" };
    const name =
      admin.firstName || admin.lastName
        ? `${admin.firstName || ""} ${admin.lastName || ""}`.trim()
        : admin.username || admin.email;
    const avatar = admin.profileImage
      ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${admin.profileImage}`
      : null;
    const initials =
      `${admin.firstName?.[0] || ""}${admin.lastName?.[0] || ""}`.toUpperCase();
    return { name, email: admin.email, avatar, initials };
  }, [admin]);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/v1/admin/logout");
      document.cookie = "userPermissions=; max-age=0; path=/;";
      toast.success("Logged out");
      router.push("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  if (loading) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <NavUserSkeleton />
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={profile.avatar || undefined}
                  alt={profile.name}
                />
                <AvatarFallback className="rounded-lg">
                  {profile.initials || profile.name?.[0] || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {profile.name || "User"}
                </span>
                <span className="truncate text-xs">{profile.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={profile.avatar || undefined}
                    alt={profile.name}
                  />
                  <AvatarFallback className="rounded-lg">
                    {profile.initials || profile.name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {profile.name || "User"}
                  </span>
                  <span className="truncate text-xs">{profile.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/admin/profile" className="flex items-center gap-2">
                  <CircleUser className="h-4 w-4" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings2 />
                Setting
              </DropdownMenuItem>
              {getCookie("userRole") === "superadmin" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href="/admin/admins"
                      className="flex items-center gap-2"
                    >
                      <Users className="h-4 w-4" /> All Admins
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
