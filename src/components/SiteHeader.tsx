"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "./Providers";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: EASE },
  }),
};

type Tone = "hero" | "solid";

export function SiteHeader({ tone = "solid" }: { tone?: Tone }) {
  const { copy, lang, setLang, theme, toggleTheme } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hero = tone === "hero";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const center = [
    { href: "/home-grillers", label: copy.nav.grillers },
    { href: "/why-prime-6", label: copy.nav.why },
    { href: "/pro-chefs", label: copy.nav.chefs },
    { href: "/about", label: copy.nav.about },
  ];

  const menu: { href: string; label: string; external?: boolean }[] = [
    { href: "/", label: copy.nav.home },
    ...center,
    { href: "https://www.prime6.com", label: copy.nav.biochar, external: true },
    { href: "/get-a-sample", label: copy.nav.sample },
    { href: "/shark-tank", label: copy.nav.news },
    { href: "/sustainability", label: copy.nav.sustainability },
    { href: "/contact", label: copy.nav.contact },
  ];

  const linkClass = hero
    ? "text-sm font-semibold uppercase tracking-widest text-[#f7f4ef]"
    : "text-sm font-semibold uppercase tracking-widest text-fg";

  return (
    <>
      <header
        className={
          hero
            ? "relative z-10 flex items-center justify-between gap-3 px-5 pt-5 sm:px-8 md:px-12 md:pt-6"
            : "sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-line bg-bg px-5 py-4 sm:px-8 md:px-12"
        }
      >
        <motion.div initial={hero ? "hidden" : false} animate="visible" custom={0} variants={fadeDown}>
          <Link href="/" aria-label="Prime 6" className="block shrink-0">
            <img src="/media/logo.png" alt="Prime 6" className="h-8 w-auto sm:h-9" />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {center.map((item, index) => (
            <motion.div key={item.href} initial={hero ? "hidden" : false} animate="visible" custom={index + 1} variants={fadeDown}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest ${hero ? "text-[#f7f4ef]" : "text-fg"}`}>
            <button type="button" onClick={() => setLang("en")} aria-pressed={lang === "en"} className={lang === "en" ? "text-accent" : ""}>
              EN
            </button>
            <span aria-hidden="true">|</span>
            <button type="button" onClick={() => setLang("pt")} aria-pressed={lang === "pt"} className={lang === "pt" ? "text-accent" : ""}>
              PT
            </button>
            <button type="button" onClick={toggleTheme} className="ml-1 inline-flex h-8 w-8 items-center justify-center" aria-label={theme === "dark" ? copy.chrome.light : copy.chrome.dark}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <motion.button
            type="button"
            initial={hero ? "hidden" : false}
            animate="visible"
            custom={5}
            variants={fadeDown}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full bg-ink"
            aria-label={copy.chrome.openMenu}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="h-0.5 w-4 bg-paper" />
            <span className="h-0.5 w-4 bg-paper" />
            <span className="h-0.5 w-4 bg-paper" />
          </motion.button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg px-5 pb-8 pt-5 sm:px-8 md:px-12 md:pt-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} aria-label="Prime 6">
              <img src="/media/logo.png" alt="Prime 6" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper"
              aria-label={copy.chrome.closeMenu}
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-5 overflow-y-auto" aria-label="Menu">
            {menu.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="max-w-full text-xl font-semibold uppercase leading-tight tracking-wide text-fg sm:text-3xl sm:tracking-widest"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="max-w-full text-xl font-semibold uppercase leading-tight tracking-wide text-fg sm:text-3xl sm:tracking-widest"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link
            href="/get-a-sample"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center gap-2 pt-8 text-xl font-semibold uppercase tracking-widest text-accent"
          >
            {copy.chrome.sampleCta}
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      ) : null}
    </>
  );
}
