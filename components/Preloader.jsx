'use client';

import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleComplete);
    }

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
      window.removeEventListener('load', handleComplete);
    };
  }, []);

  const show = loading;
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-white">
          <div className="border-[#000019] border-t-transparent border-4 rounded-full animate-spin h-16 w-16" />
        </div>
      )}
      {children}
    </>
  );
}
