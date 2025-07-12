import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourfortune.cool';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/start/step-1-personal-info`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Content pages
    {
      url: `${baseUrl}/use-guide`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sample-results`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Info pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2025-01-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
