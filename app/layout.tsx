import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PhishNet — AI-Powered Phishing Detection",
  description:
    "PhishNet combines Gemini AI with rule-based security checks to reveal phishing, manipulation, and hidden risk in emails, messages, and URLs.",
  keywords: ["phishing detection", "AI security", "URL analysis", "email security", "cybersecurity"],
  authors: [{ name: "PhishNet" }],
  openGraph: {
    title: "PhishNet — Know Before You Click",
    description:
      "Analyze suspicious emails, messages or URLs instantly. Hybrid AI + deterministic phishing detection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
