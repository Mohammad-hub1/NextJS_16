"use client";

import { useContext } from "react";
import { LocaleContext } from "./locale-context";

export default function HomePage() {
  const ctx = useContext(LocaleContext);
  if (!ctx) return null;
  const dict = ctx.common;

  return <h1>{dict.home.title}</h1>;
}

// Next.js automatically injects it into <head> for that route  FOR SEO
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: "en" | "ar" }>;
// }) {
//   const ctx = useContext(LocaleContext);
//   if (!ctx) return {};

//   const dict = ctx.common;
//   return {
//     title: dict.home.title,
//     description: dict.home.subtitle,
//   };
// }
