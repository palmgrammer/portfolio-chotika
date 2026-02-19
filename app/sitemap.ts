import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-chotika-bangboon.vercel.app',
      lastModified: new Date(),
    },
  ]
}
