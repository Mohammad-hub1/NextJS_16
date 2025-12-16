import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { makeQueryClient } from "@/lib/react-query/query-client";
import { prefetchUsers } from "./api/server/route";
import UsersClient from "./users-client";

export default async function UsersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Here we prefetch the users data on the server
  //You are passing STATE (cache) to React Query's HydrationBoundary
  const queryClient = makeQueryClient();
  await prefetchUsers(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersClient locale={locale} />
    </HydrationBoundary>
  );
}
