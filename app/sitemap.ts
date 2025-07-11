import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourfortune.cool';

const staticPaths = [
  '/',
  '/start/step-1-personal-info',
  '/faq',
  '/use-guide',
  '/about',
  '/contact',
  '/privacy',
  '/cookies',
  '/terms',
  '/sample-results',
];

export async function GET() {
  const urls = staticPaths
    .map((path) => {
      return `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${
        path === '/' ? '1.0' : '0.7'
      }</priority>\n  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
