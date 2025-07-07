'use client'

import dynamic from 'next/dynamic'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { DynamicBreadcrumb } from '@/components/breadcrumb'
import { NavUserSkeleton } from '@/components/skeleton/nav-user-skeleton'

const NavUser = dynamic(
  () => import('@/components/nav-user').then(mod => mod.NavUser),
  {
    loading: () => <NavUserSkeleton />,
    ssr: false,
  }
)

export function AppHeader() {
  const { isMobile } = useSidebar()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        {!isMobile && <DynamicBreadcrumb />}
      </div>
      {isMobile && (
        <div className="ml-auto px-4">
          <NavUser />
        </div>
      )}
    </header>
  )
}
