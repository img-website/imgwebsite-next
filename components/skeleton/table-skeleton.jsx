"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton({ rows = 5 }) {
  return (
    <div className="p-4 space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-8 w-full" />
      ))}
    </div>
  );
}
