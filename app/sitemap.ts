import { MetadataRoute } from 'next';
import { ZODIAC_SIGNS } from '@/lib/common-constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourfortune.cool';
  const recentDate = new Date('2026-03-19');  // last major content update
  const stableDate = new Date('2025-07-17');  // pages unchanged since launch

  const zodiacPages: MetadataRoute.Sitemap = ZODIAC_SIGNS.map((sign) => ({
    url: `${baseUrl}/zodiac/${sign}`,
    lastModified: recentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    // Main pages - High priority
    {
      url: baseUrl,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/general`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sample-results`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Fortune category landing pages - High priority
    {
      url: `${baseUrl}/love`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/money`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mental-health`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/job`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/composure`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: recentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/golf`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Quiz pages
    {
      url: `${baseUrl}/quiz/love`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz/money`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz/mental-health`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz/job`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz/general`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz/composure`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quiz/exam`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quiz/interview`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quiz/assignment`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Zodiac guide pages
    {
      url: `${baseUrl}/zodiac`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...zodiacPages,

    // Content pages
    {
      url: `${baseUrl}/faq`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-guide`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Info pages
    {
      url: `${baseUrl}/about`,
      lastModified: recentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: stableDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },

    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: recentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: recentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: recentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
