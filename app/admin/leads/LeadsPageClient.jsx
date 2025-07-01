"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { LeadTable } from '@/components/leadTable';
import { TableSkeleton } from '@/components/skeleton/table-skeleton';

export default function LeadsPageClient({ endpoint, cacheKey, statusValue }) {
  const { data, loading } = useCachedApi(cacheKey, async () => {
    const res = await fetch(endpoint);
    const json = await res.json();
    const leads = Array.isArray(json?.data) ? json.data : [];
    const statusMap = { 1: 'upcoming', 2: 'career' };
    return leads.map(lead => ({
      id: lead._id,
      contact_name: lead.contact_name,
      mobile_number: lead.mobile_number,
      email: lead.email,
      organization: lead.organization,
      requirements: lead.requirements,
      status: statusMap[lead.status] || statusValue,
      created_date: lead.created_date,
      assign_to: lead.assign_to,
      attachments: lead.attachments,
    }));
  });

  if (loading || !data) return <TableSkeleton />;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <LeadTable data={data} />
    </div>
  );
}
