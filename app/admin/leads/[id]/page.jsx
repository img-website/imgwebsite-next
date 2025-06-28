import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPublicUrl } from "@/lib/s3";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/leads/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const lead = json?.data;

  if (!lead) {
    return <div className="p-4">Lead not found</div>;
  }

  const statusMap = { 1: 'Upcoming', 2: 'Career' };

  return (
    <div className="w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Lead Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> {lead.contact_name}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Mobile:</strong> {lead.mobile_number}</p>
            <p><strong>Organization:</strong> {lead.organization}</p>
            <p><strong>Requirements:</strong> {lead.requirements}</p>
            <p><strong>Description:</strong> {lead.description}</p>
            <p><strong>Status:</strong> {statusMap[lead.status]}</p>
            {lead.assign_to && <p><strong>Assigned To:</strong> {lead.assign_to}</p>}
            {lead.assigned_date && <p><strong>Assigned Date:</strong> {new Date(lead.assigned_date).toLocaleString()}</p>}
            <p><strong>Created:</strong> {new Date(lead.created_date).toLocaleString()}</p>
            {lead.attachments && lead.attachments.length > 0 && (
              <div>
                <strong>Attachments:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {lead.attachments.map((file, idx) => (
                    <li key={idx}>
                      <a
                        href={getPublicUrl(`leads/${file}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {file}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Link href={`/admin/leads/${lead._id}/edit`}>
              <Button type="button">Edit</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
