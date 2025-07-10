"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeadAddSkeleton() {
  return (
    <div className="w-full p-4">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
          <CardDescription className="max-sm:text-xs">
            <Skeleton className="h-4 w-64" />
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <div className="space-y-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-[200px] w-full" />
            </div>
            <div className="flex justify-end gap-4">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
