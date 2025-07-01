"use client";
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/app/nprogress.css";

export default function PageProgress() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    const start = () => NProgress.start();
    const done = () => NProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", done);
    Router.events.on("routeChangeError", done);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", done);
      Router.events.off("routeChangeError", done);
    };
  }, []);

  return null;
}
