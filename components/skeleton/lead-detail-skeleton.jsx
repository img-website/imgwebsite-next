"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function LeadDetailSkeleton() {
  return (
    <div className="w-full p-4">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <div className="space-y-2 text-sm">
            {[...Array(10)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-24" />
          </div>
        </CardContent>
        <CardFooter className="max-sm:px-0" />
      </Card>
    </div>
  );
}
