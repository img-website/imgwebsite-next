"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "@/components/ui/phone-input";
import ImageCropperInput from "@/components/image-cropper-input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import apiFetch from "@/helpers/apiFetch";
import useErrorHandler from "@/helpers/errors";

const schema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username: z.string().optional(),
  mobileNumber: z.string().optional(),
  profileImage: z.any().optional(),
  department: z.string().optional(),
});

export default function EditAdminForm({
  admin,
  hideDepartment = false,
  redirectTo = "/admin/admins",
}) {
  const [departments, setDepartments] = useState([]);
  const router = useRouter();
  const handleError = useErrorHandler();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: admin.firstName || "",
      lastName: admin.lastName || "",
      username: admin.username || "",
      mobileNumber: admin.mobileNumber || "",
      department: admin.departmentId || "",
      profileImage: admin.profileImage
        ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/admins/${admin.profileImage}?t=${Date.now()}`
        : undefined,
    },
  });

  useEffect(() => {
    async function loadDepts() {
      try {
        const res = await apiFetch("/api/v1/admin/departments");
        const json = await res.json();
        if (json.success) setDepartments(json.data);
      } catch {
        console.error("Failed to load departments");
      }
    }
    loadDepts();
  }, []);

  async function onSubmit(values) {
    try {
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        if (hideDepartment && k === 'department') return;
        if (k === 'profileImage') {
          if (v && v[0]) fd.append('profileImage', v[0]);
        } else if (v) {
          fd.append(k, v);
        }
      });
      const res = await apiFetch(`/api/v1/admin/admins/${admin.id}`, {
        method: "PUT",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Admin updated");
        if (data.notice) toast.info(data.notice);
        router.push(redirectTo);
        router.refresh();
      } else {
        toast.error(data.error || "Failed to update");
        if (data.notice) toast.info(data.notice);
      }
    } catch (e) {
      handleError(e?.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
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
                <Input placeholder="Last name" {...field} />
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
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profileImage"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Profile Image</FormLabel>
              <FormControl>
                <ImageCropperInput value={value} onChange={onChange} aspectRatio={1} />
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
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <PhoneInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!hideDepartment && (
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
                        {field.value
                          ? departments.find((d) => d._id === field.value)?.name
                          : "Select department..."}
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
                              onSelect={() => form.setValue("department", d._id)}
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
        )}
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? "Updating..." : "Update"}
        </Button>
      </form>
    </Form>
  );
}
