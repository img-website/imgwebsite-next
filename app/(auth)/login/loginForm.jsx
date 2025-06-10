"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useErrorHandler from "@/helpers/errors"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

// Zod schema for validation
const loginSchema = z.object({
    email: 
    z.string()
    .min(4, { 
        message: "Email or Username must be at least 4 characters"
    })
    .email("Enter a valid email"),
    
    password: 
    z.string()
    .min(8, { 
        message: "Password must be at least 8 characters" 
    }),
})

export function LoginForm() {
    const router = useRouter()
    const handleError = useErrorHandler()

    // useForm with Zod schema
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const loginHandler = async (values) => {
        const { email, password } = values
        try {
            const response = await fetch("/api/v1/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data?.success) {
                document.cookie = `token=${data?.token}; path=/; priority=high;`;
                document.cookie = `userEmail=${data?.data?.email}; path=/;`;
                document.cookie = `userRole=${data?.data?.role}; path=/;`;

                toast.success(data.message);

                // get redirectTo from query params if present
                const searchParams = new URLSearchParams(window.location.search);
                const redirectTo = searchParams.get('redirectTo');

                if (redirectTo) {
                    router.push(redirectTo);
                } else {
                    router.push(data?.data?.role === 'admin' ? '/admin' : '/');
                }

                router.refresh();
            } else {
                handleError(data);
            }
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(loginHandler)} className="grid gap-4">
                {/* Email Field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Email"
                                    autoComplete="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password Field */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center">
                                <FormLabel>Password</FormLabel>
                                <Link href="#" className="ml-auto text-sm underline">Forgot your password?</Link>
                            </div>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm;
