"use client";

export function PageIntro({ kicker, title, dek }: { kicker: string; title: string; dek?: string }) {
  return (
    <header className="border-b border-line px-5 py-14 sm:px-8 md:px-12 md:py-20">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{kicker}</p>
      <h1 className="mt-4 max-w-5xl text-[clamp(2.4rem,7vw,5.5rem)] font-semibold uppercase leading-[0.9]">{title}</h1>
      {dek ? <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-muted md:text-base">{dek}</p> : null}
    </header>
  );
}
