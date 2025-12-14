import Link from "next/link";

export function LocaleSwitcher({
  currentLocale,
}: {
  currentLocale: "en" | "ar";
}) {
  return (
    <>
      <Link href={`/en`}>EN</Link>
      <Link href={`/ar`}>AR</Link>
    </>
  );
}
