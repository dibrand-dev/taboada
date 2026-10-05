import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getSupabasePublicClient, NotaBlog } from '@/lib/supabase-client'
import NewsletterForm from '@/components/NewsletterForm'
import BlogSearchFilter from '@/components/BlogSearchFilter'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog y Centro de Conocimiento | Dra. María Cecilia Taboada',
  description: 'Centro de conocimiento y blog sobre salud visual de la Dra. María Cecilia Taboada.',
}

export interface Post {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  cover_image_url: string
  reading_time_minutes: number
  published: boolean
  author_id: string
  category_id: string
  published_at: string
  created_at: string
  updated_at: string
  categories?: { name: string }
  authors?: { first_name: string, last_name: string }
}

async function getNotas(query?: string, categoryId?: string): Promise<Post[]> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return []

  try {
    let queryBuilder = supabase
      .from('posts')
      .select('*, categories(name), authors(first_name, last_name)')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (query) {
      queryBuilder = queryBuilder.or(`title.ilike.%${query}%,summary.ilike.%${query}%`)
    }
    if (categoryId) {
      queryBuilder = queryBuilder.eq('category_id', categoryId)
    }

    const { data, error } = await queryBuilder

    if (error || !data) return []
    return data as Post[]
  } catch (err) {
    console.error('Error obteniendo notas:', err)
    return []
  }
}

export interface Category {
  id: string
  name: string
  slug: string
}

