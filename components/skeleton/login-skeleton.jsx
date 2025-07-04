"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginSkeleton() {
  return (
    <Card className="m-auto w-full max-w-sm border-0 shadow-none">
      <CardHeader className="flex flex-col items-center gap-2">
        <Skeleton className="size-12 rounded-full" />
        <CardTitle className="text-2xl text-center pt-6">
          <Skeleton className="mx-auto h-6 w-32" />
        </CardTitle>
        <CardDescription className="text-center">
          <Skeleton className="mx-auto h-4 w-48" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex justify-end">
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-10 w-full" />
          <div className="mt-4 text-center text-sm">
            <Skeleton className="mx-auto h-4 w-40" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
