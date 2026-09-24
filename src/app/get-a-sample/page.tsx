import type { Metadata } from "next";
import { SamplePage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.sampleTitle, description: en.meta.sampleDescription };

export default function Page() {
  return <SamplePage />;
}
