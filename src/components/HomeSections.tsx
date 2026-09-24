"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "./Providers";

export function WhyExcerpt() {
  const { copy } = useI18n();
  const block = copy.whyHome;
  return (
    <section id="why" className="border-b border-line px-5 py-16 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{block.kicker}</p>
          <h2 className="mt-3 text-4xl font-semibold uppercase leading-none md:text-6xl">{block.title}</h2>
        </div>
        <div>
          <p className="text-lg font-semibold uppercase tracking-wide">{block.lead}</p>
          {block.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed md:text-base">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-sm font-medium leading-relaxed text-muted">{block.mission}</p>
          <Link href="/why-prime-6" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            {block.link}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Audiences() {
  const { copy } = useI18n();
  const block = copy.audiences;
  return (
    <section className="border-b border-line px-5 py-16 sm:px-8 md:px-12 md:py-28">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{block.kicker}</p>
      <h2 className="mt-3 text-4xl font-semibold uppercase leading-none md:text-6xl">{block.title}</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="/pro-chefs" className="block border border-line bg-card p-6 md:p-10">
          <h3 className="text-2xl font-semibold uppercase tracking-wide">{block.hospitality}</h3>
          <p className="mt-4 text-sm font-medium leading-relaxed">{block.hospitalityBody}</p>
        </Link>
        <Link href="/home-grillers" className="block border border-line bg-ink p-6 text-paper md:p-10">
          <h3 className="text-2xl font-semibold uppercase tracking-wide">{block.pit}</h3>
          <p className="mt-4 text-sm font-medium leading-relaxed text-paper/80">{block.pitBody}</p>
        </Link>
      </div>
    </section>
  );
}

export function Chefs() {
  const { copy } = useI18n();
  const block = copy.chefsBlock;
  return (
    <section id="chefs" className="border-b border-line px-5 py-16 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <img src="/media/hearth.jpg" alt="" className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{block.kicker}</p>
          <h2 className="mt-3 text-3xl font-semibold uppercase leading-none md:text-5xl">{block.terryName}</h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest">{block.terryAward}</p>
          <p className="mt-1 text-sm font-medium text-muted">{block.terryRole}</p>
          <p className="mt-4 text-sm font-medium leading-relaxed md:text-base">{block.terryBody}</p>
          <Link href="/terry-koval" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            {block.interview}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <h3 className="mx-auto mt-16 max-w-6xl text-sm font-semibold uppercase tracking-widest text-muted">{block.pros}</h3>
      <ul className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {block.chefs.map((chef) => (
          <li key={chef.name} className="border border-line bg-card">
            <img src={chef.image} alt={chef.alt} className="aspect-[3/4] w-full object-cover" />
            <p className="p-3 text-xs font-semibold uppercase tracking-wide">{chef.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SampleBand() {
  const { copy } = useI18n();
  return (
    <section className="bg-ink px-5 py-16 text-paper sm:px-8 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-semibold uppercase leading-none md:text-6xl">{copy.sampleBand.title}</h2>
          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-paper/80">{copy.sampleBand.body}</p>
        </div>
        <Link href="/get-a-sample" className="inline-flex items-center gap-2 text-xl font-semibold uppercase tracking-widest text-accent md:text-2xl">
          {copy.sampleBand.cta}
          <ArrowUpRight className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
