import { locales } from "@/lib/i18n/locales";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

import "@/app/globals.css";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as any)) {
    notFound();
  }

  const dict = await getDictionary(params.locale as any);

  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body>
        {/* Example: pass dict via context */}
        {children}
      </body>
    </html>
  );
}
