"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import schemaToLd from "@/helpers/schemaToLd";

export default function PageSchema() {
  const pathname = usePathname();
  const [ld, setLd] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/v1/admin/schema?pageUrl=${encodeURIComponent(pathname)}`);
        const json = await res.json();
        if (json.success && json.data) {
          const { type, data } = json.data;
          setLd(schemaToLd(type, data));
        } else {
          setLd(null);
        }
      } catch {
        setLd(null);
      }
    }
    load();
  }, [pathname]);

  if (!ld) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }}
    />
  );
}
