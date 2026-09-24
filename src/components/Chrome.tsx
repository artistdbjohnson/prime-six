"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function Chrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-card focus:px-3 focus:py-2">
        Skip to content
      </a>
      {pathname !== "/" ? <SiteHeader tone="solid" /> : null}
      <main id="content">{children}</main>
      <SiteFooter />
    </>
  );
}
