import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-chotika-bangboon.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-chotika-bangboon.vercel.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-chotika-bangboon.vercel.app/contact',
      lastModified: new Date(),
    },
  ]
}
