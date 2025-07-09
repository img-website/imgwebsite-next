"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogDetailSkeleton() {
  return (
    <div className="w-full p-4">
      <Card>
        <CardHeader className="border-b pb-4 space-y-2">
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[...Array(4)].map((_, idx) => (
              <div className="flex flex-col gap-1" key={idx}>
                <Skeleton className="w-full aspect-video" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
          <Skeleton className="h-96 w-full" />
          <div>
            <Card className="border bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">
                  <Skeleton className="h-4 w-40" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="border bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">
                  <Skeleton className="h-4 w-40" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[...Array(2)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4 border-t py-3">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-24" />
        </CardFooter>
      </Card>
    </div>
  );
}
