import type { Metadata } from "next";
import { DM_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PhishNet — AI-Powered Threat Defense",
  description:
    "PhishNet combines advanced AI reasoning with deterministic security engines to uncover phishing attempts before they reach you.",
  keywords: ["phishing detection", "AI security", "cybersecurity", "threat intelligence"],
  authors: [{ name: "PhishNet" }],
  openGraph: {
    title: "PhishNet — Detect the trap before it clicks",
    description:
      "Advanced AI reasoning and 8 security engines for real-time threat defense.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${rajdhani.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