async function getCategories(): Promise<Category[]> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return []
  const { data, error } = await supabase.from('categories').select('*').order('name')
  if (error || !data) return []
  return data as Category[]
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function BlogPage({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const params = await searchParams
  const q = typeof params?.q === 'string' ? params.q : undefined
  const category = typeof params?.category === 'string' ? params.category : undefined

  const [notas, categories] = await Promise.all([
    getNotas(q, category),
    getCategories()
  ])
  
  // Only show featured post if there are no search filters applied
  const isFiltering = !!q || !!category
  const featuredPost = !isFiltering && notas.length > 0 ? notas[0] : null
  const regularPosts = !isFiltering && notas.length > 1 ? notas.slice(1) : (isFiltering ? notas : [])

  return (
    <main className="bg-[#EEF1F5] font-sans text-[var(--color-on-surface)]">
      {/* 1. Hero */}
      <header className="relative w-full h-[600px] md:h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEWoesSwp5ldyPPQB7QNqTDrLSpqjcmL6ige9SCRp3JMvcaGjmNQD6VP85zC1I188AU9_nnL1AsBfePSi5rC8dCsIYZwZdp6iEqdq8fsfgF0C8VNQiGIyZUCj64BworhJ3G1ETIcI3L-1dRcY4vTZeImKiSzj3Bqaxhz-xq98iIVh2I7sq7RMnD9jL3yasAN0ERDT6fiCe1UvkJo6v1Uff39z1JrjXbRIFOlCImVmOpcCQsXlXjn_C"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-bright)] via-[var(--color-surface-bright)]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-[var(--spacing-margin-safe)] max-w-[var(--spacing-container-max)] mx-auto w-full">
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold tracking-[0.1em] text-[var(--color-secondary)] uppercase mb-4 block font-sans">Centro de Conocimiento</span>
            <h1 className="text-[40px] md:text-[64px] text-[var(--color-primary)] mb-6 leading-[1.1] tracking-[-0.02em] font-serif">
              Recursos para cuidar tu visión
            </h1>
            <p className="text-[18px] text-[var(--color-on-surface-variant)] leading-[1.6] font-sans">
              Información desarrollada por la Dra. María Cecilia Taboada para ayudarte a comprender, prevenir y cuidar tu salud visual en cada etapa de la vida.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Introducción Editorial */}
      <section className="py-[64px] md:py-[120px] bg-white">
        <div className="px-[var(--spacing-margin-safe)] max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-block">
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
          </div>
          <h2 className="text-[40px] text-[var(--color-primary)] mb-8 italic font-serif leading-[1.2]">
            "Un paciente informado es el mejor aliado de su propia salud."
          </h2>
          <div className="text-[18px] text-[var(--color-on-surface-variant)] leading-loose space-y-6 font-sans">
            <p>
              La medicina moderna no solo ocurre dentro del consultorio. Entender los procesos biológicos de nuestros ojos, identificar síntomas tempranos y adoptar hábitos preventivos son pilares fundamentales para una vida con plenitud visual.
            </p>
            <p>
              Este espacio ha sido curado meticulosamente para ofrecerte claridad científica con un lenguaje cercano, transformando la complejidad médica en herramientas prácticas para tu bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Buscador & Filtros */}
      <section className="sticky top-[73px] md:top-[85px] z-40 bg-[var(--color-surface-bright)]/95 backdrop-blur-sm border-b border-[var(--color-outline-variant)]/10 py-8">
        <div className="px-[var(--spacing-margin-safe)] max-w-[var(--spacing-container-max)] mx-auto">
          <BlogSearchFilter categories={categories} />
        </div>
      </section>

      {/* 4. Listado de Artículos */}
      <section className="py-[64px] md:py-[120px]">
        <div className="px-[var(--spacing-margin-safe)] max-w-[var(--spacing-container-max)] mx-auto">
          {notas.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-slate-100">
              <p className="text-[18px] text-[var(--color-on-surface-variant)] font-sans">
                {isFiltering 
                  ? 'No se encontraron artículos para tu búsqueda.' 
                  : 'Próximamente publicaremos nuevos artículos educativos.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
              {/* Featured Post */}
              {featuredPost && (
                <div className="md:col-span-12 mb-16 group transition-soft opacity-100 translate-y-0">
                  <Link href={`/blog/${featuredPost.slug}`} className="grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden border border-[var(--color-outline-variant)]/10 hover:border-[var(--color-secondary)]/20 transition-all shadow-sm hover:shadow-md">
                    <div className="h-[400px] md:h-auto relative overflow-hidden bg-slate-100">
                      {featuredPost.cover_image_url ? (
                        <Image 
                          src={featuredPost.cover_image_url} 
                          alt={featuredPost.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
                      )}
                      <div className="absolute top-6 left-6">
                        <span className="bg-[var(--color-secondary)] text-white px-4 py-1 text-[10px] tracking-[0.1em] uppercase font-bold font-sans">Destacado</span>
                      </div>
                    </div>
                    <div className="p-8 md:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[12px] tracking-[0.1em] text-[var(--color-secondary)] uppercase font-bold font-sans">{featuredPost.categories?.name || 'SALUD VISUAL'}</span>
                        <span className="w-1 h-1 bg-[var(--color-outline)] rounded-full"></span>
                        <span className="text-[12px] tracking-[0.1em] text-[var(--color-outline)] uppercase font-bold font-sans">
                          {new Date(featuredPost.created_at).toLocaleDateString('es-AR')}
                        </span>
                      </div>
                      <h3 className="text-[40px] text-[var(--color-primary)] mb-6 leading-[1.2] group-hover:text-[var(--color-secondary)] transition-colors font-serif">
                        {featuredPost.title}
                      </h3>
                      {featuredPost.summary && (
                        <p className="text-[18px] leading-[1.6] text-[var(--color-on-surface-variant)] mb-8 line-clamp-3 font-sans">
                          {featuredPost.summary}
                        </p>
                      )}
                      <div className="flex items-center text-[var(--color-primary)] text-[12px] tracking-[0.1em] uppercase font-bold font-sans gap-2 group/btn">
                        <span>Leer artículo</span>
                        <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Regular Posts */}
              {regularPosts.map((nota) => (
                <div key={nota.id} className="md:col-span-4 group transition-soft opacity-100 translate-y-0">
                  <Link href={`/blog/${nota.slug}`} className="flex flex-col h-full bg-white transition-all border-b border-transparent hover:border-[var(--color-secondary)] pb-8 shadow-sm hover:shadow-md">
                    <div className="aspect-[4/3] overflow-hidden mb-8 relative bg-slate-100">
                      {nota.cover_image_url ? (
                        <Image 
                          src={nota.cover_image_url} 
                          alt={nota.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
                      )}
                    </div>
                    <div className="px-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] tracking-[0.1em] text-[var(--color-secondary)] uppercase font-bold font-sans">{nota.categories?.name || 'ARTÍCULO'}</span>
                        <span className="text-[var(--color-outline)]">•</span>
                        <span className="text-[10px] tracking-[0.1em] text-[var(--color-outline)] uppercase font-bold font-sans">
                          {new Date(nota.created_at).toLocaleDateString('es-AR')}
                        </span>
                      </div>
                      <h4 className="text-[32px] leading-[1.3] text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-secondary)] transition-colors font-serif line-clamp-2">
                        {nota.title}
                      </h4>
                      {nota.summary && (
                        <p className="text-[16px] leading-[1.6] text-[var(--color-on-surface-variant)] mb-6 line-clamp-3 font-sans">
                          {nota.summary}
                        </p>
                      )}
                      <span className="mt-auto text-[12px] tracking-[0.1em] text-[var(--color-outline)] uppercase font-bold font-sans flex items-center gap-2">
                        LEER MÁS <span className="material-symbols-outlined text-sm">north_east</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Newsletter */}
      <section className="py-[64px] md:py-[120px] bg-[var(--color-primary)] text-white relative overflow-hidden" style={{ backgroundColor: '#EEF1F5' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="px-[var(--spacing-margin-safe)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[var(--spacing-gutter)]">
            <div>
              <h2 className="text-[40px] md:text-[64px] leading-[1.1] tracking-[-0.02em] mb-6 font-serif text-[var(--color-primary)]">Recibí consejos para cuidar tu salud visual</h2>
              <p className="text-[18px] leading-[1.6] text-[var(--color-on-surface-variant)] max-w-md font-sans">
                Unite a nuestra comunidad editorial y recibí una vez al mes las novedades más importantes en oftalmología y bienestar.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="py-[64px] md:py-[120px] bg-[var(--color-surface-container-low)]">
        <div className="px-[var(--spacing-margin-safe)] max-w-[var(--spacing-container-max)] mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[40px] leading-[1.2] text-[var(--color-primary)] mb-6 font-serif">¿Necesitás una evaluación personalizada?</h2>
            <p className="text-[18px] leading-[1.6] text-[var(--color-on-surface-variant)] mb-12 font-sans">
              La información es el primer paso, pero nada reemplaza un diagnóstico médico preciso. Agendá una consulta para evaluar tu salud visual.
            </p>
            <a 
              className="inline-flex items-center gap-4 bg-[var(--color-primary)] text-white px-12 py-5 text-[12px] tracking-[0.1em] uppercase font-bold font-sans hover:bg-[var(--color-primary-container)] transition-all group opacity-100 translate-y-0" 
              href="https://wa.me/5491176600234" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              AGENDAR CONSULTA
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">calendar_month</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
