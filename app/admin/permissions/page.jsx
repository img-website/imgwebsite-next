"use client";
import { useState, useEffect } from "react";
import { MODULES } from "@/app/lib/modules";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PermissionsPage() {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function fetchPermissions() {
      try {
        const res = await fetch("/api/v1/admin/permissions");
        const data = await res.json();
        if (data.success) {
          setSelected(data.data || []);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchPermissions();
  }, []);

  const toggle = (module) => {
    setSelected((prev) =>
      prev.includes(module) ? prev.filter((m) => m !== module) : [...prev, module]
    );
  };

  const submit = async () => {
    try {
      const res = await fetch("/api/v1/admin/permissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permissions: selected })
      });
      const data = await res.json();
      if (data.success) {
        document.cookie = `token=${data.token}; path=/; priority=high;`;
        document.cookie = `userPermissions=${selected.join()}; path=/;`;
        toast.success("Permissions updated");
      } else {
        toast.error(data.error || "Failed");
      }
    } catch (e) {
      toast.error("Error");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Select Permissions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MODULES.map((m) => (
          <label key={m} className="flex items-center space-x-2">
            <Checkbox checked={selected.includes(m)} onCheckedChange={() => toggle(m)} />
            <span className="capitalize">{m}</span>
          </label>
        ))}
      </div>
      <Button onClick={submit}>Save Permissions</Button>
    </div>
  );
}
