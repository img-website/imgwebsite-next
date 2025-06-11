"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function DynamicBreadcrumb() {
  const pathname = usePathname()

  // Skip rendering breadcrumb on home page
  if (pathname === '/') return null

  // Convert pathname to breadcrumb items
  const pathSegments = pathname.split('/').filter(segment => segment)
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    const isLast = index === pathSegments.length - 1

    return {
      href,
      label,
      isLast
    }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        
        {breadcrumbItems.map(({ href, label, isLast }) => (
          <BreadcrumbItem key={href}>
            {isLast ? (
              <BreadcrumbPage>{label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link href={href}>{label}</Link>
              </BreadcrumbLink>
            )}
            {!isLast && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
