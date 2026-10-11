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

const SITE_URL = "https://umbs-digitalfirst.com";

const SITE_DESCRIPTION =
  "Miami Digital-First Lab (MDFL): student teams at Miami Business School build AI systems, dashboards, product prototypes and marketing strategy — free for partner organizations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Miami Digital-First Lab | Miami Business School",
    template: "%s | Miami Digital-First Lab",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Miami Digital-First Lab",
  openGraph: {
    title: "Miami Digital-First Lab | Miami Business School",
    description:
      "Where digital meets the real world. Free student experiential learning through Miami's ACE program.",
    siteName: "Miami Digital-First Lab",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Miami Digital-First Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Digital-First Lab | Miami Business School",
    description:
      "Where digital meets the real world. Free student experiential learning through Miami's ACE program.",
    images: ["/og-image.png"],
  },
};

// Machine-readable identity so search engines tie the brand name (and its
// common spellings) to this site.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Miami Digital-First Lab",
  alternateName: ["MDFL", "Miami Digital First Lab", "Miami Digital First"],
  url: SITE_URL,
  logo: `${SITE_URL}/mdfl_um.png`,
  description: SITE_DESCRIPTION,
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of Miami",
    url: "https://www.miami.edu",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coral Gables",
    addressRegion: "FL",
    postalCode: "33146",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/herbertdigitalfirst",
    "https://www.linkedin.com/company/herbertdigitalfirstlab",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
