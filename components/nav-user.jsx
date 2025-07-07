"use client"

import * as React from "react";

import {
  ChevronsUpDown,
  CircleUser,
  LogOut,
  Settings2,
  Users,
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
import { toast } from "sonner"
import { useProfile } from "@/hooks/use-profile"
import { NavUserSkeleton } from "@/components/skeleton/nav-user-skeleton"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function NavUser({ avatarOnly = false } = {}) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  const { profile } = useProfile()

  if (profile === undefined) {
    return <NavUserSkeleton avatarOnly={avatarOnly} />
  }

  const name = profile && (profile.firstName || profile.lastName)
    ? `${profile.firstName || ''} ${profile.lastName || ''}`.trim()
    : profile?.username || profile?.email || 'User'
  const avatar = profile?.profileImage
    ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${profile.profileImage}`
    : null
  const initials = `${profile?.firstName?.[0] || ''}${profile?.lastName?.[0] || ''}`.toUpperCase()
  const email = profile?.email || ''

  const handleLogout = async () => {
    try {
      await fetch("/api/v1/admin/logout")
      document.cookie = "userPermissions=; max-age=0; path=/;"
      toast.success("Logged out")
      router.push("/login")
    } catch (error) {
      toast.error("Failed to logout")
    }
  }

  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className={cn(
                "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                avatarOnly && "w-8 justify-center p-0"
              )}>
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={avatar || undefined} alt={name} />
                <AvatarFallback className="rounded-lg">{initials || (name?.[0] || 'U')}</AvatarFallback>
              </Avatar>
              {!avatarOnly && (
                <>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{name || 'User'}</span>
                    <span className="truncate text-xs">{email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </>
              )}
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
                  <AvatarImage src={avatar || undefined} alt={name} />
                  <AvatarFallback className="rounded-lg">{initials || (name?.[0] || 'U')}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{name || 'User'}</span>
                  <span className="truncate text-xs">{email}</span>
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
