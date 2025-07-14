"use client";

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { KeyRoundIcon, Loader2Icon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

import { Eye, EyeOff } from "lucide-react"

// Zod schema for validation
const resetPasswordSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
});

export function ResetForm() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    // useForm with Zod schema
    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    const resetPasswordHandler = async (values) => {
        const { password } = values;

        try {
            const response = await fetch("/api/v1/admin/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password, token }),
            });

            const data = await response.json();

            if (data?.success) {
                toast.success(data.message);
                router.push('/login');
            } else {
                toast.error(data.error || "Failed to reset password. Please try again.");
            }
        } catch (error) {
            toast.error(error?.message || "Failed to reset password. Please try again.");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(resetPasswordHandler)} className="grid gap-4">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="New Password"
                                        className="max-sm:text-sm"
                                        autoComplete="new-password"
                                        {...field}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {!showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                        <span className="sr-only">Show password</span>
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        className="max-sm:text-sm"
                                        autoComplete="new-password"
                                        {...field}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {!showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                        <span className="sr-only">Show password</span>
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full cursor-pointer flex items-center justify-center gap-2" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                        <>
                            <Loader2Icon className="w-4 h-4 animate-spin" />
                            Resetting...
                        </>
                    ) : (
                        <>
                            <KeyRoundIcon className="w-4 h-4" />
                            Reset Password
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}
export default ResetForm;