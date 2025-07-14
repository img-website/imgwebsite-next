"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon, Loader2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const urlOrPath = z.string().refine(val => {
  try {
    new URL(val);
    return true;
  } catch {
    return val.startsWith('/');
  }
}, { message: 'Enter a valid absolute or relative URL (must start with / for relative)' });

const redirectionSchema = z.object({
  from: urlOrPath,
  to: urlOrPath,
  methodCode: z.enum(["301", "302", "307", "308"]),
});

export default function RedirectionForm({ fromDefault = "", onSuccess }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(redirectionSchema),
    defaultValues: {
      from: fromDefault,
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
        if (data.notice) toast.info(data.notice);
        form.reset();
        if (onSuccess) onSuccess(data.data);
        else router.push("/admin/redirections");
      } else {
        toast.error(data.error || "Failed to add redirection");
        if (data.notice) toast.info(data.notice);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From URL</FormLabel>
              <FormControl>
                <Input className="max-sm:text-sm" placeholder="/old-url" {...field} readOnly={!!fromDefault} />
              </FormControl>
              <FormMessage className="max-sm:text-xs" />
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
                <Input className="max-sm:text-sm" placeholder="/new-url" {...field} />
              </FormControl>
              <FormMessage className="max-sm:text-xs" />
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
                  <SelectTrigger className="max-sm:w-full">
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
              <FormMessage className="max-sm:text-xs" />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="cursor-pointer flex items-center gap-2"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2Icon className="w-4 h-4 animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <PlusCircleIcon className="w-4 h-4" />
                Add Redirection
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
