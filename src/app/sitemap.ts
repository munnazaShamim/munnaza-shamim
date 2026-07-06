import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/caseStudies';
import { blogPosts } from '@/lib/blogPosts';

import { SITE_URL } from '@/lib/site';

const BASE_URL = SITE_URL;

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
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
