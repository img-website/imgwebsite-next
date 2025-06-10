"use client"

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

// Zod schema for validation
const registerSchema = z.object({
    firstName: z.string().min(2, { message: "First Name must be at least 2 characters long" }),
    lastName: z.string().min(2, { message: "Last Name must be at least 2 characters long" }),
    username: z.string().min(4, { message: "Username must be at least 4 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    mobileNumber: z.string()
        .regex(/^[0-9]{10}$/, { message: "If provided, mobile number must be 10 digits" })
        .optional()
        .nullable()
        .or(z.literal("")),
    profileImage: z.instanceof(File).optional().nullable().or(z.literal("")),
})

export function RegisterForm() {
    const router = useRouter()
    const handleError = useErrorHandler()

    // useForm with Zod schema
    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            mobileNumber: '',
            profileImage: null, // Assuming you will handle file upload separately
        },
    })
    

    const registerHandler = async (values) => {
        const { firstName, lastName, username, email, password, mobileNumber, profileImage } = values
        
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        
        // Append mobile number if available
        if (mobileNumber) {
            formData.append("mobileNumber", mobileNumber);
        }

        // Append profile image if available
        if (profileImage) {
            formData.append("profileImage", profileImage);
        }

        try {
            const response = await fetch("/api/v1/admin/register", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();            if (!response.ok) {
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
            handleError(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(registerHandler)} className="grid gap-4">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="First Name"
                                    autoComplete="off"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Last Name"
                                    autoComplete="off"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Username"
                                    autoComplete="off"
                                    {...field}
                                />
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

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mobile Number (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    autoComplete="tel"
                                    {...field}
                                    value={field.value || ''}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="profileImage"
                    render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                            <FormLabel>Profile Image (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]
                                        onChange(file || '')
                                    }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Registering...' : 'Register'}
                </Button>
            </form>
        </Form>
    )
}

export default RegisterForm;
