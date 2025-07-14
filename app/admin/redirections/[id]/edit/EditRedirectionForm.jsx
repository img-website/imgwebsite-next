"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { SaveIcon, Loader2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useRedirectionStore } from "@/app/store/use-redirection-store";

const urlOrPath = z.string().refine(
  (val) => {
    try {
      new URL(val);
      return true;
    } catch {
      return val.startsWith("/");
    }
  },
  {
    message:
      "Enter a valid absolute or relative URL (must start with / for relative)",
  },
);

const redirectionSchema = z.object({
  from: urlOrPath,
  to: urlOrPath,
  methodCode: z.enum(["301", "302", "307", "308"]),
});

export default function EditRedirectionForm({ redirection }) {
  const router = useRouter();
  const updateRedir = useRedirectionStore((state) => state.updateRedirection);
  const setDetail = useRedirectionStore((state) => state.setRedirectionDetail);
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
      const res = await fetch(`/api/v1/admin/redirections/${redirection.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.data) {
          updateRedir(redirection.id, data.data);
          setDetail(redirection.id, data.data);
        }
        toast.success("Redirection updated successfully");
        if (data.notice) toast.info(data.notice);
        router.push("/admin/redirections");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to update redirection");
        if (data.notice) toast.info(data.notice);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Edit Redirection</CardTitle>
          <CardDescription className="max-sm:text-xs">
            Update the redirection details below.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From URL</FormLabel>
                    <FormControl>
                      <Input className="max-sm:text-sm" placeholder="/old-url" {...field} />
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
                        <SelectItem value="307">
                          307 (Temporary, method preserved)
                        </SelectItem>
                        <SelectItem value="308">
                          308 (Permanent, method preserved)
                        </SelectItem>
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
                      Updating...
                    </>
                  ) : (
                    <>
                      <SaveIcon className="w-4 h-4" />
                      Update Redirection
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
