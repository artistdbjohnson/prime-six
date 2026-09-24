"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useI18n } from "./Providers";

export function SiteFooter() {
  const { copy } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  const links = [
    { href: "/why-prime-6", label: copy.nav.why },
    { href: "/about", label: copy.nav.about },
    { href: "/pro-chefs", label: copy.nav.chefs },
    { href: "/get-a-sample", label: copy.nav.sample },
    { href: "/shark-tank", label: copy.nav.news },
    { href: "/sustainability", label: copy.nav.sustainability },
    { href: "/contact", label: copy.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-bg px-5 py-14 sm:px-8 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em]">{copy.chrome.footerNote}</p>
          <img src="/media/logo.png" alt="Prime 6" className="mt-4 h-9 w-auto" />
          <p className="mt-6 text-sm font-medium text-muted">{copy.contact.company}</p>
          {copy.contact.address.map((line) => (
            <p key={line} className="text-sm font-medium text-muted">
              {line}
            </p>
          ))}
          <a className="mt-3 block text-sm font-semibold text-fg" href={`tel:${copy.contact.phone}`}>
            {copy.contact.phone}
          </a>
          <a className="mt-2 block text-sm font-semibold text-accent" href="mailto:info@prime-six.com">
            info@prime-six.com
          </a>
          <a
            className="mt-2 block text-sm font-semibold uppercase tracking-widest"
            href="https://www.instagram.com/prime6charcoal/"
            target="_blank"
            rel="noreferrer"
          >
            @prime6charcoal
          </a>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Footer">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold uppercase tracking-widest">
              {item.label}
            </Link>
          ))}
          <a className="text-sm font-semibold uppercase tracking-widest" href="https://www.prime6.com" target="_blank" rel="noreferrer">
            {copy.nav.biochar}
          </a>
        </nav>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">{copy.chrome.stayInTouch}</p>
          {done ? (
            <p className="mt-4 text-sm font-semibold">{copy.chrome.subscribeThanks}</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-4 flex gap-2">
              <label className="sr-only" htmlFor="footer-email">
                {copy.sampleForm.email}
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.chrome.emailPlaceholder}
                className="min-w-0 w-full border border-line bg-card px-3 py-3 text-sm text-fg outline-none focus:border-accent"
              />
              <button type="submit" className="shrink-0 bg-ink px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-paper">
                {copy.chrome.subscribe}
              </button>
            </form>
          )}
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-widest text-muted">{copy.chrome.join}</p>
          <a
            href="https://forms.monday.com/forms/7c0ed14f1db6bc12bff5d2c5d6d71d62?r=use1"
            className="mt-2 inline-flex text-sm font-semibold uppercase tracking-widest text-accent"
            target="_blank"
            rel="noreferrer"
          >
            {copy.chrome.apply}
          </a>
          <img id="avendra" src="/media/avendra.png" alt="Avendra approved" className="mt-8 h-10 w-auto" />
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        <a href="https://www.douglxss.com/" className="text-sm font-semibold uppercase tracking-widest text-accent">
          {copy.chrome.builtBy}
        </a>
        <a href="https://www.instagram.com/prime6charcoal/" className="text-xs font-semibold uppercase tracking-widest text-muted" target="_blank" rel="noreferrer">
          Drool with us on IG
        </a>
      </div>
    </footer>
  );
}
