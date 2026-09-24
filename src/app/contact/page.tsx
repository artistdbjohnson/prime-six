import type { Metadata } from "next";
import { ContactPage } from "@/components/InnerPages";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.contactTitle, description: en.meta.contactDescription };

export default function Page() {
  return <ContactPage />;
}
