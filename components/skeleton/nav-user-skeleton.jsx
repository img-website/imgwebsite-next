"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function NavUserSkeleton() {
  return (
    <div className="flex items-center gap-2 p-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-1">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-28" />
      </div>
    </div>
  );
}
