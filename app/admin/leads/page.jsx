"use client";
import { LeadTable } from "@/components/leadTable";
import LeadTableSkeleton from "@/components/skeleton/lead-table-skeleton";
import { useLeads } from "@/hooks/use-leads";

export default function Page() {
  const { leads } = useLeads('upcoming');
  const statusMap = { 1: 'upcoming', 2: 'career' };
  const data = leads
    ? leads.map((lead) => ({
        id: lead._id,
        contact_name: lead.contact_name,
        mobile_number: lead.mobile_number,
        email: lead.email,
        organization: lead.organization,
        requirements: lead.requirements,
        status: statusMap[lead.status] || 'upcoming',
        created_date: lead.created_date,
        assign_to: lead.assign_to,
        attachments: lead.attachments,
      }))
    : [];

  if (!leads) {
    return <LeadTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <LeadTable data={data} />
    </div>
  );
}
