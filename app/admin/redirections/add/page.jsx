"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import RedirectionForm from "@/components/RedirectionForm";
import { useForm } from "react-hook-form";
import { useRedirectionStore } from "@/app/store/use-redirection-store";

const urlOrPath = z.string().refine(
  (val) => {
    try {
      // Accept absolute URLs
      new URL(val);
      return true;
    } catch {
      // Accept relative paths starting with '/'
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

export default function AddRedirectionPage() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(redirectionSchema),
    defaultValues: {
      from: "",
      to: "",
      methodCode: "301",
    },
  });
  const redirections = useRedirectionStore((state) => state.redirections);
  const setRedirections = useRedirectionStore((state) => state.setRedirections);
  const setRedirectionDetail = useRedirectionStore(
    (state) => state.setRedirectionDetail,
  );

  async function onSubmit(values) {
    form.clearErrors();
    try {
      const res = await fetch("/api/v1/admin/redirections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.data) {
          const newRedir = data.data;
          setRedirectionDetail(newRedir.id, newRedir);
          setRedirections(
            redirections ? [newRedir, ...redirections] : [newRedir],
          );
        }
        toast.success("Redirection added successfully");
        if (data.notice) toast.info(data.notice);
        form.reset();
        router.push("/admin/redirections");
      } else {
        toast.error(data.error || "Failed to add redirection");
        if (data.notice) toast.info(data.notice);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add Redirection</CardTitle>
              <CardDescription>
                Create a new URL redirection. Fill in the required information
                below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RedirectionForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
