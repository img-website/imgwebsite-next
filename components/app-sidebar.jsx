"use client"

import * as React from "react"
import {
  Target,
  AArrowUp,
  Rss,
  Split,
  ChartBarStacked,
  Images,
  UserRoundPen,
  Mail,
  BellRing,
  MonitorDown,
  UserSearch,
  Braces,
  Quote,
} from "lucide-react"

import dynamic from 'next/dynamic'
import { useTeamStore } from "@/app/store/use-team-store"
import permissionsFromCookie from "@/helpers/permissionsFromCookie"
import { ErrorBoundary } from "@/components/error-boundary"
import { TeamSwitcherSkeleton } from "@/components/skeleton/team-switcher-skeleton"
import { NavMainSkeleton } from "@/components/skeleton/nav-main-skeleton"
import { NavUserSkeleton } from "@/components/skeleton/nav-user-skeleton"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Show loading state immediately by disabling preload and setting loading prop
const NavMain = dynamic(
  () => import("@/components/nav-main").then(mod => mod.NavMain),
  {
    loading: () => <NavMainSkeleton />,
    ssr: false
  }
);

const NavUser = dynamic(
  () => import("@/components/nav-user").then(mod => mod.NavUser),
  {
    loading: () => <NavUserSkeleton />,
    ssr: false
  }
);

const TeamSwitcher = dynamic(
  () => import("@/components/team-switcher").then(mod => mod.TeamSwitcher),
  {
    loading: () => <TeamSwitcherSkeleton />,
    ssr: false
  }
);

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
      name: "Leads & Contacts",
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
      permission: "blogs",
      type: "dropdown",
      items: [
        {
          title: "Add Blog",
          url: "/admin/blogs/add",
        },
        {
          title: "View Blogs",
          url: "/admin/blogs",
        },
      ],
    },
    {
      title: "Categories",
      url: "#",
      icon: ChartBarStacked,
      team: "Blogs",
      permission: "blogs",
      type: "dropdown",
      items: [
        {
          title: "Add Category",
          url: "/admin/blogs/categories/add",
        },
        {
          title: "View Categories",
          url: "/admin/blogs/categories",
        },
      ],
    },
    {
      title: "Images",
      url: "#",
      icon: Images,
      team: "Blogs",
      permission: "blogs",
      items: [
        {
          title: "Add Image",
          url: "/admin/blogs/images/add",
        },
        {
          title: "View Images",
          url: "/admin/blogs/images",
        },
      ],
    },
    {
      title: "Authors",
      url: "#",
      icon: UserRoundPen,
      team: "Blogs",
      permission: "blogs",
      items: [
        {
          title: "Add Author",
          url: "/admin/blogs/authors/add",
        },
        {
          title: "View Authors",
          url: "/admin/blogs/authors",
        },
      ],
    },
    {
      title: "Notifications",
      url: "/admin/blogs/notifications",
      icon: BellRing,
      team: "Blogs",
      permission: "blogs",
      type: "link"
    },
    {
      title: "Leads",
      url: "#",
      icon: Target,
      team: "Leads & Contacts",
      permission: "leads",
      items: [
        {
          title: "Add Lead",
          url: "/admin/leads/add",
        },
        {
          title: "View Leads",
          url: "/admin/leads",
        },
      ],
    },
    {
      title: "Career Leads",
      url: "/admin/leads/career",
      icon: UserSearch,
      team: "Leads & Contacts",
      permission: "leads",
      type: "link"
    },
    {
      title: "Newsletter",
      url: "/admin/newsletter",
      icon: BellRing,
      team: "Leads & Contacts",
      permission: "newsletter",
      type: "link"
    },
    {
      title: "Meta Tags",
      url: "#",
      icon: AArrowUp,
      team: "Meta & Schema",
      permission: "meta",
      items: [
        {
          title: "Static Meta",
          url: "/admin/meta/static",
        },
        {
          title: "Dynamic Meta",
          url: "/admin/meta/dynamic",
        },
      ],
    },
    {
      title: "Schemas",
      url: "/admin/schema",
      icon: Braces,
      team: "Meta & Schema",
      permission: "schema",
      type: "link"
    },
    {
      title: "Redirections",
      url: "#",
      icon: Split,
      team: "Redirections",
      permission: "redirections",
      items: [
        {
          title: "Add Redirection",
          url: "/admin/redirections/add",
        },
        {
          title: "View Redirections",
          url: "/admin/redirections",
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const activeTeam = useTeamStore((state) => state.activeTeam);
  const [perms, setPerms] = React.useState([]);

  React.useEffect(() => {
    setPerms(permissionsFromCookie());
  }, []);

  // Filter nav items based on active team
  const filteredItems = React.useMemo(() => {
    if (!activeTeam) return [];
    return data.navMain.filter(
      item => item.team === activeTeam.name && (!item.permission || perms.includes(item.permission))
    );
  }, [activeTeam, perms]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ErrorBoundary>
          <TeamSwitcher teams={data.teams} />
        </ErrorBoundary>
      </SidebarHeader>
      <SidebarContent>
        <ErrorBoundary>
          <NavMain items={filteredItems} />
        </ErrorBoundary>
      </SidebarContent>
      <SidebarFooter>
        <ErrorBoundary>
          <NavUser user={data.user} />
        </ErrorBoundary>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
