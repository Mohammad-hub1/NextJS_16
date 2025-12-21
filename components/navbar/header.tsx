"use client";

import LangDropDown from "./_particles/lang-dropdown";
import { ThemeToggle } from "./_particles/theme-toggle";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-sm">
      <h1 className="text-xl font-bold">Mock App</h1>
      <div className="flex items-center gap-5">
        <LangDropDown />

        <ThemeToggle />
      </div>
    </header>
  );
}
