"use client";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import DashboardSkeleton from "@/components/skeleton/dashboard-skeleton";
import { useDashboard } from "@/hooks/use-dashboard";

export default function Page() {
  const { stats } = useDashboard();

  if (!stats) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="grid gap-4 p-4">
      <SectionCards stats={stats} />
      <ChartAreaInteractive />
    </div>
  );
}
