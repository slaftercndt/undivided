import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * Placeholder implementation: validates input, logs it server-side, and
 * returns 200. No email is sent yet.
 *
 * TODO: wire up a real provider before launch. Two common options:
 *
 *   Resend (https://resend.com):
 *     import { Resend } from "resend";
 *     const resend = new Resend(process.env.RESEND_API_KEY);
 *     await resend.emails.send({
 *       from: "Undivided <hello@undivided.global>",
 *       to: process.env.CONTACT_TO_EMAIL!,
 *       subject: `New inquiry from ${name}`,
 *       text: `${name} <${email}> (${organization})\n\n${message}`,
 *     });
 *
 *   Formspree (https://formspree.io):
 *     await fetch(process.env.FORMSPREE_ENDPOINT!, {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify({ name, email, organization, message }),
 *     });
 *
 * Set the relevant secrets in Vercel → Project → Settings → Environment
 * Variables (see README).
 */

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  intent?: unknown;
  message?: unknown;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const organization = asString(body.organization);
  const intent = asString(body.intent);
  const message = asString(body.message);

  if (!name || !email || !message || !emailRe.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name, email, and message." },
      { status: 422 },
    );
  }

  // Placeholder: log the inquiry. Replace with a real provider (see TODO above).
  console.log("[contact] new inquiry", {
    name,
    email,
    organization: organization || "—",
    intent: intent || "General",
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
