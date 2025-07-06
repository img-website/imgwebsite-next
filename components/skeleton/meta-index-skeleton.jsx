"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function MetaIndexSkeleton() {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-32" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-24" />
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
