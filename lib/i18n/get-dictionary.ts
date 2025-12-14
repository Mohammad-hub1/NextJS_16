import en from "@/lib/i18n/dictionaries/en.json";
import ar from "@/lib/i18n/dictionaries/ar.json";

export async function getDictionary(locale: string) {
  switch (locale) {
    case "en":
      return en;
    case "ar":
      return ar;
    default:
      return en;
  }
}
