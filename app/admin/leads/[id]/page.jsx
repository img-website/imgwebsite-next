"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import { getPublicUrl } from "@/lib/s3";
import Link from "next/link";
import { use as usePromise } from "react";
import { useLead } from "@/hooks/use-leads";
import LeadDetailSkeleton from "@/components/skeleton/lead-detail-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { lead } = useLead(id);
  const statusMap = { 1: 'Upcoming', 2: 'Career' };

  if (lead === undefined) {
    return <LeadDetailSkeleton />;
  }

  if (lead === null) {
    return <div className="p-4">Lead not found</div>;
  }

  return (
    <div className="w-full p-4">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Lead Details</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="max-sm:px-0">
          <div className="space-y-2 text-sm">
            <p className="sm:text-xl text-lg"><strong>{lead.contact_name}</strong></p>
            <p className="sm:text-sm text-xs">{lead.description}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Mobile:</strong> {lead.mobile_number}</p>
            <p><strong>Organization:</strong> {lead.organization}</p>
            <p><strong>Requirements:</strong> {lead.requirements}</p>
            <p><strong>Status:</strong> {statusMap[lead.status]}</p>
            {lead.assign_to && <p><strong>Assigned To:</strong> {lead.assign_to}</p>}
            {lead.assigned_date && (
              <p><strong>Assigned Date:</strong> {new Date(lead.assigned_date).toLocaleString()}</p>
            )}
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
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-end max-sm:px-0">
            <Button asChild>
              <Link href={`/admin/leads/${lead._id}/edit`} className="flex items-center gap-2">
                <PencilIcon className="w-4 h-4" />
                Edit
              </Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
