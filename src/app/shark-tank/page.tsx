import type { Metadata } from "next";
import { NewsPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.newsTitle, description: en.meta.newsDescription };

export default function Page() {
  return <NewsPage />;
}
