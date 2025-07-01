"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function FormSkeleton({ rows = 4 }) {
  return (
    <div className="p-4 space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </div>
  );
}
