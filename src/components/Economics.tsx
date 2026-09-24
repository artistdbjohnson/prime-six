"use client";

import { useMemo, useState } from "react";
import { useI18n } from "./Providers";

const CEILING = 60;

export function Economics() {
  const { copy } = useI18n();
  const e = copy.economics;
  const [fuel, setFuel] = useState(0);
  const [weekly, setWeekly] = useState(100);
  const [hours, setHours] = useState(3);
  const [refills, setRefills] = useState(4);
  const [rate, setRate] = useState(CEILING);

  const result = useMemo(() => {
    const fraction = Math.min(rate, CEILING) / 100;
    return {
      lbs: Math.max(0, weekly * (1 - fraction)),
      refills: Math.max(0, refills * (1 - fraction)),
    };
  }, [rate, refills, weekly]);

  return (
    <section id={e.id} className="scroll-mt-16 bg-bg px-4 py-16 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-widest text-muted">{e.kicker}</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-semibold uppercase leading-tight md:text-5xl">{e.title}</h2>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="divide-y divide-[#1e1e1e] bg-[#0d0d0d] p-8 text-[#f7f4ef] lg:p-12">
            <fieldset className="pb-8">
              <legend className="text-lg font-semibold">{e.fuelQuestion}</legend>
              <div className="mt-5 grid gap-3">
                {e.fuels.map((label, index) => (
                  <label key={label} className="flex cursor-pointer items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${fuel === index ? "border-accent" : "border-[#f7f4ef]/40"}`}>
                      {fuel === index ? <span className="h-2 w-2 rounded-full bg-accent" /> : null}
                    </span>
                    <input className="sr-only" type="radio" name="fuel" checked={fuel === index} onChange={() => setFuel(index)} />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <Slider label={e.weekly} hint={e.weeklyHint} min={10} max={400} step={5} value={weekly} onChange={setWeekly} suffix=" LB" />
            <Slider label={e.hours} hint={e.hoursHint} min={1} max={12} step={1} value={hours} onChange={setHours} suffix=" h" />
            <Slider label={e.refills} hint={e.refillsHint} min={1} max={12} step={1} value={refills} onChange={setRefills} />
            <Slider label={e.ceiling} hint={e.ceilingHint} min={0} max={CEILING} step={1} value={rate} onChange={setRate} suffix="%" />
          </div>

          <div className="border border-white/10 bg-[#141210] p-8 text-[#f7f4ef] lg:rounded-r-2xl lg:p-12">
            <h3 className="text-2xl font-semibold uppercase tracking-wide">{e.estimate}</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-[#d9cfc4]">{e.estimateBody}</p>

            <div className="mt-8 space-y-3">
              <article className="rounded-2xl bg-[#241f1b] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#d9cfc4]">{e.traditional}</p>
                <p className="mt-3 text-4xl font-semibold">
                  {weekly}
                  <span className="ml-2 text-base text-accent">{e.lbs}</span>
                </p>
                <p className="mt-2 text-sm text-[#d9cfc4]">
                  {refills} {e.refillsUnit} · {hours} {e.hoursUnit}
                </p>
                <p className="mt-3 text-sm text-[#d9cfc4]">{e.traditionalSub}</p>
              </article>

              <article className="rounded-2xl bg-[#241f1b] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">{e.ceilingCard}</p>
                <p className="mt-3 text-4xl font-semibold text-accent">{rate}%</p>
                <p className="mt-3 text-sm text-[#d9cfc4]">{e.ceilingSub}</p>
              </article>

              <article className="rounded-2xl bg-accent p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest">{e.withPrime}</p>
                <p className="mt-3 text-5xl font-semibold">{result.lbs.toFixed(0)}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest">{e.lbs}</p>
                <p className="mt-3 text-sm">
                  {result.refills.toFixed(1)} {e.refillsUnit}
                </p>
                <p className="mt-3 text-sm">{e.withSub}</p>
              </article>
            </div>

            <div className="mt-8 space-y-3 text-sm font-medium leading-relaxed text-[#d9cfc4]">
              {fuel !== 1 ? <p>{e.equivalence}</p> : null}
              {fuel !== 0 ? <p>{e.woodNote}</p> : null}
              <p>{e.burnPublished}</p>
              <p>{e.smokerPublished}</p>
              <p>{e.noDollars}</p>
              {e.disclaimer.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  hint,
  min,
  max,
  step,
  value,
  onChange,
  suffix = "",
}: {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
}) {
  return (
    <div className="py-8">
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-2xl font-semibold text-accent">
          {value}
          {suffix}
        </p>
      </div>
      <input
        className="mt-5"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-[#d9cfc4]">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <p className="mt-3 text-sm font-medium leading-relaxed text-[#d9cfc4]">{hint}</p>
    </div>
  );
}
