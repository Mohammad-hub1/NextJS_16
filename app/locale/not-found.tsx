// app/[locale]/not-found.tsx
import { headers } from "next/headers";

export default async function NotFound() {
  const locale = (await headers()).get("x-pathname")?.includes("/ar")
    ? "ar"
    : "en";

  return <h1>{locale === "ar" ? "الصفحة غير موجودة" : "Page not found"}</h1>;
}
