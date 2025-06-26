import { LeadTable } from "@/components/leadTable";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/leads/approved`, { cache: 'no-store' });
  const json = await res.json();
  const leads = Array.isArray(json?.data) ? json.data : [];
  const data = leads.map(lead => ({
    id: lead._id,
    contact_name: lead.contact_name,
    mobile_number: lead.mobile_number,
    email: lead.email,
    organization: lead.organization,
    requirements: lead.requirements,
    status: 'approved',
    created_date: lead.created_date,
    assign_to: lead.assign_to,
  }));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <LeadTable data={data} />
    </div>
  );
}
