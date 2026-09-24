"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { PageIntro } from "./PageIntro";
import { SampleBand } from "./HomeSections";
import { SampleForm } from "./SampleForm";
import { useI18n } from "./Providers";

export function WhyPage() {
  const { copy } = useI18n();
  return (
    <>
      <PageIntro kicker={copy.nav.why} title={copy.whyHome.title} dek={copy.meta.whyDescription} />
      <div className="mx-auto max-w-3xl space-y-14 px-5 py-14 sm:px-8 md:py-20">
        {copy.whyPage.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-3xl font-semibold uppercase leading-none md:text-4xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed md:text-base">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <section>
          <h2 className="text-3xl font-semibold uppercase leading-none">{copy.woodCompare.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ul className="space-y-3 border border-line bg-card p-5 text-sm font-medium leading-relaxed">
              {copy.woodCompare.without.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="space-y-3 border border-line bg-ink p-5 text-sm font-medium leading-relaxed text-paper">
              <li className="text-[10px] font-semibold uppercase tracking-widest text-accent">{copy.woodCompare.withTitle}</li>
              {copy.woodCompare.with.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <img src="/media/waste.png" alt="Waste in lump charcoal" className="mt-6 w-full" />
        </section>
        <section>
          <h2 className="text-3xl font-semibold uppercase leading-none">{copy.whyClose.title}</h2>
          <ul className="mt-6 space-y-3">
            {copy.costList.map((item) => (
              <li key={item} className="border-b border-line py-3 text-sm font-semibold uppercase tracking-wide">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-medium leading-relaxed">{copy.whyClose.bottom}</p>
          <Link href="/#calculator" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            {copy.economics.title}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
}

export function AboutPage() {
  const { copy, lang } = useI18n();
  const about = copy.about;
  return (
    <>
      <PageIntro kicker={about.kicker} title={about.title} />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
        <blockquote className="border-l-4 border-accent pl-5">
          <p className="text-xl font-semibold leading-snug md:text-2xl">“{about.quote}”</p>
          <footer className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted">— {about.quoteBy}</footer>
        </blockquote>
        <div id="usda" className="mt-12 space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm font-medium leading-relaxed md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
        <div id="veritree" className="mt-12">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">{about.partnership}</p>
          <img src="/media/veritree.png" alt="veritree" className="mt-4 h-12 w-auto" />
          <h2 className="mt-8 text-3xl font-semibold uppercase">{about.impactTitle}</h2>
          {about.impact.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed">
              {paragraph}
            </p>
          ))}
          <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent" href="https://impact.veritree.com/prime6" target="_blank" rel="noreferrer">
            {about.visit}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        {about.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-12">
            <h2 className="text-3xl font-semibold uppercase leading-none">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-4 space-y-3 text-sm font-medium leading-relaxed">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <a className="mt-4 inline-flex text-sm font-semibold uppercase tracking-widest text-accent" href="https://impact.veritree.com/prime6" target="_blank" rel="noreferrer">
              {about.visit}
            </a>
          </section>
        ))}
        <p className="mt-12 text-sm font-medium leading-relaxed">{about.close}</p>
        <p className="mt-6 text-lg font-semibold uppercase tracking-wide">{about.save}</p>
        <Link href="/get-a-sample" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
          {lang === "pt" ? "Pedir amostra" : "Get Sample"}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}

export function GrillersPage() {
  const { copy } = useI18n();
  const page = copy.grillers;
  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} dek={page.paragraphs[0]} />
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
        {page.paragraphs.slice(1).map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed md:text-base">
            {paragraph}
          </p>
        ))}
        <h2 className="mt-12 text-3xl font-semibold uppercase leading-none">{page.masters}</h2>
        {page.mastersBody.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed">
            {paragraph}
          </p>
        ))}
        <div className="mt-12 grid gap-8">
          {page.products.map((product) => (
            <article key={product.title} className="grid items-center gap-6 border border-line bg-card p-5 md:grid-cols-[240px_1fr] md:p-8">
              <img src={product.image} alt={product.alt} className="mx-auto max-h-64 w-full object-contain" />
              <div>
                <h3 className="text-2xl font-semibold uppercase">{product.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">{product.blurb}</p>
                {product.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm font-medium leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-muted">{product.orderLabel}</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  {product.retailers.map((retailer) => (
                    <a key={retailer.href} href={retailer.href} className="text-sm font-semibold uppercase tracking-widest text-accent" target="_blank" rel="noreferrer">
                      {retailer.name}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export function ChefsPage() {
  const { copy } = useI18n();
  const page = copy.pro;
  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} dek={page.intro} />
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <img src="/media/pizza.jpg" alt="pizza closeup.jpg" className="w-full object-cover" />
          <div>
            <h2 className="text-3xl font-semibold uppercase">{page.frameTitle}</h2>
            {page.frame.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <h2 className="mt-14 text-3xl font-semibold uppercase">{page.embersTitle}</h2>
        {page.embers.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed">
            {paragraph}
          </p>
        ))}
        <p className="mt-10 text-[10px] font-semibold uppercase tracking-widest text-accent">{page.closer}</p>
        <h2 className="mt-3 text-3xl font-semibold uppercase">{page.pizzaTitle}</h2>
        {page.pizza.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed">
            {paragraph}
          </p>
        ))}
        <p className="mt-12 text-2xl font-semibold uppercase">{page.anywhere}</p>
      </div>
      <SampleBand />
    </>
  );
}

export function SamplePage() {
  const { copy, lang } = useI18n();
  return (
    <>
      <PageIntro kicker={copy.sampleForm.kicker} title={copy.sampleForm.title} dek={copy.sampleBand.body} />
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
        <SampleForm key={lang} />
      </div>
    </>
  );
}

export function TerryPage() {
  const { copy } = useI18n();
  return (
    <>
      <PageIntro kicker={copy.terry.kicker} title={copy.terry.title} dek={copy.terry.lead} />
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[280px_1fr] md:py-20">
        <img src="/media/lifestyle.jpg" alt="Chef Terry Koval" className="w-full object-cover" />
        <div>
          {copy.terry.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 text-sm font-medium leading-relaxed first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export function NewsPage() {
  const { copy } = useI18n();
  return (
    <>
      <PageIntro kicker={copy.news.kicker} title={copy.news.title} dek={copy.news.lead} />
      <ul className="mx-auto grid max-w-5xl gap-4 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
        {copy.news.videos.map((video) => (
          <li key={video.title}>
            <a href="https://www.prime-six.com/shark-tank" className="block border border-line bg-card p-6" target="_blank" rel="noreferrer">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{video.time}</p>
              <h2 className="mt-3 text-2xl font-semibold uppercase">{video.title}</h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest">{copy.news.source}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export function SustainPage() {
  const { copy } = useI18n();
  return (
    <>
      <PageIntro kicker={copy.sustain.kicker} title={copy.sustain.title} dek={copy.sustain.prompt} />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
        <p className="text-sm font-medium leading-relaxed">{copy.sustain.disclaimer}</p>
        <div className="mt-8 flex flex-col gap-4">
          <a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent" href="https://impact.veritree.com/prime6" target="_blank" rel="noreferrer">
            {copy.sustain.hub}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent" href="https://www.prime-six.com/sustainability-dashboard" target="_blank" rel="noreferrer">
            {copy.sustain.live}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <img src="/media/veritree.png" alt="veritree" className="mt-10 h-12 w-auto" />
      </div>
    </>
  );
}

export function ContactPage() {
  const { copy } = useI18n();
  return (
    <>
      <PageIntro kicker={copy.contact.kicker} title={copy.contact.title} dek={copy.contact.lead} />
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
        <ContactForm />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">{copy.contact.company}</p>
          {copy.contact.address.map((line) => (
            <p key={line} className="mt-2 text-sm font-medium">
              {line}
            </p>
          ))}
          <a className="mt-4 block text-sm font-semibold" href={`tel:${copy.contact.phone}`}>
            {copy.contact.phoneLabel} {copy.contact.phone}
          </a>
          <a className="mt-2 block text-sm font-semibold text-accent" href="mailto:info@prime-six.com">
            info@prime-six.com
          </a>
        </div>
      </div>
    </>
  );
}
