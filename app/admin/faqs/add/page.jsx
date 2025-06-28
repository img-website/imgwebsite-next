"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import TinyMCEEditor from "@/components/TinyMCEEditor";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import apiFetch from "@/helpers/apiFetch";
import { toast } from "sonner";

const formSchema = z.object({
  pageUrl: z.string(),
  faqs: z
    .array(
      z.object({
        question: z.string().min(1, "Question is required"),
        answer: z.string().min(1, "Answer is required"),
      })
    )
    .min(1, "Add at least one FAQ"),
});

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageUrl = searchParams.get("url") || "/";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { pageUrl, faqs: [{ question: "", answer: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control: form.control, name: "faqs" });

  useEffect(() => {
    async function load() {
      try {
        const res = await apiFetch(`/api/v1/admin/faqs?pageUrl=${encodeURIComponent(pageUrl)}`);
        const json = await res.json();
        if (json.success && json.data) {
          const faqs = json.data.faqs && json.data.faqs.length ? json.data.faqs : [{ question: "", answer: "" }];
          form.reset({ pageUrl, faqs });
        }
      } catch {}
    }
    load();
  }, [pageUrl]);

  async function onSubmit(values) {
    const res = await apiFetch("/api/v1/admin/faqs", { method: "PUT", data: values });
    const json = await res.json();
    if (json.success) {
      toast.success("Saved");
      router.push("/admin/faqs");
      router.refresh();
    } else {
      toast.error(json.error || "Failed");
    }
  }

  return (
    <div className="w-full p-4 space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="text-sm font-medium">Page: {pageUrl}</div>
          {fields.map((field, index) => (
            <div key={field.id} className="border p-4 rounded-md space-y-4">
              <FormField
                control={form.control}
                name={`faqs.${index}.question`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`faqs.${index}.answer`}
                render={({ field }) => (
                  <FormItem className="[&_.tox-statusbar\_\_branding]:!hidden">
                    <FormLabel>Answer</FormLabel>
                    <FormControl>
                      <TinyMCEEditor value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" variant="outline" size="icon" onClick={() => remove(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="secondary" size="sm" onClick={() => append({ question: "", answer: "" })}>
            <Plus className="h-4 w-4 mr-2" /> Add FAQ
          </Button>
          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
