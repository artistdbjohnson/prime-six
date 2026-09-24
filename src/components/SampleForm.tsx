"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "./Providers";

export function SampleForm() {
  const { copy } = useI18n();
  const form = copy.sampleForm;
  const [step, setStep] = useState<1 | 2>(1);
  const [eligible, setEligible] = useState<"yes" | "no" | "">("");
  const [equipment, setEquipment] = useState(form.equipmentOptions[0]);
  const [fuel, setFuel] = useState(form.fuels[0]);
  const [sample, setSample] = useState(form.samples[0]);
  const [fields, setFields] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    restaurant: "",
    url: "",
    address: "",
    d1: "",
    d2: "",
    d3: "",
  });
  const [done, setDone] = useState(false);

  function set<K extends keyof typeof fields>(key: K, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const body = [
      `${form.eligibleQ}: ${form.eligibleYes}`,
      `${form.equipment}: ${equipment}`,
      `${form.fuelsQ}: ${fuel}`,
      `${form.samplesQ}: ${sample}`,
      `${form.first}: ${fields.first}`,
      `${form.last}: ${fields.last}`,
      `${form.email}: ${fields.email}`,
      `${form.phone}: ${fields.phone}`,
      `${form.restaurant}: ${fields.restaurant}`,
      `${form.url}: ${fields.url}`,
      `${form.address}: ${fields.address}`,
      `${form.distributors}: ${fields.d1}; ${fields.d2}; ${fields.d3}`,
    ].join("\n");
    window.location.href = `mailto:info@prime-six.com?subject=${encodeURIComponent("FREE Sample")}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-line bg-card p-8">
        <h2 className="text-3xl font-semibold uppercase">{form.thanks}</h2>
        <div className="mt-6 space-y-3 text-sm font-medium leading-relaxed">
          {form.next.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-line bg-card p-5 sm:p-8">
      <ol className="flex gap-6 text-[10px] font-semibold uppercase tracking-widest">
        {form.steps.map((label, index) => (
          <li key={label} className={step === index + 1 ? "text-accent" : "text-muted"}>
            0{index + 1} {label}
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <div className="mt-8 space-y-8">
          <fieldset>
            <legend className="text-lg font-semibold">{form.eligibleQ}</legend>
            <div className="mt-4 grid gap-3">
              <Radio name="eligible" checked={eligible === "yes"} onChange={() => setEligible("yes")} label={form.eligibleYes} />
              <Radio name="eligible" checked={eligible === "no"} onChange={() => setEligible("no")} label={form.eligibleNo} />
            </div>
            {eligible === "no" ? <p className="mt-4 text-sm font-semibold text-accent">{form.blocked}</p> : null}
          </fieldset>
          <Select label={form.equipment} value={equipment} options={form.equipmentOptions} onChange={setEquipment} />
          <Select label={form.fuelsQ} value={fuel} options={form.fuels} onChange={setFuel} />
          <Select label={form.samplesQ} value={sample} options={form.samples} onChange={setSample} />
          <button
            type="button"
            disabled={eligible !== "yes"}
            onClick={() => setStep(2)}
            className="bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-widest text-paper disabled:opacity-40"
          >
            {form.continue}
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={form.first} value={fields.first} onChange={(value) => set("first", value)} required />
              <Field label={form.last} value={fields.last} onChange={(value) => set("last", value)} required />
            </div>
            <Field label={form.email} type="email" value={fields.email} onChange={(value) => set("email", value)} required />
            <Field label={form.phone} type="tel" value={fields.phone} onChange={(value) => set("phone", value)} required />
            <Field label={form.restaurant} value={fields.restaurant} onChange={(value) => set("restaurant", value)} required />
            <Field label={form.url} type="url" value={fields.url} onChange={(value) => set("url", value)} required />
            <Field label={form.address} value={fields.address} onChange={(value) => set("address", value)} required />
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-widest">
                {form.distributors} <span className="text-accent">*</span>
              </legend>
              <div className="mt-3 grid gap-3">
                <Field label={form.distributors} hideLabel placeholder={form.distributorPlaceholders[0]} value={fields.d1} onChange={(value) => set("d1", value)} required />
                <Field label={form.distributors} hideLabel placeholder={form.distributorPlaceholders[1]} value={fields.d2} onChange={(value) => set("d2", value)} required />
                <Field label={form.distributors} hideLabel placeholder={form.distributorPlaceholders[2]} value={fields.d3} onChange={(value) => set("d3", value)} required />
              </div>
            </fieldset>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setStep(1)} className="border border-line px-6 py-3 text-sm font-semibold uppercase tracking-widest">
                {form.back}
              </button>
              <button type="submit" className="bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white">
                {form.submit}
              </button>
            </div>
          </div>
          <aside className="border-l-4 border-accent bg-bg p-5">
            <h2 className="text-sm font-semibold uppercase tracking-widest">{form.nextTitle}</h2>
            <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed">
              {form.next.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </aside>
        </div>
      )}
    </form>
  );
}

function Radio({ name, checked, onChange, label }: { name: string; checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm font-semibold">
      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${checked ? "border-accent" : "border-fg/40"}`}>
        {checked ? <span className="h-2 w-2 rounded-full bg-accent" /> : null}
      </span>
      <input className="sr-only" type="radio" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm font-semibold uppercase tracking-widest">
      {label}
      <select
        className="mt-2 w-full border border-line bg-bg px-3 py-3 text-sm font-medium normal-case tracking-normal text-fg outline-none focus:border-accent"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  hideLabel,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  hideLabel?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold uppercase tracking-widest">
      <span className={hideLabel ? "sr-only" : ""}>
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        className="mt-2 w-full border border-line bg-bg px-3 py-3 text-sm font-medium normal-case tracking-normal text-fg outline-none focus:border-accent"
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
