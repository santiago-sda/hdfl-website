import type { Metadata } from "next";
import { Archivo, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Stand-in for Neulis Neue Black Italic (UM Miami Herbert campaign headline
// font) until we have Adobe Fonts license access to the real typeface.
const archivo = Archivo({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Stand-in for Pressio Condensed (campaign sub-headline/body font) until we
// have Adobe Fonts license access to the real typeface.
const barlowCondensed = Barlow_Condensed({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miami Digital-First Lab | Miami Business School",
  description:
    "Where Digital Intelligence Meets Real Business Challenge. A digital-first student experiential learning lab inside Miami Business School delivering AI systems, dashboards, and product prototypes — free to qualifying partner organizations through the ACE framework.",
  openGraph: {
    title: "Miami Digital-First Lab | Miami Business School",
    description:
      "Where digital meets the real world. Free student experiential learning through Miami's ACE program.",
    siteName: "Miami Digital-First Lab",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Miami Digital-First Lab" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
