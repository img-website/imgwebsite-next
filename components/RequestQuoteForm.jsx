"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PhoneInput from "@/components/ui/phone-input";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(1, { message: "Mobile is required" }),
  type: z.string().min(1, { message: "Service is required" }),
  budget: z.string().min(1, { message: "Budget is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  attachments: z.any().optional(),
});

export default function RequestQuoteForm({ defaultType = "Mobile App Development" }) {
  const router = useRouter();
  const pathname = usePathname();
  const [pageUrl, setPageUrl] = useState("");
  const [country, setCountry] = useState("in");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, [pathname]);

  useEffect(() => {
    async function detectCountry() {
      try {
        const res = await fetch("https://ipinfo.io/json");
        const data = await res.json();
        if (data && data.country) {
          setCountry(data.country.toLowerCase());
        }
      } catch {
        // ignore errors
      }
    }
    detectCountry();
  }, []);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: defaultType,
      budget: "",
      message: "",
      attachments: null,
    },
  });

  async function onSubmit(values) {
    try {
      const fd = new FormData();
      fd.append("contact_name", values.name);
      fd.append("email", values.email);
      fd.append("mobile_number", values.phone);
      fd.append("requirements", values.type);
      fd.append("budget", values.budget);
      fd.append("description", values.message);
      if (values.attachments) {
        fd.append("attachments", values.attachments);
      }
      fd.append("path", pathname);
      fd.append("page_url", pageUrl);
      const res = await fetch("/api/v1/admin/leads", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        form.reset();
        router.push("/thankyou.php");
      } else {
        toast.error(data.error || "Failed to submit");
      }
    } catch (err) {
      toast.error("Failed to submit");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 leadForm items-start">
        <div className="grid grid-cols-2 gap-2 items-start">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input className="!text-sm" placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email ID</FormLabel>
                <FormControl>
                  <Input className="!text-sm" type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <PhoneInput
                  className="!text-sm"
                  value={field.value}
                  onChange={field.onChange}
                  defaultCountry={country}
                  forceDialCode
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Looking For</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue className="!text-sm" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Custom Software Development">Custom Software Development</SelectItem>
                  <SelectItem value="E-commerce Solution">E-commerce Solution</SelectItem>
                  <SelectItem value="On-demand Solutions">On-demand Solutions</SelectItem>
                  <SelectItem value="Readymade solutions">Readymade solutions</SelectItem>
                  <SelectItem value="Fantasy Sports App Development">Fantasy Sports App Development</SelectItem>
                  <SelectItem value="Hire Dedicated Developers">Hire Dedicated Developers</SelectItem>
                  <SelectItem value="Other Services">Other Services</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Your Budget</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue className="!text-sm" placeholder="Approx. budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="less than 10000">Less than $10,000</SelectItem>
                  <SelectItem value="Under 25,000">$10,000 to $20,000</SelectItem>
                  <SelectItem value="25,000 - 1,00,000">$20,000 to $50,000</SelectItem>
                  <SelectItem value="Above 1,00,000">$50,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write a Message</FormLabel>
              <FormControl>
                <Textarea className="h-16 !text-sm" placeholder="Message" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="attachments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload project brief</FormLabel>
              <FormControl>
                <Input type="file" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
