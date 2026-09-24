import type { Metadata } from "next";
import { WhyPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.whyTitle, description: en.meta.whyDescription };

export default function Page() {
  return <WhyPage />;
}
