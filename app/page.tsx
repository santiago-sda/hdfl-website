import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeStats } from "@/components/home/HomeStats";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <HomeStats />
      <CTABanner />
    </>
  );
}
