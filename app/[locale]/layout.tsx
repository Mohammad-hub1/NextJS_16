import { locales } from "@/lib/i18n/locales";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

import { notFound } from "next/navigation";
import { getCoursesDictionary } from "@/lib/i18n/get-dictionary";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const paramsWait = await params;
  const paramsLocale = paramsWait.locale;

  if (!locales.includes(paramsLocale as any)) {
    notFound();
  }
  const dict = await getCoursesDictionary(paramsLocale as any);

  return (
    <html lang={paramsLocale} dir={paramsLocale === "ar" ? "rtl" : "ltr"}>
      <body>
        {/* Example: pass dict via context we will apply  it later */}
        {children}
      </body>
    </html>
  );
}
