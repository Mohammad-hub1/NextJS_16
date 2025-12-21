import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/split-ui/card";
import { getLngDictionary } from "@/lib/i18n/get-dictionary";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getLngDictionary(locale, "dashboard");

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href={`/${locale}/users`}>
            <Card interactive className="bg-[hsl(var(--muted)/0.9)]">
              <CardHeader className="pb-2">
                <CardDescription>{t.stats.totalUsers}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold tracking-tight">1,248</p>
              </CardContent>
            </Card>
          </Link>

          <Card interactive className="bg-[hsl(var(--muted)/0.9)]">
            <CardHeader className="pb-2">
              <CardDescription>{t.stats.activeSessions}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold tracking-tight">86</p>
            </CardContent>
          </Card>

          <Card interactive>
            <CardHeader className="pb-2">
              <CardDescription>{t.stats.revenue}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold tracking-tight">$12,430</p>
            </CardContent>
          </Card>

          <Card interactive className="bg-[hsl(var(--dangerous)/0.9)]">
            <CardHeader className="pb-2">
              <CardDescription>{t.stats.errors}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold tracking-tight text-destructive">
                3
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t.recentActivity.title}</CardTitle>
              <CardDescription>
                {t.recentActivity.subtitle ?? ""}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {t.recentActivity.empty}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.quickActions.title}</CardTitle>
              <CardDescription>{t.quickActions.subtitle ?? ""}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc pl-4">
                <li>{t.quickActions.users}</li>
                <li>{t.quickActions.settings}</li>
                <li>{t.quickActions.reports}</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
