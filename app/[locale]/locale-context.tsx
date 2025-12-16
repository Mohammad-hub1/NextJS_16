"use client";

import { createContext, useContext } from "react";

export type LocaleContextType = {
  locale: string;
  common: Record<string, any>;
};

// ✅ NAMED EXPORT
export const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside LocaleContext.Provider");
  }
  return ctx;
}
