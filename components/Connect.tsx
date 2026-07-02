"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

const empty: Fields = { name: "", email: "", organization: "", message: "" };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Connect() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: Fields) {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please share your name.";
    if (!values.email.trim()) next.email = "Please share an email.";
    else if (!emailRe.test(values.email.trim()))
      next.email = "That email doesn't look right.";
    if (!values.message.trim()) next.message = "A few words, at least.";
    return next;
  }

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-0";

  return (
    <section id="connect" className="section bg-ink text-parchment">
      <div className="container-editorial">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Connect</p>
            <hr className="rule-gold mt-6" />
            <h2 className="mt-8 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Begin a conversation.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-parchment/70">
              We work with a small number of groups at a time. Tell us who you
              are and what you are trying to build.
            </p>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            {status === "success" ? (
              <div
                role="status"
                className="rounded-sm border border-gold/40 bg-parchment/[0.03] p-8"
              >
                <p className="font-serif text-2xl text-parchment">
                  Thank you — your note is with us.
                </p>
                <p className="mt-3 text-parchment/70">
                  We read every message and will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-gold transition-opacity hover:opacity-70"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-8">
                <Field
                  id="name"
                  label="Name"
                  value={fields.name}
                  onChange={(v) => update("name", v)}
                  error={errors.name}
                  className={inputClass}
                  autoComplete="name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={fields.email}
                  onChange={(v) => update("email", v)}
                  error={errors.email}
                  className={inputClass}
                  autoComplete="email"
                />
                <Field
                  id="organization"
                  label="Organization"
                  optional
                  value={fields.organization}
                  onChange={(v) => update("organization", v)}
                  error={errors.organization}
                  className={inputClass}
                  autoComplete="organization"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest2 text-parchment/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={fields.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-gold">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-3 border-b border-gold pb-1 font-sans text-base text-parchment transition-colors hover:text-gold disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send"}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                  {status === "error" && (
                    <p role="alert" className="text-sm text-gold">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  className,
  type = "text",
  optional = false,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  className: string;
  type?: string;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest2 text-parchment/60"
      >
        {label}
        {optional && <span className="ml-2 lowercase tracking-normal text-parchment/40">optional</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={className}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-gold">
          {error}
        </p>
      )}
    </div>
  );
}
