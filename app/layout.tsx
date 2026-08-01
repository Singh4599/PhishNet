import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA_AI — Today AI Aligns With Bold Dreams",
  description: "We design automation that brings clarity, precision, and efficiency to the way your company operates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
