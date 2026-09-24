"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { useI18n } from "./Providers";

export function ContactForm() {
  const { copy } = useI18n();
  const form = copy.contact;
  const [done, setDone] = useState(false);
  const [fields, setFields] = useState({ first: "", last: "", email: "", message: "" });

  function submit(event: FormEvent) {
    event.preventDefault();
    const body = `${form.first}: ${fields.first}\n${form.last}: ${fields.last}\n${form.email}: ${fields.email}\n\n${fields.message}`;
    window.location.href = `mailto:info@prime-six.com?subject=${encodeURIComponent("Prime 6")}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  if (done) return <p className="text-2xl font-semibold uppercase">{form.thanks}</p>;

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Label text={form.first}>
          <input required value={fields.first} onChange={(event) => setFields({ ...fields, first: event.target.value })} className="field" />
        </Label>
        <Label text={form.last}>
          <input required value={fields.last} onChange={(event) => setFields({ ...fields, last: event.target.value })} className="field" />
        </Label>
      </div>
      <Label text={form.email}>
        <input required type="email" value={fields.email} onChange={(event) => setFields({ ...fields, email: event.target.value })} className="field" />
      </Label>
      <Label text={form.message}>
        <textarea required rows={5} value={fields.message} onChange={(event) => setFields({ ...fields, message: event.target.value })} className="field" />
      </Label>
      <button type="submit" className="justify-self-start bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white">
        {form.send}
      </button>
      <style>{`.field{margin-top:0.5rem;width:100%;border:1px solid var(--line);background:var(--bg);padding:0.75rem;font-size:0.875rem;font-weight:500;color:var(--fg);outline:none}.field:focus{border-color:var(--accent)}`}</style>
    </form>
  );
}

function Label({ text, children }: { text: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold uppercase tracking-widest">
      {text}
      {children}
    </label>
  );
}
