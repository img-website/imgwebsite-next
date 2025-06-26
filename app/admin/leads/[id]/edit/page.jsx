"use client";
import { use, useEffect } from "react";
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

const leadSchema = z.object({
  contact_name: z.string().optional(),
  mobile_number: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  organization: z.string().optional().or(z.literal("")),
  requirements: z.string().optional().or(z.literal("")),
  description: z.string().optional().or(z.literal("")),
});

export default function Page({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const form = useForm({ resolver: zodResolver(leadSchema), defaultValues: { contact_name: "", mobile_number: "", email: "", organization: "", requirements: "", description: "" } });

  useEffect(() => {
    async function fetchLead() {
      const res = await fetch(`/api/v1/admin/leads/${id}`);
      const data = await res.json();
      if (data.success && data.data) {
        form.reset({
          contact_name: data.data.contact_name || "",
          mobile_number: data.data.mobile_number || "",
          email: data.data.email || "",
          organization: data.data.organization || "",
          requirements: data.data.requirements || "",
          description: data.data.description || "",
        });
      }
    }
    fetchLead();
  }, [id]);

  async function onSubmit(values) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      if (val) formData.append(key, val);
    });
    const res = await apiFetch(`/api/v1/admin/leads/${id}`, { method: 'PUT', body: formData });
    const result = await res.json();
    if (result.success) {
      toast.success('Lead updated');
      router.push(`/admin/leads/${id}`);
      router.refresh();
    } else {
      toast.error(result.error || 'Failed to update');
    }
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
