"use client"

export function TeamSwitcherSkeleton() {
  return (
    <div className="flex items-center gap-2 h-12">
      <div className="h-10 w-10 animate-pulse rounded-lg bg-black/10" />
      <div className="space-y-1">
        <div className="h-4 w-24 animate-pulse rounded bg-black/10" />
        <div className="h-3 w-32 animate-pulse rounded bg-black/10" />
      </div>
    </div>
  )
}
