"use client"
import { Skeleton } from "@/components/ui/skeleton"

export default function PwaSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
  )
}
