"use client"

export function NavUserSkeleton({ avatarOnly = false } = {}) {
  return (
    <div className="flex items-center gap-2 p-4">
      <div className="h-8 w-8 animate-pulse rounded-full bg-black/10" />
      {!avatarOnly && (
        <div className="space-y-1">
          <div className="h-4 w-20 animate-pulse rounded bg-black/10" />
          <div className="h-3 w-28 animate-pulse rounded bg-black/10" />
        </div>
      )}
    </div>
  )
}
