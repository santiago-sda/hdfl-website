import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Herbert Digital-First Lab | Miami Herbert Business School",
  description:
    "A digital-first student consulting lab connecting organizations with Miami Herbert students trained in AI engineering, data analytics, product design, and digital strategy — delivering production-ready solutions at no cost.",
  openGraph: {
    title: "Herbert Digital-First Lab | Miami Herbert Business School",
    description:
      "Where digital intelligence meets real business challenge. Free student consulting through Miami Herbert's ACE program.",
    siteName: "Herbert Digital-First Lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
