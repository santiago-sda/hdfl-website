import { Hero } from "@/components/home/Hero";
import { HomeStats } from "@/components/home/HomeStats";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ArchivePreview } from "@/components/home/ArchivePreview";
import { HowItMoves } from "@/components/home/HowItMoves";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeStats />
      <WhatWeDo />
      <ArchivePreview />
      <HowItMoves />
      <CTABanner />
    </>
  );
}
