"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Svg from "@/components/svg";
import apiFetch from "@/helpers/apiFetch";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email()
});

export default function NewsLetterForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" }
  });

  async function onSubmit(values) {
    try {
      const res = await apiFetch("/api/v1/admin/newsletters", {
        method: "POST",
        data: values
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Subscribed");
        form.reset();
      } else {
        toast.error(data.error || "Failed");
      }
    } catch (err) {
      toast.error("Failed");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center space-x-2 leadForm">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email Address"
                  className="h-10 w-full bg-transparent text-white placeholder:text-white/40 ring-2 ring-inset ring-white/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="size-10 bg-white text-theme4 hover:bg-white/90" disabled={form.formState.isSubmitting}>
          <Svg name="send" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </Form>
  );
}
