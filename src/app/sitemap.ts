import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/caseStudies';

const BASE_URL = 'https://munnaza-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...caseStudies.map((study) => ({
      url: `${BASE_URL}/case-studies/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
