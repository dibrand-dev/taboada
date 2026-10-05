import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getSupabasePublicClient } from '@/lib/supabase-client'
import { notFound } from 'next/navigation'
import { Post } from '../page'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return {}

  const { slug } = await params

  const { data } = await supabase
    .from('posts')
    .select('title, summary')
    .eq('slug', slug)
    .single()

  if (!data) return {}

  return {
    title: `${data.title} | Dra. María Cecilia Taboada`,
    description: data.summary || 'Artículo del blog de salud visual.',
  }
}

async function getNota(slug: string): Promise<Post | null> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*, categories(name), authors(first_name, last_name, avatar_url)')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error || !data) return null
    return data as Post
  } catch (err) {
    console.error('Error obteniendo nota:', err)
    return null
  }
}

async function getRelatedPosts(currentSlug: string): Promise<Post[]> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return []

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*, categories(name)')
      .neq('slug', currentSlug)
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3)

    if (error || !data) return []
    return data as Post[]
  } catch (err) {
    console.error('Error obteniendo notas relacionadas:', err)
    return []
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const nota = await getNota(slug)

  if (!nota) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(slug)

  return (
    <main className="bg-white font-sans">
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 mt-20 md:mt-32">
        {/* Breadcrumbs / Categoría */}
        <div className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-[#1C96C5] mb-8">
          <Link href="/blog" className="hover:text-[#1C96C5]/70 transition-colors">Blog</Link>
          <span className="text-gray-300">/</span>
          <span>{nota.categories?.name || 'Salud Visual'}</span>
        </div>

        {/* Título y Bajada */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a365d] leading-tight mb-6">
          {nota.title}
        </h1>
        {nota.summary && (
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
            {nota.summary}
          </p>
        )}

        {/* Meta info (Autor, Fecha, Tiempo) */}
        <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 mb-12">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={nota.authors?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuAsTVrX_2er0NJP4fUIYy-Ycpyrpb__LH2nhLMM3vzvbAxbyYpdZEwvnvJOI6HziihMU_qy-QToixPDlMpnCb_ZZE5tMZ0vRFpAKF7kMKaPafJgC3fsL7zpzW4QsjWDWFNk8vvx8WxHB310N0a-euySZbhrL0wtIYVEXIcH0pySoBg73yrL2vPN6p9K8UekZJC0u1rNwrTgNu173CmSKKV0EYP5_GMAYRmp2iJCpMQPZ7ZU7tqgjh0O"}
                alt={nota.authors?.first_name ? `${nota.authors.first_name} ${nota.authors.last_name}` : "Dra. María Cecilia Taboada"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900">{nota.authors?.first_name ? `${nota.authors.first_name} ${nota.authors.last_name}` : 'Dra. María Cecilia Taboada'}</p>
              <p className="text-sm text-gray-500">Médica Oftalmóloga</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-200"></div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">calendar_today</span>
              {new Date(nota.created_at).toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">schedule</span>
              {nota.reading_time_minutes ? `${nota.reading_time_minutes} min de lectura` : '5 min de lectura'}
            </span>
          </div>
        </div>

        {/* Imagen Principal */}
        {nota.cover_image_url && (
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-lg relative bg-slate-100">
            <Image
              src={nota.cover_image_url}
              alt={nota.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Contenido del Artículo */}
        <div
          className="prose prose-lg md:prose-xl prose-blue max-w-none prose-headings:font-serif prose-headings:text-[#1a365d] prose-a:text-[#1C96C5] prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: nota.content }}
        />

        {/* CTA Intermedio */}
        <div className="mt-16 p-8 md:p-12 bg-blue-50 rounded-2xl text-center">
          <h4 className="font-serif text-2xl md:text-3xl text-[#1a365d] mb-4">¿Tenés dudas sobre este tema o necesitás una evaluación?</h4>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">La prevención es fundamental. Agendá una consulta para que podamos evaluar tu caso de forma personalizada.</p>
          <a href="https://wa.me/5491176600234" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1C96C5] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#167a9f] hover:shadow-lg transition-all hover:-translate-y-1">
            Solicitar una consulta
          </a>
        </div>
      </article>

      {/* Section 3: Artículos Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mb-12 text-center">Continúa leyendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-video overflow-hidden relative bg-slate-100">
                    {post.cover_image_url ? (
                      <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-500 group-hover:scale-105" />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold tracking-widest text-[#1C96C5] mb-3 block uppercase">
                      {post.categories?.name || 'Salud Visual'}
                    </span>
                    <h3 className="font-serif text-xl text-[#1a365d] group-hover:text-[#1C96C5] transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    {post.summary && (
                      <p className="text-gray-600 line-clamp-2 text-sm">
                        {post.summary}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: CTA Final */}
      <section className="bg-petroleum py-24 px-margin-safe relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M47,-62.1C58.3,-53.4,63.1,-36.1,66.6,-19.1C70.1,-2.1,72.2,14.6,65.8,27.5C59.4,40.4,44.4,49.5,29.3,55.8C14.2,62.1,-1,65.6,-16.9,62.6C-32.9,59.6,-49.6,50.1,-59.1,36C-68.5,21.9,-70.8,3.2,-67,-14.2C-63.2,-31.6,-53.4,-47.8,-39.8,-55.8C-26.3,-63.8,-9,-63.6,9.2,-76.3C27.4,-89,45.8,-114.5,47,-62.1Z" fill="white" transform="translate(200 200)"></path>
          </svg>
        </div>
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-serif text-display-lg-mobile md:text-headline-lg text-white mb-6">Cuidar tu visión comienza con un diagnóstico oportuno</h2>
          <p className="font-sans text-body-lg text-white/80 mb-10 max-w-xl mx-auto">
            Agenda hoy una consulta integral y descubre cómo la tecnología médica de vanguardia puede transformar tu día a día.
          </p>
          <a href="https://wa.me/5491176600234" target="_blank" rel="noopener noreferrer" className="bg-white text-[#115565] px-12 py-5 font-bold text-label-caps uppercase hover:bg-[#b1ecff] transition-all transform hover:scale-105 shadow-xl inline-block text-center tracking-widest">
            Agendar consulta
          </a>
        </div>
      </section>
    </main>
  )
}
