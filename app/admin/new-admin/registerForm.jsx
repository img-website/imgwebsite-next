"use client"

import { useState, useEffect } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
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
import { cn } from "@/lib/utils"
import apiFetch from "@/helpers/apiFetch"

// Zod schema for validation
const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    department: z.string().min(1, { message: "Department is required" }),
})

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [departments, setDepartments] = useState([])
    const router = useRouter()
    const handleError = useErrorHandler()

    // useForm with Zod schema
    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
            department: '',
        },
    })

    useEffect(() => {
        async function loadDepts() {
            try {
                const res = await apiFetch('/api/v1/admin/departments');
                const json = await res.json();
                if (json.success) setDepartments(json.data);
            } catch (e) {
                console.error('Failed to load departments');
            }
        }
        loadDepts();
    }, []);
    

    const registerHandler = async (values) => {
        const { email, password, department } = values
        
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("department", department);

        try {
            const response = await apiFetch("/api/v1/admin/register", {
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
                toast.success('Registration successful!');
                router.push('/admin');
            } else {
                throw new Error(data?.error || 'Registration failed');
            }
        } catch (error) {
            handleError(error?.message);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(registerHandler)} autoComplete="off" className="grid gap-4">
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

                <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Department</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl className="w-full">
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                departments.find((d) => d._id === field.value)?.name
                                            ) : (
                                                "Select department..."
                                            )}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search department..." className="h-9" />
                                        <CommandList>
                                            <CommandEmpty>No department found.</CommandEmpty>
                                            <CommandGroup>
                                                {departments.map((d) => (
                                                    <CommandItem
                                                        key={d._id}
                                                        value={d.name}
                                                        onSelect={() => {
                                                            form.setValue("department", d._id);
                                                        }}
                                                    >
                                                        {d.name}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto h-4 w-4",
                                                                field.value === d._id ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
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
