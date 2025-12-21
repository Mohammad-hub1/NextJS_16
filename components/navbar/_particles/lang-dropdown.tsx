"use client";

import { locales } from "@/lib/i18n/locales";
import { AppButton } from "@/components/split-ui/button";
import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";

export default function LangDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const activeLocale = segments[1];

  const handleLocaleChange = (locale: string) => {
    if (locale === activeLocale) return;

    const newPath = ["", locale, ...segments.slice(2)].join("/");
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AppButton
          variant="ghost"
          className="flex items-center gap-2"
          aria-label="Change language"
        >
          {activeLocale?.toUpperCase()}
          <ChevronDown className="h-4 w-4 opacity-70" />
        </AppButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32 border-[hsl(var(--muted)/0.9)] bg-[hsl(var(--background)/0.9)] text-[hsl(var(--foreground))]">
        {locales.map((locale) => {
          const isActive = locale === activeLocale;

          return (
            <DropdownMenuItem
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className={isActive ? "font-semibold" : ""}>
                {locale.toUpperCase()}
              </span>

              {isActive && (
                <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
