"use client";
import { useEffect, useState } from 'react';
import { useApiCache } from '@/app/store/use-api-cache';

export function useCachedApi(key, fetcher) {
  const data = useApiCache((state) => state.getData(key));
  const setData = useApiCache((state) => state.setData);
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      setLoading(false);
      return;
    }
    let ignore = false;
    async function load() {
      try {
        const result = await fetcher();
        if (!ignore) {
          setData(key, result);
        }
      } catch (e) {
        if (!ignore) setError(e);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, [data, key, fetcher, setData]);

  return { data, loading, error };
}
