import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
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
    "grand strategy",
    "culture and economics",
    "strategic operating process",
    "economic innovation",
    "cultural reformation",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
