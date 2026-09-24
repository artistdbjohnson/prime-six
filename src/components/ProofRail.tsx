"use client";

import Link from "next/link";
import { useI18n } from "./Providers";

export function ProofRail() {
  const { copy } = useI18n();
  return (
    <section aria-label="Credibility" className="sticky top-0 z-30 border-b border-line bg-bg">
      <ul className="flex flex-wrap gap-2 px-5 py-3 sm:px-8 md:px-12">
        {copy.proof.map((item) => {
          const className =
            "inline-flex max-w-full flex-wrap items-center gap-2 border border-line bg-card px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-fg sm:text-xs";
          const inner = (
            <>
              {item.label === "Avendra" ? <img src="/media/avendra.png" alt="" className="h-4 w-auto" /> : null}
              <span>{item.label}</span>
              <span className="hidden font-medium normal-case tracking-normal text-muted sm:inline">{item.detail}</span>
            </>
          );
          return (
            <li key={item.label}>
              {item.external ? (
                <a href={item.href} className={className} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <Link href={item.href} className={className}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
