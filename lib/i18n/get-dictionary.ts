import { Locale } from "./locales";

export async function getDictionary(locale: Locale) {
  return (await import(`./dictionaries/${locale}.json`)).default;
}
