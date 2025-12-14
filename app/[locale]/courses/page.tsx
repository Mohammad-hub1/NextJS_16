// app/[locale]/courses/page.tsx
export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const p = await params;
  const locale = p.locale;

  console.log("locale:", locale);

  return (
    <div>
      <h1>Courses Page</h1>
      <p>Locale: {locale}</p>
    </div>
  );
}
