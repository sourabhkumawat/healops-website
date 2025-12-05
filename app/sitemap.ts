import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://healops.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add other static routes here if they exist, e.g., /about, /blog
  ]
}
