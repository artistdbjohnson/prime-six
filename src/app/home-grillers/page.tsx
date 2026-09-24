import type { Metadata } from "next";
import { GrillersPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.grillersTitle, description: en.meta.homeDescription };

export default function Page() {
  return <GrillersPage />;
}
