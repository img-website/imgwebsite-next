import LeadsPageClient from "./LeadsPageClient";

export default async function Page() {
  return (
    <LeadsPageClient
      endpoint="/api/v1/admin/leads/upcoming"
      cacheKey="leads-upcoming"
      statusValue="upcoming"
    />
  );
}
