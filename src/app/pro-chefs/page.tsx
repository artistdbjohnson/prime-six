import type { Metadata } from "next";
import { ChefsPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.chefsTitle, description: en.meta.chefsDescription };

export default function Page() {
  return <ChefsPage />;
}
