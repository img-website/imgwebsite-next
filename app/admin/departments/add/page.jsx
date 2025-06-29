import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DepartmentForm from "@/components/department-form";

export default function Page() {
  const role = cookies().get("userRole")?.value;
  if (role !== "superadmin") {
    redirect("/admin");
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Department</h2>
      <DepartmentForm />
    </div>
  );
}
