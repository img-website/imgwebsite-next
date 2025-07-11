"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import DepartmentForm from "@/components/department-form";
import { useDepartmentStore } from "@/app/store/use-department-store";

export default function AddDepartmentPage() {
  const router = useRouter();
  const departments = useDepartmentStore((state) => state.departments);
  const setDepartments = useDepartmentStore((state) => state.setDepartments);
  const setDepartmentDetail = useDepartmentStore((state) => state.setDepartmentDetail);

  function handleSuccess(newDept) {
    if (newDept) {
      setDepartmentDetail(newDept.id, newDept);
      setDepartments(departments ? [newDept, ...departments] : [newDept]);
    }
    router.push("/admin/departments");
  }

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Department</CardTitle>
            <CardDescription>Create a new department and assign permissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <DepartmentForm onSuccess={handleSuccess} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
