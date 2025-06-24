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
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import TokenFromCookie from "@/helpers/tokenFromCookie";

const urlOrPath = z.string().refine(val => {
  try {
    // Accept absolute URLs
    new URL(val);
    return true;
  } catch {
    // Accept relative paths starting with '/'
    return val.startsWith('/');
  }
}, { message: 'Enter a valid absolute or relative URL (must start with / for relative)' });

const redirectionSchema = z.object({
  from: urlOrPath,
  to: urlOrPath,
  methodCode: z.enum(["301", "302", "307", "308"]),
});

export default function AddRedirectionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("blogId");
  const form = useForm({
    resolver: zodResolver(redirectionSchema),
    defaultValues: {
      from: "",
      to: "",
      methodCode: "301",
    },
  });

  async function onSubmit(values) {
    form.clearErrors();
    try {
      const res = await fetch("/api/v1/admin/redirections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values })
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Redirection added successfully");
        if (blogId) {
          const formData = new FormData();
          formData.append("status", "3");
          try {
            const token = TokenFromCookie();
            const resArchive = await fetch(`/api/v1/admin/blogs/${blogId}`, {
              method: "PUT",
              headers: { Authorization: `Bearer ${token}` },
              body: formData,
            });
            const archData = await resArchive.json();
            if (archData.success) {
              toast.success("Blog archived");
            } else {
              toast.error(archData.error || "Failed to archive blog");
            }
          } catch {
            toast.error("Failed to archive blog");
          }
          router.push("/admin/blogs");
        } else {
          form.reset();
          router.push("/admin/redirections");
        }
      } else {
        toast.error(data.error || "Failed to add redirection");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <DynamicBreadcrumb />
        </div>
      </header>
      <Separator />
      <div className="w-full p-4">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add Redirection</CardTitle>
              <CardDescription>
                Create a new URL redirection. Fill in the required information below.
              </CardDescription>
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
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full"
                  >
                    {form.formState.isSubmitting ? "Adding..." : "Add Redirection"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
