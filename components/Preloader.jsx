'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader({ children }) {
  const pathname = usePathname();
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

  // Initial load
  useEffect(() => {
    const timeout = setTimeout(() => setInitialLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  // Route change
  useEffect(() => {
    if (!initialLoading) {
      setRouteLoading(true);
      const timeout = setTimeout(() => setRouteLoading(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [pathname, initialLoading]);

  const show = initialLoading || routeLoading;
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-white transition-opacity">
          <div
            className={`border-[#000019] border-t-transparent border-4 rounded-full animate-spin ${initialLoading ? 'h-16 w-16' : 'h-12 w-12'}`}
          />
        </div>
      )}
      {children}
    </>
  );
}
