"use client";
import { Button } from "@/components/ui/button";
import { SendIcon, Loader2Icon } from "lucide-react";
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
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Add Email</CardTitle>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input className="max-sm:text-sm" {...field} /></FormControl>
                  <FormMessage className="max-sm:text-xs" />
                </FormItem>
              )} />
              <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                <Button
                  type="submit"
                  className="cursor-pointer flex items-center gap-2"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2Icon className="animate-spin w-4 h-4" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
