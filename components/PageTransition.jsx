'use client';

import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function PageTransition({ children }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeout;

    const handleStart = () => {
      clearTimeout(timeout);
      setShow(true);
      requestAnimationFrame(() => setActive(true));
    };

    const handleComplete = () => {
      setActive(false);
      timeout = setTimeout(() => setShow(false), 600);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {show && (
        <div
          className={`page-transition ${active ? 'animate-page-in' : 'animate-page-out'}`}
          aria-hidden="true"
        >
          <div className="page-transition-inner" />
        </div>
      )}
      {children}
    </>
  );
}
