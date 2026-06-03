import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => new URL(path, 'https://docs.scrawn.dev').toString();

  const pages = source.getPages().map((page) => {
    return {
      url: url(page.url),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    } as MetadataRoute.Sitemap[number];
  });

  return [
    {
      url: url('/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pages,
  ];
}