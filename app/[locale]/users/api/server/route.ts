import { IUsers } from "../../types";
import { QueryClient } from "@tanstack/react-query";

export async function fetchUsers(): Promise<IUsers[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    headers: {
      // "Accept-Language": locale,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function prefetchUsers(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
