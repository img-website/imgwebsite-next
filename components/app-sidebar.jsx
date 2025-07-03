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
import { getCookie } from "cookies-next"
import { hasClientPermission, getUserPermissions } from "@/helpers/permissions"
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

// This is sample data for navigation only.
const data = {
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
    {
      name: "Role Department",
      logo: Quote,
      description: "RBAC",
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
      title: "Leads",
      url: "#",
      icon: Target,
      team: "Leads & Contacts",
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
      type: "link"
    },
    {
      title: "Newsletter",
      url: "/admin/newsletter",
      icon: BellRing,
      team: "Leads & Contacts",
      type: "link"
    },
    {
      title: "Meta Tags",
      url: "#",
      icon: AArrowUp,
      team: "Meta & Schema",
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
      type: "link"
    },
    {
      title: "Redirections",
      url: "#",
      icon: Split,
      team: "Redirections",
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
    {
      title: "Role Department",
      url: "/admin/departments",
      icon: Quote,
      team: "Role Department",
      type: "link"
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const activeTeam = useTeamStore((state) => state.activeTeam);
  const setActiveTeam = useTeamStore((state) => state.setActiveTeam);
  const role = getCookie('userRole');

  const canSee = (url) => {
    const parts = url.split('/').filter(Boolean);
    if (parts.length < 2) return false;
    let mod = parts[1];
    if (mod === 'blogs' && ['authors','categories','images'].includes(parts[2])) {
      mod = parts[2];
    }
    if (mod === 'schema') mod = 'schemas';
    let action = 'read';
    if (url.includes('/add')) action = 'write';
    else if (url.includes('/edit')) action = 'edit';
    return role === 'superadmin' || hasClientPermission(mod, action);
  };

  const accessibleTeams = data.teams.filter(team => {
    if (team.name === 'Role Department' && role !== 'superadmin') return false;
    const items = data.navMain.filter(item => item.team === team.name);
    return items.some(item => {
      if (item.items) return item.items.some(sub => canSee(sub.url));
      return canSee(item.url);
    });
  });

  React.useEffect(() => {
    if (activeTeam && !accessibleTeams.find(t => t.name === activeTeam.name)) {
      setActiveTeam(accessibleTeams[0] || null);
    }
  }, [accessibleTeams, activeTeam, setActiveTeam]);

  // Filter nav items based on active team
  const filteredItems = React.useMemo(() => {
    if (!activeTeam) return [];
    const role = getCookie('userRole');

    const canSee = (url) => {
      const parts = url.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      let mod = parts[1];
      if (mod === 'blogs' && ['authors','categories','images'].includes(parts[2])) {
        mod = parts[2];
      }
      if (mod === 'schema') mod = 'schemas';
      let action = 'read';
      if (url.includes('/add')) action = 'write';
      else if (url.includes('/edit')) action = 'edit';
      return role === 'superadmin' || hasClientPermission(mod, action);
    };

    return data.navMain
      .filter(item => item.team === activeTeam.name && (item.title !== 'Role Department' || role === 'superadmin'))
      .map(item => {
        if (item.items) {
          const items = item.items.filter(sub => canSee(sub.url));
          if (items.length === 0) return null;
          return { ...item, items };
        }
        return canSee(item.url) ? item : null;
      })
      .filter(Boolean);
  }, [activeTeam]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ErrorBoundary>
          <TeamSwitcher teams={accessibleTeams} />
        </ErrorBoundary>
      </SidebarHeader>
      <SidebarContent>
        <ErrorBoundary>
          <NavMain items={filteredItems} />
        </ErrorBoundary>
      </SidebarContent>
      <SidebarFooter>
        <ErrorBoundary>
          <NavUser />
        </ErrorBoundary>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
