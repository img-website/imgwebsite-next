"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
                handleError(data);
            }
        } catch (error) {
            handleError(error);
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
                                    autoComplete="off"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Send Reset Link' : 'Send Reset Link'}
                </Button>
            </form>
        </Form>
    );
}

export default ForgotForm;
