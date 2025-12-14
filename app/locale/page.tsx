import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <p>{dict.home.subtitle}</p>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.home.title,
    description: dict.home.subtitle,
  };
}
