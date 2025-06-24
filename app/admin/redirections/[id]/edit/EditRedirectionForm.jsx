"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const redirectionSchema = z.object({
  from: z.string().min(2, { message: "From URL is required" }),
  to: z.string().min(2, { message: "To URL is required" }),
  methodCode: z.enum(["301", "302", "307", "308"]),
});

export default function EditRedirectionForm({ redirection }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(redirectionSchema),
    defaultValues: {
      from: redirection.from || "",
      to: redirection.to || "",
      methodCode: String(redirection.methodCode || 301),
    },
  });

  async function onSubmit(values) {
    form.clearErrors();
    try {
      const res = await fetch(`/api/v1/admin/redirections/${redirection._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Redirection updated successfully");
        router.push("/admin/redirections");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to update redirection");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Redirection</CardTitle>
          <CardDescription>Update the redirection details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From URL</FormLabel>
                    <FormControl>
                      <Input placeholder="/old-url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="to"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To URL</FormLabel>
                    <FormControl>
                      <Input placeholder="/new-url" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="methodCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Redirect Type</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="301">301 (Permanent)</SelectItem>
                        <SelectItem value="302">302 (Temporary)</SelectItem>
                        <SelectItem value="307">307 (Temporary, method preserved)</SelectItem>
                        <SelectItem value="308">308 (Permanent, method preserved)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                {form.formState.isSubmitting ? "Updating..." : "Update Redirection"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
