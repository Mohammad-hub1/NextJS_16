"use client";

import { makeQueryClient } from "@/lib/react-query/query-client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [client] = useState(() => makeQueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
