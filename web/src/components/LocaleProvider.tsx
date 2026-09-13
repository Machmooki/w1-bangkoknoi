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
import type { Locale } from "@/lib/site";
import { uiMessages } from "@/lib/messages";
import { phraseTranslations } from "@/lib/phraseTranslations";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("w1_lang") as Locale | null;
    if (stored === "en" || stored === "th" || stored === "zh") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem("w1_lang", l);
    document.documentElement.lang = l === "zh" ? "zh-Hans" : l;
  }, []);

  const t = useCallback(
    (key: string) => {
      const bag = uiMessages[locale];
      if (bag?.[key]) return bag[key];
      if (uiMessages.en[key]) return uiMessages.en[key];
      // Fall back to English-phrase dictionary (legacy HTML coverage).
      if (locale !== "en") {
        const dict = phraseTranslations[locale] as Record<string, string>;
        if (dict[key]) return dict[key];
      }
      return key;
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
