"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import apiFetch from "@/helpers/apiFetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLeadStore } from "@/app/store/use-lead-store";

const leadSchema = z.object({
  contact_name: z.string().min(1, { message: "Name is required" }),
  mobile_number: z.string().min(1, { message: "Mobile is required" }),
  email: z.string().email().optional().or(z.literal("")),
  organization: z.string().optional().or(z.literal("")),
  requirements: z.string().optional().or(z.literal("")),
  description: z.string().optional().or(z.literal("")),
  attachments: z.any().optional(),
});

export default function Page() {
  const router = useRouter();
  const addUpcoming = useLeadStore((state) => state.setUpcoming);
  const leadsUpcoming = useLeadStore((state) => state.upcoming);
  const form = useForm({ resolver: zodResolver(leadSchema), defaultValues: { contact_name: "", mobile_number: "", email: "", organization: "", requirements: "", description: "" } });

  async function onSubmit(values) {
    const formData = new FormData();
    formData.append('contact_name', values.contact_name);
    formData.append('mobile_number', values.mobile_number);
    if (values.email) formData.append('email', values.email);
    if (values.organization) formData.append('organization', values.organization);
    if (values.requirements) formData.append('requirements', values.requirements);
    if (values.description) formData.append('description', values.description);
    if (values.attachments && values.attachments.length) {
      for (const file of values.attachments) formData.append('attachments', file);
    }
    const res = await apiFetch('/api/v1/admin/leads', { method: 'POST', body: formData });
    const result = await res.json();
    if (result.success) {
      toast.success('Lead created');
      if (result.data) {
        const newLead = result.data;
        addUpcoming(leadsUpcoming ? [newLead, ...leadsUpcoming] : [newLead]);
      }
      form.reset();
      router.push('/admin/leads');
    } else {
      toast.error(result.error || 'Failed to create');
    }
  }

  return (
    <div className="w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add Lead</CardTitle>
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
                  <FormControl><Input type="file" multiple onChange={(e) => field.onChange(e.target.files)} /></FormControl>
                </FormItem>
              )} />
              <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                <Button
                  type="submit"
                  className="cursor-pointer"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Creating...' : 'Create'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
