"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import useErrorHandler from "@/helpers/errors"
import { useRouter } from "next/navigation"
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
const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const handleError = useErrorHandler()

    // useForm with Zod schema
    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })
    

    const registerHandler = async (values) => {
        const { email, password } = values
        
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        try {
            const response = await fetch("/api/v1/admin/register", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();            
            if (!response.ok) {
                const error = new Error(data?.error || 'Registration failed');
                error.status = response.status;
                throw error;
            }

            if (data?.success) {
                document.cookie = `token=${data?.token}; path=/; priority=high;`
                document.cookie = `userEmail=${data?.data?.email}; path=/;`
                document.cookie = `userRole=${data?.data?.role}; path=/;`

                toast.success('Registration successful!');
                router.push('/admin');
                router.refresh();
            } else {
                throw new Error(data?.error || 'Registration failed');
            }
        } catch (error) {
            handleError(error?.message);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(registerHandler)} className="grid gap-4">
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
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        autoComplete="off"
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

                <Button type="submit" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Registering...' : 'Register'}
                </Button>
            </form>
        </Form>
    )
}

export default RegisterForm;
