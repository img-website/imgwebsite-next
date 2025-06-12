"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { getCookie, setCookie } from "cookies-next";
import { useTeamStore } from "@/app/store/use-team-store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useHotkeys } from "react-hotkeys-hook";
import { Skeleton } from "@/components/ui/skeleton";

export function TeamSwitcher({ teams, isLoading }) {
  const { isMobile } = useSidebar();
  const activeTeam = useTeamStore((state) => state.activeTeam);
  const setActiveTeam = useTeamStore((state) => state.setActiveTeam);

  // Loading skeleton
  if (isLoading) {
    return isMobile ? (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-between w-full p-2">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
      </DropdownMenu>
    ) : (
      <SidebarMenu>
        <SidebarMenuButton>
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-4 w-4" />
          </div>
        </SidebarMenuButton>
      </SidebarMenu>
    );
  }

  // Set initial active team from cookie or default to first team
  React.useEffect(() => {
    const savedTeam = getCookie('activeTeam');
    if (!activeTeam && teams.length > 0) {
      if (savedTeam) {
        const team = teams.find(t => t.name === savedTeam);
        if (team) {
          setActiveTeam(team);
        } else {
          setActiveTeam(teams[0]);
        }
      } else {
        setActiveTeam(teams[0]);
      }
    }
  }, [teams, activeTeam, setActiveTeam]);

  // Save team selection to cookie
  React.useEffect(() => {
    if (activeTeam) {
      setCookie('activeTeam', activeTeam.name, {
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: '/'
      });
    }
  }, [activeTeam]);

  // Setup hotkeys for team switching
  useHotkeys('shift+1', () => teams[0] && setActiveTeam(teams[0]));
  useHotkeys('shift+2', () => teams[1] && setActiveTeam(teams[1]));
  useHotkeys('shift+3', () => teams[2] && setActiveTeam(teams[2]));
  useHotkeys('shift+4', () => teams[3] && setActiveTeam(teams[3]));

  if (!activeTeam) {
    return null;
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
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Modules
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <team.logo className="size-3.5 shrink-0" />
                </div>
                {team.name}
                <DropdownMenuShortcut>⇧{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
