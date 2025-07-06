"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import apiFetch from "@/helpers/apiFetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useNewsletterStore } from "@/app/store/use-newsletter-store";

const schema = z.object({ email: z.string().email() });

export default function Page() {
  const router = useRouter();
  const setNewsletters = useNewsletterStore((state) => state.setNewsletters);
  const newsletters = useNewsletterStore((state) => state.newsletters);
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  async function onSubmit(values) {
    const res = await apiFetch('/api/v1/admin/newsletters', { method: 'POST', data: values });
    const result = await res.json();
    if (result.success) {
      toast.success('Subscribed');
      if (result.data) {
        setNewsletters(newsletters ? [result.data, ...newsletters] : [result.data]);
      }
      form.reset();
      router.push('/admin/newsletter');
    } else {
      toast.error(result.error || 'Failed');
    }
  }

  return (
    <div className="w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add Email</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="cursor-pointer"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
