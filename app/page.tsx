import { Hero } from "@/components/home/Hero";
import type { Metadata } from "next";
import { HomeStats } from "@/components/home/HomeStats";
import { ArchivePreview } from "@/components/home/ArchivePreview";
import { HowItMoves } from "@/components/home/HowItMoves";
import { CTABanner } from "@/components/home/CTABanner";
import { PartnershipFeature } from "@/components/home/PartnershipFeature";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};


export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnershipFeature />
      <HomeStats />
      <ArchivePreview />
      <HowItMoves />
      <CTABanner />
    </>
  );
}
