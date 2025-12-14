import { NextResponse } from "next/server";

export async function GET() {
  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>http://localhost:3000/ar</loc></url>
      <url><loc>http://localhost:3000/en</loc></url>
    </urlset>
  `;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}

// SEO Benefit: Ensures all important pages,
//  including nested routes and different locales, are discoverable by search engines.
// Returns XML directly, not React JSX

// Content-Type = application/xml ensures browser/search engines read it as a sitemap
