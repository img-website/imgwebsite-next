"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { SendIcon, Loader2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import useErrorHandler from "@/helpers/errors";
import { useRouter } from "next/navigation";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

// Zod schema for validation
const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

export function ForgotForm() {
    const router = useRouter();
    const handleError = useErrorHandler();

    // useForm with Zod schema
    const form = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
    });

    const forgotPasswordHandler = async (values) => {
        const { email } = values;

        try {
            const response = await fetch("/api/v1/admin/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data?.success) {
                toast.success(data.message);
                router.push('/login');
            } else {
                handleError(data?.error);
            }
        } catch (error) {
            handleError(error?.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(forgotPasswordHandler)} className="grid gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Email Address"
                                    className="max-sm:text-sm"
                                    autoComplete="off"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full cursor-pointer flex items-center justify-center gap-2" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                        <>
                            <Loader2Icon className="w-4 h-4 animate-spin" />
                            Send Reset Link
                        </>
                    ) : (
                        <>
                            <SendIcon className="w-4 h-4" />
                            Send Reset Link
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}

export default ForgotForm;
