import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://undivided.global";
const description =
  "Undivided is a global firm at the intersection of culture and economics — one undivided system. Grand strategy that turns economic innovation into cultural reformation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Undivided — Culture and economics, unified.",
    template: "%s — Undivided",
  },
  description,
  keywords: [
    "Undivided",
    "Nathan Slafter",
    "grand strategy",
    "culture and economics",
    "strategic operating process",
    "economic innovation",
    "cultural reformation",
    "The UP Movement",
    "Giver Army",
  ],
  authors: [{ name: "Undivided" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Undivided",
    title: "Undivided — Culture and economics, unified.",
    description,
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Undivided — culture and economics, unified.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undivided — Culture and economics, unified.",
    description,
    images: ["/opengraph-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1C2224",
  width: "device-width",
  initialScale: 1,
};

/**
 * JSON-LD: establishes undivided.global as the canonical center of the
 * Undivided / Nathan Slafter graph for search engines.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Undivided",
      url: siteUrl,
      description,
      founder: { "@id": `${siteUrl}/#founder` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: "Nathan Slafter",
      jobTitle: "Founder & Principal",
      worksFor: { "@id": `${siteUrl}/#organization` },
      affiliation: [
        { "@type": "Organization", name: "The UP Movement", url: "https://theupmovement.org" },
        { "@type": "Organization", name: "The Giver Army", url: "https://giver.army" },
        { "@type": "Organization", name: "GiveSendGo Charities", url: "https://givesendgo.org" },
        { "@type": "Organization", name: "Conduit Network", url: "https://cndt.io" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
