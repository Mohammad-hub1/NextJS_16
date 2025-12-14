import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <p>{dict.home.subtitle}</p>
    </main>
  );
}

// Next.js automatically injects it into <head> for that route  FOR SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.home.title,
    description: dict.home.subtitle,
  };
}
