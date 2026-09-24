"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "./Providers";

export function BurnStory() {
  const { copy } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const index = useTransform(scrollYProgress, [0, 0.34, 0.67, 1], [0, 1, 2, 2]);

  if (reduce) {
    return (
      <section id="story" className="border-b border-line px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{copy.burn.kicker}</p>
        <h2 className="mt-3 text-3xl font-semibold uppercase tracking-wide md:text-5xl">{copy.burn.title}</h2>
        <div className="mt-10 grid gap-8">
          {copy.burn.beats.map((beat) => (
            <article key={beat.title} className="grid items-center gap-6 border border-line bg-card p-5 md:grid-cols-2 md:p-8">
              <img src={beat.image} alt={beat.alt} className="aspect-[4/3] w-full object-cover" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {beat.label} {beat.title}
                </p>
                {beat.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm font-medium leading-relaxed text-fg md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="story" ref={ref} className="relative h-[300vh] border-b border-line">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 md:px-12">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">{copy.burn.kicker}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold uppercase leading-none tracking-wide md:text-6xl">{copy.burn.title}</h2>
        <div className="mt-6 h-1 w-full max-w-xs bg-line">
          <motion.div className="h-full origin-left bg-accent" style={{ scaleX: scrollYProgress }} />
        </div>
        <div className="relative mt-6 min-h-0 flex-1">
          {copy.burn.beats.map((beat, beatIndex) => (
            <Beat key={beat.title} beat={beat} beatIndex={beatIndex} progress={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Beat({
  beat,
  beatIndex,
  progress,
}: {
  beat: { label: string; title: string; body: string[]; image: string; alt: string };
  beatIndex: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const opacity = useTransform(progress, (value) => (Math.round(value) === beatIndex ? 1 : 0));
  return (
    <motion.article style={{ opacity }} className="absolute inset-0 grid items-center gap-6 md:grid-cols-2">
      <img src={beat.image} alt={beat.alt} className="max-h-[34svh] w-full object-cover md:max-h-[58svh]" />
      <div className="min-w-0 overflow-y-auto md:max-h-[58svh]">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
          {beat.label} — {beat.title}
        </p>
        {beat.body.map((paragraph) => (
          <p key={paragraph} className="mt-3 text-sm font-medium leading-relaxed md:mt-4 md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.article>
  );
}
