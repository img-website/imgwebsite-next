import { useEffect, useState, useCallback } from "react";
import apiFetch from "@/helpers/apiFetch";
import { useStaticMetaStore } from "@/app/store/use-static-meta-store";

export function useStaticMeta() {
  const meta = useStaticMetaStore((state) => state.meta);
  const setMeta = useStaticMetaStore((state) => state.setMeta);
  const clearMeta = useStaticMetaStore((state) => state.clearMeta);
  const [loading, setLoading] = useState(meta === undefined);

  const refresh = useCallback(() => {
    clearMeta();
  }, [clearMeta]);

  useEffect(() => {
    if (meta === undefined) {
      setLoading(true);
      apiFetch("/api/v1/admin/meta/static")
        .then((res) => res.json())
        .then((json) => {
          setMeta(json?.data ?? null);
        })
        .finally(() => setLoading(false));
    }
  }, [meta, setMeta]);

  return { meta, loading, refresh };
}
