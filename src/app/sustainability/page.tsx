import type { Metadata } from "next";
import { SustainPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.sustainTitle, description: en.meta.aboutDescription };

export default function Page() {
  return <SustainPage />;
}
