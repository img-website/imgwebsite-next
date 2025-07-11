"use client"

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { IconDashboard } from "@tabler/icons-react";

export function NavMain({
  items
}) {
  const pathname = usePathname();

  const activeItemTitle = React.useMemo(() => {
    let matchTitle = null;
    let matchLength = -1;
    items.forEach((item) => {
      item.items?.forEach((subItem) => {
        if (
          pathname === subItem.url ||
          pathname.startsWith(subItem.url + "/")
        ) {
          if (subItem.url.length > matchLength) {
            matchLength = subItem.url.length;
            matchTitle = item.title;
          }
        }
      });
    });
    return matchTitle;
  }, [items, pathname]);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={'/admin'}>
              <IconDashboard />
              <span>Dashboard</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {items.map((item) => {
          if (item.type === "link") {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          const isCurrent = item.title === activeItemTitle;

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive || isCurrent}
              className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
