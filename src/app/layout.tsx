import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Chrome } from "@/components/Chrome";
import { EmberIgnition } from "@/components/EmberIgnition";
import { Providers } from "@/components/Providers";
import { en } from "@/content/en";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: en.meta.homeTitle,
  description: en.meta.homeDescription,
};

const BOOT = `(function(){try{var t=localStorage.getItem("p6-theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t;var skip=false;if(sessionStorage.getItem("p6-ember")==="1")skip=true;if(location.hash)skip=true;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)skip=true;if(skip)document.documentElement.classList.add("skip-ignition");}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={inter.variable}>
      <body className="font-sans">
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <Providers>
          <EmberIgnition />
          <Chrome>{children}</Chrome>
        </Providers>
      </body>
    </html>
  );
}
