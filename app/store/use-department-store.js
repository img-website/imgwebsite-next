import { create } from "zustand";

export const useDepartmentStore = create((set) => ({
  departments: null,
  departmentDetails: {},
  setDepartments: (depts) => set({ departments: depts }),
  setDepartmentDetail: (id, dept) =>
    set((state) => ({
      departmentDetails: { ...state.departmentDetails, [id]: dept },
    })),
  updateDepartment: (id, updates) =>
    set((state) => {
      const departments = state.departments
        ? state.departments.map((d) => (d.id === id || d._id === id ? { ...d, ...updates } : d))
        : null;
      const detail = state.departmentDetails[id];
      return {
        departments,
        departmentDetails: detail
          ? { ...state.departmentDetails, [id]: { ...detail, ...updates } }
          : state.departmentDetails,
      };
    }),
  clearDepartments: () => set({ departments: null }),
  removeDepartment: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.departmentDetails;
      return { departmentDetails: rest };
    }),
  deleteDepartment: (id) =>
    set((state) => {
      const departments = state.departments
        ? state.departments.filter((d) => (d.id || d._id) !== id)
        : null;
      const { [id]: removed, ...rest } = state.departmentDetails;
      return { departments, departmentDetails: rest };
    }),
}));

