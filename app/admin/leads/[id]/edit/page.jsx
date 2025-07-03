"use client";
import { use as usePromise, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import apiFetch from "@/helpers/apiFetch";
import { toast } from "sonner";
import { getPublicUrl } from "@/lib/s3";
import { Download } from "lucide-react";
import Link from "next/link";
import { useLead } from "@/hooks/use-leads";
import LeadEditSkeleton from "@/components/skeleton/lead-edit-skeleton";

const leadSchema = z.object({
  contact_name: z.string().optional(),
  mobile_number: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  organization: z.string().optional().or(z.literal("")),
  requirements: z.string().optional().or(z.literal("")),
  description: z.string().optional().or(z.literal("")),
  attachments: z.any().optional(),
});

export default function Page({ params }) {
  const router = useRouter();
  const { id } = usePromise(params);
  const { lead } = useLead(id);
  const [existingAttachments, setExistingAttachments] = useState([]);
  const form = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      contact_name: "",
      mobile_number: "",
      email: "",
      organization: "",
      requirements: "",
      description: "",
      attachments: null,
    },
  });

  useEffect(() => {
    if (lead) {
      form.reset({
        contact_name: lead.contact_name || "",
        mobile_number: lead.mobile_number || "",
        email: lead.email || "",
        organization: lead.organization || "",
        requirements: lead.requirements || "",
        description: lead.description || "",
      });
      setExistingAttachments(lead.attachments || []);
    }
  }, [lead]);

  async function onSubmit(values) {
    const formData = new FormData();
    if (values.contact_name) formData.append("contact_name", values.contact_name);
    if (values.mobile_number) formData.append("mobile_number", values.mobile_number);
    if (values.email) formData.append("email", values.email);
    if (values.organization) formData.append("organization", values.organization);
    if (values.requirements) formData.append("requirements", values.requirements);
    if (values.description) formData.append("description", values.description);
    if (values.attachments && values.attachments.length) {
      for (const file of values.attachments) {
        formData.append("attachments", file);
      }
    }
    const res = await apiFetch(`/api/v1/admin/leads/${id}`, { method: "PUT", body: formData });
    const result = await res.json();
    if (result.success) {
      toast.success("Lead updated");
      router.push(`/admin/leads/${id}`);
      router.refresh();
    } else {
      toast.error(result.error || "Failed to update");
    }
  }

  if (lead === undefined) {
    return <LeadEditSkeleton />;
  }

  if (lead === null) {
    return <div className="p-4">Lead not found</div>;
  }

  return (
    <div className="w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Edit Lead</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField name="contact_name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="mobile_number" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="organization" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="requirements" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Requirements</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="description" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="attachments" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Attachments</FormLabel>
                  <FormControl>
                    <Input type="file" multiple onChange={(e) => field.onChange(e.target.files)} />
                  </FormControl>
                </FormItem>
              )} />
              {existingAttachments.length > 0 && (
                <div className="space-y-2">
                  {existingAttachments.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <Link
                        href={getPublicUrl(`leads/${file}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {file}
                      </Link>
                      <Button variant="outline" size="icon" asChild>
                        <Link
                          href={getPublicUrl(`leads/${file}`)}
                          rel="noopener noreferrer"
                          download
                          target="_blank"
                        >
                          <Download className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-end">
                <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? 'Saving...' : 'Save'}</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
