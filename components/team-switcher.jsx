"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { useMainContext } from "@/app/context/main-context";

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

export function TeamSwitcher({ teams }) {
  const { isMobile } = useSidebar();
  const { activeTeam, setActiveTeam } = useMainContext();

  // Set initial active team from localStorage or default to first team
  React.useEffect(() => {
    const savedTeam = localStorage.getItem('activeTeam');
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

  // Save team selection to localStorage
  React.useEffect(() => {
    if (activeTeam) {
      localStorage.setItem('activeTeam', activeTeam.name);
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
