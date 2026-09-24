"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { getCopy, type Lang } from "@/content";
import type { Copy } from "@/content/types";

type Theme = "light" | "dark";

type I18n = {
  lang: Lang;
  theme: Theme;
  copy: Copy;
  setLang: (lang: Lang) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const Ctx = createContext<I18n | null>(null);

export function useI18n() {
  const value = useContext(Ctx);
  if (!value) throw new Error("useI18n outside provider");
  return value;
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const pathname = usePathname();

  useEffect(() => {
    const storedLang = window.localStorage.getItem("p6-lang");
    if (storedLang === "pt" || storedLang === "en") setLangState(storedLang);
    const storedTheme = window.localStorage.getItem("p6-theme");
    if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
    else if (document.documentElement.dataset.theme === "dark") setThemeState("dark");
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("p6-lang", next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("p6-theme", next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const copy = useMemo(() => getCopy(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt" : "en";
  }, [lang]);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": copy.meta.homeTitle,
      "/why-prime-6": copy.meta.whyTitle,
      "/about": copy.meta.aboutTitle,
      "/home-grillers": copy.meta.grillersTitle,
      "/pro-chefs": copy.meta.chefsTitle,
      "/get-a-sample": copy.meta.sampleTitle,
      "/terry-koval": copy.meta.terryTitle,
      "/shark-tank": copy.meta.newsTitle,
      "/sustainability": copy.meta.sustainTitle,
      "/contact": copy.meta.contactTitle,
    };
    if (titles[pathname]) document.title = titles[pathname];
  }, [copy, pathname]);

  const value = useMemo(
    () => ({ lang, theme, copy, setLang, setTheme, toggleTheme }),
    [lang, theme, copy, setLang, setTheme, toggleTheme],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
