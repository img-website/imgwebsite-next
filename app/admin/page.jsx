import { SectionCards } from "@/components/section-cards";
import { getDashboardStats } from "@/app/actions/dashboard";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

export default async function Page() {
  const stats = await getDashboardStats();
  return (
    <div className="grid gap-4 p-4">
      <SectionCards stats={stats} />
      <ChartAreaInteractive />
    </div>
  );
}
