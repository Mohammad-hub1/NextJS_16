import { getDictionary } from "@/lib/i18n/get-dictionary";
// import { getCourses } from "@/lib/api/public/courses";

export default async function CoursesPage({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  const dict = await getDictionary(params.locale);
  //   const courses = await getCourses();

  return (
    <>
      <h1>{dict.courses.title}</h1>
      {/* {courses.length === 0 && <p>{dict.courses.empty}</p>} */}
    </>
  );
}
