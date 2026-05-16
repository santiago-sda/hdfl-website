import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Herbert Digital-First Lab | Miami Herbert Business School",
  description:
    "Where Digital Intelligence Meets Real Business Challenge. A digital-first student consulting lab inside Miami Herbert delivering AI systems, dashboards, and product prototypes — free to qualifying partner organizations through the ACE framework.",
  openGraph: {
    title: "Herbert Digital-First Lab | Miami Herbert Business School",
    description:
      "Where digital meets the real world. Free student consulting through Miami Herbert's ACE program.",
    siteName: "Herbert Digital-First Lab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Herbert Digital-First Lab" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
