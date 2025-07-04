"use client";
import DepartmentForm from "@/components/department-form";
import { useDepartment } from "@/hooks/use-departments";
import { use as usePromise } from "react";
import DepartmentEditSkeleton from "@/components/skeleton/department-edit-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { department } = useDepartment(id);

  if (department === undefined) {
    return <DepartmentEditSkeleton />;
  }

  if (department === null) {
    return <div className="p-4">Department not found</div>;
  }

  return (
    <div className="w-full p-4">
      <DepartmentForm department={department} />
    </div>
  );
}
