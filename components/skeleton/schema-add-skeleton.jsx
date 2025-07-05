"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function SchemaAddSkeleton() {
  return (
    <div className="w-full p-4 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-10 w-full" />
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
      <div className="flex justify-end pt-4">
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}
