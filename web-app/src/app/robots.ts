import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/panel/', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'GoogleExtended', 'CCBot'],
        allow: '/',
        disallow: ['/panel/'],
      },
    ],
    sitemap: 'https://draceciliataboada.com.ar/sitemap.xml',
  }
}
