import LeadsPageClient from "../LeadsPageClient";

export default async function Page() {
  return (
    <LeadsPageClient
      endpoint="/api/v1/admin/leads/career"
      cacheKey="leads-career"
      statusValue="career"
    />
  );
}
