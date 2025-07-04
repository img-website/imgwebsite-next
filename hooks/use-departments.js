import { useEffect, useState, useCallback } from "react";
import apiFetch from "@/helpers/apiFetch";
import { useDepartmentStore } from "@/app/store/use-department-store";

export function useDepartments() {
  const departments = useDepartmentStore((state) => state.departments);
  const setDepartments = useDepartmentStore((state) => state.setDepartments);
  const clearDepartments = useDepartmentStore((state) => state.clearDepartments);
  const [loading, setLoading] = useState(!departments);

  const refresh = useCallback(() => {
    clearDepartments();
  }, [clearDepartments]);

  useEffect(() => {
    if (!departments) {
      setLoading(true);
      apiFetch("/api/v1/admin/departments")
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setDepartments(json.data.map((d) => ({ ...d, id: d._id || d.id })));
          }
        })
        .finally(() => setLoading(false));
    }
  }, [departments, setDepartments]);

  return { departments, loading, refresh };
}

export function useDepartment(id) {
  const department = useDepartmentStore((state) => state.departmentDetails[id]);
  const setDepartmentDetail = useDepartmentStore((state) => state.setDepartmentDetail);
  const removeDepartment = useDepartmentStore((state) => state.removeDepartment);
  const [loading, setLoading] = useState(!department && !!id);

  const refresh = useCallback(() => {
    removeDepartment(id);
  }, [removeDepartment, id]);

  useEffect(() => {
    if (id && !department) {
      setLoading(true);
      apiFetch(`/api/v1/admin/departments/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setDepartmentDetail(id, json?.data ?? null);
        })
        .finally(() => setLoading(false));
    }
  }, [id, department, setDepartmentDetail]);

  return { department, loading, refresh };
}

