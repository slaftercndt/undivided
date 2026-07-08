import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form handler — Resend-ready.
 *
 * With env vars set (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY     — from https://resend.com (verify the sending domain)
 *   CONTACT_TO_EMAIL   — where inquiries land (e.g. hello@undivided.global)
 *   CONTACT_FROM_EMAIL — optional; defaults to onboarding@resend.dev, which
 *                        works before undivided.global is verified in Resend
 *
 * ...inquiries are emailed. Without them, the handler logs and returns 200
 * so the form keeps working in development.
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
  const intent = asString(body.intent) || "General";
  const message = asString(body.message);

  if (!name || !email || !message || !emailRe.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name, email, and message." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (apiKey && to) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "Undivided <onboarding@resend.dev>",
        to,
        replyTo: email,
        subject: `[${intent}] Inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || "—"}`,
          `Intent: ${intent}`,
          "",
          message,
        ].join("\n"),
      });
      if (error) throw new Error(error.message);
    } catch (err) {
      console.error("[contact] send failed", err);
      return NextResponse.json(
        { ok: false, error: "Delivery failed. Please try again." },
        { status: 502 },
      );
    }
  } else {
    // Dev / unconfigured fallback: log only.
    console.log("[contact] new inquiry (email not configured)", {
      name,
      email,
      organization: organization || "—",
      intent,
      message,
      at: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
