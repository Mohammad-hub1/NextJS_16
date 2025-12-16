"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api/server/route";

export function useCourses(locale: string) {
  return useQuery({
    queryKey: ["courses", locale],
    queryFn: () => fetchUsers(locale),
  });
}

export default function CoursesClient({ locale }: { locale: string }) {
  const { data, isLoading, error } = useCourses(locale);

  if (isLoading) return <p>Loading courses...</p>;
  if (error) return <p>Error loading courses</p>;

  return (
    <ul>
      {data?.map((course: any) => (
        <li key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </li>
      ))}
    </ul>
  );
}
