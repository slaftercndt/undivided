"use client";

import { useState, type FormEvent } from "react";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Dispatches — quiet email capture in the footer. Posts to the same
 * placeholder /api/contact route with intent "Dispatches".
 * TODO: point at a real ESP (Resend Audiences, ConvertKit, Mailchimp)
 * when the contact handler is wired.
 */
export function Dispatches() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRe.test(email.trim())) {
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Dispatch subscriber",
          email: email.trim(),
          intent: "Dispatches",
          message: "Subscribe to dispatches.",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setState("done");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="text-sm text-stone">
        You&apos;re on the list — dispatches will find you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-sm">
      <label
        htmlFor="dispatch-email"
        className="block text-xs uppercase tracking-widest2 text-gold"
      >
        Receive dispatches
      </label>
      <div className="mt-3 flex items-end gap-4">
        <input
          id="dispatch-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="you@organization.org"
          autoComplete="email"
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? "dispatch-error" : undefined}
          className="w-full border-0 border-b border-ink/20 bg-transparent px-0 py-2 font-sans text-sm text-ink placeholder:text-stone/50 focus:border-gold focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="whitespace-nowrap border-b border-gold pb-2 text-sm text-ink transition-colors hover:text-gold disabled:opacity-60"
        >
          {state === "sending" ? "Joining…" : "Join"}
        </button>
      </div>
      {state === "error" && (
        <p id="dispatch-error" className="mt-2 text-sm text-gold">
          Please enter a valid email.
        </p>
      )}
    </form>
  );
}
