import { LeadTable } from "@/components/leadTable";

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/v1/admin/leads/upcoming`, { cache: 'no-store' });
  const json = await res.json();
  const leads = Array.isArray(json?.data) ? json.data : [];
  const statusMap = { 1: 'upcoming', 2: 'career' };
  const data = leads.map(lead => ({
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
  }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <LeadTable data={data} />
    </div>
  );
}
