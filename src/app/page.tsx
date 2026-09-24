import type { Metadata } from "next";
import { BurnStory } from "@/components/BurnStory";
import { Economics } from "@/components/Economics";
import { Hero } from "@/components/Hero";
import { Audiences, Chefs, SampleBand, WhyExcerpt } from "@/components/HomeSections";
import { ProofRail } from "@/components/ProofRail";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.meta.homeTitle,
  description: en.meta.homeDescription,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofRail />
      <BurnStory />
      <WhyExcerpt />
      <Audiences />
      <Economics />
      <Chefs />
      <SampleBand />
    </>
  );
}
