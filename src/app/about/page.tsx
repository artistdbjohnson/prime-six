import type { Metadata } from "next";
import { AboutPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.aboutTitle, description: en.meta.aboutDescription };

export default function Page() {
  return <AboutPage />;
}
