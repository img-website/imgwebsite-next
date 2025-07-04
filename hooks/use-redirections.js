import { useEffect, useState, useCallback } from "react";
import apiFetch from "@/helpers/apiFetch";
import { useRedirectionStore } from "@/app/store/use-redirection-store";

export function useRedirections() {
  const redirections = useRedirectionStore((state) => state.redirections);
  const setRedirections = useRedirectionStore((state) => state.setRedirections);
  const clearRedirections = useRedirectionStore(
    (state) => state.clearRedirections,
  );
  const [loading, setLoading] = useState(!redirections);

  const refresh = useCallback(() => {
    clearRedirections();
  }, [clearRedirections]);

  useEffect(() => {
    if (!redirections) {
      setLoading(true);
      apiFetch("/api/v1/admin/redirections")
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setRedirections(json.data);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [redirections, setRedirections]);

  return { redirections, loading, refresh };
}

export function useRedirection(id) {
  const redirection = useRedirectionStore(
    (state) => state.redirectionDetails[id],
  );
  const setRedirectionDetail = useRedirectionStore(
    (state) => state.setRedirectionDetail,
  );
  const removeRedirection = useRedirectionStore(
    (state) => state.removeRedirection,
  );
  const [loading, setLoading] = useState(!redirection && !!id);

  const refresh = useCallback(() => {
    removeRedirection(id);
  }, [removeRedirection, id]);

  useEffect(() => {
    if (id && !redirection) {
      setLoading(true);
      apiFetch(`/api/v1/admin/redirections/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setRedirectionDetail(id, json?.data ?? null);
        })
        .finally(() => setLoading(false));
    }
  }, [id, redirection, setRedirectionDetail]);

  return { redirection, loading, refresh };
}
