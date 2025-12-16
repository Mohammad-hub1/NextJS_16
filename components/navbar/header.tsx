"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/lib/i18n/locales";
import { AppButton } from "@/components/split-ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "../theme/theme-toggle";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale: string) => {
    const newPath = pathname.replace(/^\/(en|ar)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-sm">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center gap-[20px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <AppButton variant="default">Language</AppButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            {locales.map((locale) => (
              <DropdownMenuItem
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`${
                  pathname.startsWith(`/${locale}`)
                    ? "font-semibold text-[hsl(var(--primary))]"
                    : ""
                }`}
              >
                {locale.toUpperCase()}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />
      </div>
    </header>
  );
}
