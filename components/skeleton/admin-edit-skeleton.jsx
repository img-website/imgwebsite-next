"use client";
import { Skeleton } from "@/components/ui/skeleton";


export default function AdminEditSkeleton() {
  return (
    <div className="w-full p-4">
      <div className="space-y-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
        <div className="flex justify-end gap-4">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}
