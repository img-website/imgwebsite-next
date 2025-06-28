"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import schemaToLd from "@/helpers/schemaToLd";

export default function PageSchema() {
  const pathname = usePathname();
  const [lds, setLds] = useState([]);

  useEffect(() => {
    async function load() {
      const list = [];
      try {
        const res = await fetch(`/api/v1/admin/schema?pageUrl=${encodeURIComponent(pathname)}`);
        const json = await res.json();
        if (json.success && json.data) {
          const { schemas } = json.data;
          if (schemas && typeof schemas === 'object') {
            list.push(
              ...Object.entries(schemas)
                .map(([t, d]) => schemaToLd(t, d, pathname))
                .filter(Boolean)
            );
          } else {
            const entries = Array.isArray(json.data) ? json.data : [json.data];
            list.push(
              ...entries.map((e) => schemaToLd(e.type, e.data, pathname)).filter(Boolean)
            );
          }
        }
      } catch {
        /* ignore */
      }
      try {
        const res = await fetch(`/api/v1/admin/faqs?pageUrl=${encodeURIComponent(pathname)}`);
        const json = await res.json();
        if (json.success && json.data) {
          const ld = schemaToLd('FAQPage', json.data, pathname);
          if (ld) list.push(ld);
        }
      } catch {
        /* ignore */
      }
      setLds(list);
    }
    load();
  }, [pathname]);

  if (!lds.length) return null;
  return lds.map((ld, idx) => (
    <script
      key={idx}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }}
    />
  ));
}
