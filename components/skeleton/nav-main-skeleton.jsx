"use client"

export function NavMainSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-2 px-4 h-8">
          <div className="h-4 w-4 animate-pulse rounded bg-black/10" />
          <div className="h-4 w-24 animate-pulse rounded bg-black/10" />
        </div>
      ))}
    </div>
  )
}
