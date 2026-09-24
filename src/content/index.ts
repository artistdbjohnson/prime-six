import { en } from "./en";
import { pt } from "./pt";
import type { Copy } from "./types";

export type Lang = "en" | "pt";

export const dictionaries: Record<Lang, Copy> = { en, pt };

export function getCopy(lang: Lang): Copy {
  return dictionaries[lang];
}
