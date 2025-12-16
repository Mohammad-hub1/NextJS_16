"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsers } from "./api/client/route";
import { Spinner } from "@/components/ui/spinner";
import { AppButton } from "@/components/split-ui/button";
import { useRouter } from "next/navigation";

export default function UsersClient({ locale }: { locale: string }) {
  const { data, isLoading } = useUsers();

  if (isLoading) return <Spinner />;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/${locale}/profile`);
  };
  return (
    <div className="flex items-center  gap-5 text-wrap flex-wrap m-12">
      {data?.map((user, index) => (
        <Card
          key={user.id}
          className="hover:bg-[hsl(var(--muted)/0.9)] w-75 transition-colors p- "
        >
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[hsl(var(--muted-foreground))] my-2">
              {user.email}
            </p>
            <AppButton
              variant="default"
              className="mt-4 w-full"
              loading={index === 2 && true}
              onClick={handleClick}
            >
              View Profile
            </AppButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
