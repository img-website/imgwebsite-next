"use client"

import * as React from "react";

import {
  ChevronsUpDown,
  CircleUser,
  LogOut,
  Settings2,
  Users,
  UserPlus,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function NavUser({
  user
}) {
  const { isMobile } = useSidebar()
  const [profile, setProfile] = React.useState(user)
  React.useEffect(() => {
    async function load() {
      try {
        const token = getCookie('token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const res = await fetch('/api/v1/admin/admins/me', { cache: 'no-store', headers });
        const json = await res.json();
        if (json.success) {
          const d = json.data;
          const name = d.firstName || d.lastName
            ? `${d.firstName || ''} ${d.lastName || ''}`.trim()
            : d.username || d.email;
          const avatar = d.profileImage
            ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${d.profileImage}`
            : null;
          setProfile({ name, email: d.email, avatar });
        }
      } catch {}
    }
    load();
  }, []);

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

  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={profile.avatar || undefined} alt={profile.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{profile.name || 'User'}</span>
                <span className="truncate text-xs">{profile.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={profile.avatar || undefined} alt={profile.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{profile.name || 'User'}</span>
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
              {getCookie('userRole') === 'superadmin' && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/admins" className="flex items-center gap-2">
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
    </SidebarMenu>)
  );
}
