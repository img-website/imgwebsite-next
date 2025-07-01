import { SectionCards } from "@/components/section-cards";
import { getDashboardStats } from "@/app/actions/dashboard";

export default async function Page() {
  const stats = await getDashboardStats();
  return (
    <div className="p-4">
      <SectionCards stats={stats} />
    </div>
  );
}
