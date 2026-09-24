"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { useI18n } from "./Providers";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: EASE },
  }),
};

function useEmberReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (document.documentElement.classList.contains("skip-ignition")) {
      setReady(true);
      return;
    }
    const go = () => setReady(true);
    window.addEventListener("p6-ember-done", go);
    const fallback = window.setTimeout(go, 1800);
    return () => {
      window.removeEventListener("p6-ember-done", go);
      window.clearTimeout(fallback);
    };
  }, []);
  return ready;
}

export function Hero() {
  const { copy } = useI18n();
  const ready = useEmberReady();
  const reduce = useReducedMotion();
  const play = ready && !reduce;

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-[#f7f4ef]">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80" />

      <SiteHeader tone="hero" />

      <div className="relative z-10 flex flex-1 items-center justify-end px-5 py-8 sm:px-8 md:px-12 md:py-0">
        <div className="flex flex-wrap items-start justify-end gap-5 sm:gap-8 md:gap-10">
          {copy.hero.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-right"
              initial={play ? "hidden" : false}
              animate={ready ? "visible" : "hidden"}
              custom={index + 2}
              variants={fadeUp}
            >
              <p className="font-semibold leading-none text-[#f7f4ef]" style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}>
                {stat.kicker ? (
                  <span className="mr-1 align-top text-[0.38em] font-semibold tracking-widest text-accent">{stat.kicker} </span>
                ) : null}
                {stat.value}
                {stat.unit ? <span className="text-[0.45em] text-accent">{stat.unit}</span> : null}
              </p>
              <p className="mt-1 whitespace-pre-line text-[10px] font-semibold uppercase leading-tight tracking-widest sm:text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 px-5 pb-8 sm:px-8 md:gap-12 md:px-12 md:pb-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <motion.p
            className="max-w-[130px] text-[10px] font-semibold uppercase tracking-widest sm:max-w-[160px] sm:text-xs md:max-w-xs md:text-sm"
            initial={play ? "hidden" : false}
            animate={ready ? "visible" : "hidden"}
            custom={5}
            variants={fadeUp}
          >
            {copy.hero.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>
          <motion.div initial={play ? "hidden" : false} animate={ready ? "visible" : "hidden"} custom={6} variants={fadeUp}>
            <Link
              href="/get-a-sample"
              className="inline-flex max-w-full items-center gap-1 text-sm font-semibold uppercase leading-tight tracking-wide text-accent sm:gap-2 sm:text-xl md:text-2xl md:tracking-widest"
            >
              {copy.hero.cta}
              <ArrowUpRight className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
          <motion.div
            className="w-full shrink-0 lg:w-[280px]"
            initial={play ? "hidden" : false}
            animate={ready ? "visible" : "hidden"}
            custom={7}
            variants={fadeUp}
          >
            <p className="text-left text-[10px] font-semibold uppercase tracking-widest sm:text-xs lg:text-right lg:text-sm">
              {copy.hero.description}
            </p>
          </motion.div>
          <h1
            className="text-right font-semibold uppercase text-[#f7f4ef]"
            style={{ fontSize: "clamp(1.65rem, 7.4vw, 8.5rem)", lineHeight: 0.88 }}
          >
            {copy.hero.heading.map((word, index) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={ready ? { y: 0 } : { y: "110%" }}
                  transition={{ delay: play ? 0.4 + index * 0.14 : 0, duration: play ? 0.7 : 0, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
