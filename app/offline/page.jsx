"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Offline",
};

export default function OfflinePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const allowed = searchParams.get("sw") === "1";

  useEffect(() => {
    if (!allowed && navigator.onLine) {
      router.replace("/");
    }
  }, [allowed, router]);

  if (!allowed) {
    return null;
  }

  return (
    <main className="flex min-h-dvh items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <CardTitle>Network Unavailable</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You appear to be offline. Please check your internet connection and
            try again.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
