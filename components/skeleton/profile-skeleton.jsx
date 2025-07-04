"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <div className="w-full p-4 flex flex-col items-center gap-4">
      <Skeleton className="h-[120px] w-[120px] rounded-full" />
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-10 w-32" />
    </div>
  );
}
