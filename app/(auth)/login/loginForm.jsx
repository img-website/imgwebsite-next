"use client"

import { useState } from "react"
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
import { Eye, EyeOff } from "lucide-react"

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
    const [showPassword, setShowPassword] = useState(false)
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
                const expiry = new Date(Date.now() + 2592000 * 1000).toUTCString();
                document.cookie = `token=${data?.token}; path=/; priority=high; max-age=2592000; expires=${expiry}`;
                document.cookie = `userEmail=${data?.data?.email}; path=/; expires=${expiry}`;
                document.cookie = `userRole=${data?.data?.role}; path=/; expires=${expiry}`;
                const permStr = btoa(JSON.stringify(data?.data?.permissions || {}));
                document.cookie = `userPermissions=${permStr}; path=/; max-age=2592000; expires=${expiry}`;
                if (data?.data?.permissionsUpdatedAt) {
                    document.cookie = `permissionsStamp=${data.data.permissionsUpdatedAt}; path=/; max-age=2592000; expires=${expiry}`;
                }

                toast.success(data.message);

                // get redirectTo from query params if present
                const searchParams = new URLSearchParams(window.location.search);
                const redirectTo = searchParams.get('redirectTo');
                const defaultDest =
                    data?.data?.role === 'admin' || data?.data?.role === 'superadmin'
                        ? '/admin'
                        : '/';

                if (redirectTo) {
                    router.push(redirectTo);
                } else {
                    router.push(defaultDest);
                }

                router.refresh();
            } else {
                handleError(data?.error);
            }
        } catch (error) {
            handleError(error?.message);
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
                                    type={"email"}
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
                                <Link href="/forgot-password" className="ml-auto text-sm underline">Forgot your password?</Link>
                            </div>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        autoComplete="current-password"
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

                {/* Submit Button */}
                <Button type="submit" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm;
