import type { Metadata } from "next";
import { TerryPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.terryTitle, description: en.meta.homeDescription };

export default function Page() {
  return <TerryPage />;
}
