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
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    phone: z.string().min(1, { message: "Mobile is required" }),
    type: z.string().min(1, { message: "Service is required" }),
    message: z.string().min(1, { message: "Message is required" }),
});

export default function LeadForm({ defaultType = "Mobile App Development" }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [pageUrl, setPageUrl] = useState("");
    const [country, setCountry] = useState("in");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const search = searchParams.toString();
            const url = `${window.location.origin}${pathname}${search ? `?${search}` : ""}`;
            setPageUrl(url);
        }
    }, [pathname, searchParams]);

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
        message: "",
        },
    });

    async function onSubmit(values) {
        try {
        const fd = new FormData();
        fd.append("contact_name", values.name);
        fd.append("email", values.email);
        fd.append("mobile_number", values.phone);
        fd.append("requirements", values.type);
        fd.append("description", values.message);
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 leadForm">
                <div className="grid grid-cols-2 gap-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
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
                        <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
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
                        value={field.value}
                        onChange={field.onChange}
                        defaultCountry={country}
                        forceDialCode
                        />
                    </FormControl>
                    <FormMessage />
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
                            <SelectValue />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                        <SelectItem value="Fantasy Cricket App Development">Fantasy Cricket App Development</SelectItem>
                        <SelectItem value="Fantasy Sports App Development">Fantasy Sports App Development</SelectItem>
                        <SelectItem value="Fantasy Football App Development">Fantasy Football App Development</SelectItem>
                        <SelectItem value="E-commerce Development">E-commerce Development</SelectItem>
                        <SelectItem value="MLM Software Development">MLM Software Development</SelectItem>
                        <SelectItem value="Website Design">Website Design</SelectItem>
                        <SelectItem value="Web Portal Development">Web Portal Development</SelectItem>
                        <SelectItem value="Custom ERP Development">Custom ERP Development</SelectItem>
                        <SelectItem value="Hire Dedicated Developer">Hire Dedicated Developer</SelectItem>
                        <SelectItem value="SEO/Social Media Marketing">SEO/Social Media Marketing</SelectItem>
                        <SelectItem value="Casino Game App Development">Casino Game App Development</SelectItem>
                        <SelectItem value="Fantasy Kabaddi App Development">Fantasy Kabaddi App Development</SelectItem>
                        <SelectItem value="Fantasy Stock Market App Development">Fantasy Stock Market App Development</SelectItem>
                        <SelectItem value="Sports Betting App Development">Sports Betting App Development</SelectItem>
                        <SelectItem value="Launch Your Online Ecommerce Store">Launch Your Online Ecommerce Store</SelectItem>
                        <SelectItem value="Other Services">Other Services</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
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
                        <Textarea placeholder="Message" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Submitting..." : "Let's Connect"}
                </Button>
            </form>
        </Form>
    );
}
