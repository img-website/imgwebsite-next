"use client";
import { DepartmentTable } from "@/components/departmentTable";
import DepartmentTableSkeleton from "@/components/skeleton/department-table-skeleton";
import { useDepartments } from "@/hooks/use-departments";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { departments } = useDepartments();
  const canAdd = usePermission('departments', 'write');

  const data = departments ? departments.map((d) => ({ id: d.id, name: d.name })) : [];

  if (!departments) {
    return <DepartmentTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <DepartmentTable data={data} canAdd={canAdd} />
    </div>
  );
}
