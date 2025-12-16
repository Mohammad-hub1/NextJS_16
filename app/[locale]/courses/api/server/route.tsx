import { QueryClient } from "@tanstack/react-query";
import { Course } from "../../types";

// Server / SSR fetcher
export async function fetchUsers(
  locale: string,
  token?: string
): Promise<Course[]> {
  const headers: HeadersInit = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch courses");

  return res.json();
}

// Server prefetch helper
export async function prefetchCourses(
  queryClient: QueryClient,
  locale: string,
  token?: string
) {
  await queryClient.prefetchQuery({
    queryKey: ["courses", locale],
    queryFn: () => fetchUsers(locale, token),
  });
}
