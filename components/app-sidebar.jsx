"use client"

import * as React from "react"
import {
  Target,
  AArrowUp,
  Rss,
  Split,
  ChartBarStacked,
  Images,
  Tags,
  UserRoundPen,
  Mail,
  BellRing,
  CaptionsOff,
  MonitorDown,
  CircleCheckBig,
  UserSearch,
  Braces,
  Quote,
} from "lucide-react"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useTeamStore } from "@/app/store/use-team-store"
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
      title: "Tags",
      url: "#",
      icon: Tags,
      team: "Blogs",
      items: [
        {
          title: "Add Tag",
          url: "/admin/blogs/tags/add",
        },
        {
          title: "View Tags",
          url: "/admin/blogs/tags",
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
      title: "Comments",
      url: "/admin/blogs/comments",
      icon: Mail,
      team: "Blogs",
      type: "link"
    },
    {
      title: "Notifications",
      url: "/admin/blogs/notifications",
      icon: BellRing,
      team: "Blogs",
      type: "link"
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
      title: "Rejected Leads",
      url: "/admin/leads/rejected",
      icon: CaptionsOff,
      team: "Leads & Contacts",
      type: "link"
    },
    {
      title: "Upcoming Leads",
      url: "/admin/leads/upcoming",
      icon: MonitorDown,
      team: "Leads & Contacts",
      type: "link"
    },
    {
      title: "Approved Leads",
      url: "/admin/leads/approved",
      icon: CircleCheckBig,
      team: "Leads & Contacts",
      type: "link"
    },
    {
      title: "Careers",
      url: "/admin/careers",
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
      url: "#",
      icon: Braces,
      team: "Meta & Schema",
      items: [
        {
          title: "Corporation",
          url: "/admin/schemas/corporation",
        },
        {
          title: "WebPage",
          url: "/admin/schemas/webpage",
        },
        {
          title: "Organization",
          url: "/admin/schemas/organization",
        },
        {
          title: "LocalBusiness",
          url: "/admin/schemas/localbusiness",
        },
        {
          title: "BreadcrumbList",
          url: "/admin/schemas/breadcrumblist",
        },
        {
          title: "WebSite",
          url: "/admin/schemas/website",
        },
        {
          title: "Service",
          url: "/admin/schemas/service",
        },
        {
          title: "Product",
          url: "/admin/schemas/product",
        },
        {
          title: "NewsArticle",
          url: "/admin/schemas/newsarticle",
        },
      ],
    },
    {
      title: "FAQs",
      url: "/admin/faqs",
      icon: Quote,
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
  ],
}

export function AppSidebar({
  ...props
}) {
  const activeTeam = useTeamStore((state) => state.activeTeam);

  // Filter nav items based on active team
  const filteredItems = React.useMemo(() => {
    if (!activeTeam) return [];
    return data.navMain.filter(item => item.team === activeTeam.name);
  }, [activeTeam]);

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
