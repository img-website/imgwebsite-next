"use client"

import * as React from "react"
import {
  Target,
  BookOpen,
  Bot,
  AArrowUp,
  Rss,
  Split,
  SquareTerminal,
  Settings2,
  ChartBarStacked,
  Images,
  Tags,
  UserRoundPen,
  LineChart,
  Mail,
  BellRing,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { useMainContext } from "@/app/context/main-context"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Mohit Mittal",
    email: "mohit@imgglobalinfotech.com",
    avatar: "https://d1y41eupgbwbb2.cloudfront.net/images/blogauthor/blogauthor-1747657504.webp",
  },
  teams: [
    {
      name: "Blogs",
      logo: Rss,
      description: "Blogs team",
      isActive: true,
    },
    {
      name: "Leads",
      logo: Target,
      description: "Leads team",
      isActive: true,
    },
    {
      name: "Meta & Schema",
      logo: AArrowUp,
      description: "SEO team",
      isActive: true,
    },
    {
      name: "Redirections",
      logo: Split,
      description: "SEO team",
      isActive: true,
    },
  ],
  navMain: [
    {
      title: "Blogs",
      url: "#",
      icon: Rss,
      isActive: true,
      team: "Blogs",
      type: "dropdown",
      items: [
        {
          title: "Add Blog",
          url: "#",
        },
        {
          title: "View Blogs",
          url: "#",
        },
      ],
    },
    {
      title: "Categories",
      url: "#",
      icon: ChartBarStacked,
      team: "Blogs",
      type: "dropdown",
      items: [
        {
          title: "Add Category",
          url: "#",
        },
        {
          title: "View Categories",
          url: "#",
        },
      ],
    },
    {
      title: "Images",
      url: "#",
      icon: Images,
      team: "Blogs",
      items: [
        {
          title: "Add Image",
          url: "#",
        },
        {
          title: "View Images",
          url: "#",
        },
      ],
    },
    {
      title: "Tags",
      url: "#",
      icon: Tags,
      team: "Blogs",
      items: [
        {
          title: "Add Tag",
          url: "#",
        },
        {
          title: "View Tags",
          url: "#",
        },
      ],
    },
    {
      title: "Authors",
      url: "#",
      icon: UserRoundPen,
      team: "Blogs",
      items: [
        {
          title: "Add Author",
          url: "#",
        },
        {
          title: "View Authors",
          url: "#",
        },
      ],
    },
    {
      title: "Comments",
      url: "/admin/comments",
      icon: Mail,
      team: "Blogs",
      type: "link"
    },
    {
      title: "Notifications",
      url: "/admin/notifications",
      icon: BellRing,
      team: "Blogs",
      type: "link"
    },
    {
      title: "Leads",
      url: "#",
      icon: Bot,
      team: "Leads",
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Meta & Schema",
      url: "#",
      icon: BookOpen,
      team: "Meta & Schema",
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Redirections",
      url: "#",
      icon: Settings2,
      team: "Redirections",
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const { activeTeam } = useMainContext();

  // Filter nav items based on active team
  const filteredItems = React.useMemo(() => {
    if (!activeTeam) return [];
    return data.navMain.filter(item => item.team === activeTeam.name);
  }, [activeTeam]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
