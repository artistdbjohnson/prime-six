"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "./Providers";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProofRail() {
  const { copy } = useI18n();
  const reduce = useReducedMotion();
  return (
    <section aria-label="Credibility" className="relative sticky top-0 z-30 border-b border-line bg-bg">
      {reduce ? null : (
        <motion.span
          aria-hidden="true"
          className="proof-rule pointer-events-none absolute bottom-0 left-0 z-[1] h-px w-full bg-accent"
          style={{ originX: 0 }}
          initial={{ scaleX: 0, opacity: 1 }}
          whileInView={{ scaleX: 1, opacity: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{
            scaleX: { duration: 0.64, ease: EASE },
            opacity: { duration: 0.24, delay: 0.64, ease: EASE },
          }}
        />
      )}
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
