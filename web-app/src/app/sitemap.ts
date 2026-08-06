import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://draceciliataboada.com.ar'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/patologias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recursos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/preguntas-frecuentes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  let dynamicRoutes: MetadataRoute.Sitemap = []

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

    if (supabaseUrl && supabaseAnonKey) {
      const supabase = createClient(supabaseUrl, supabaseAnonKey)
      const { data: notas } = await supabase
        .from('notas')
        .select('slug, updated_at, created_at')
        .eq('publicada', true)

      if (notas) {
        dynamicRoutes = notas.map((nota) => ({
          url: `${baseUrl}/articulo/${nota.slug}`,
          lastModified: new Date(nota.updated_at || nota.created_at || Date.now()),
          changeFrequency: 'monthly',
          priority: 0.7,
        }))
      }
    }
  } catch (error) {
    console.error('Error generando sitemap dinámico:', error)
  }

  return [...staticRoutes, ...dynamicRoutes]
}
