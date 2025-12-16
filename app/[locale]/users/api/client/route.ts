"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../server/route";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
