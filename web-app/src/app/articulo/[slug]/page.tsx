import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { getSupabasePublicClient, NotaBlog } from '@/lib/supabase-client'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getNotaBySlug(slug: string): Promise<NotaBlog | null> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('notas')
      .select('*')
      .eq('slug', slug)
      .eq('publicada', true)
      .single()

    if (error || !data) return null
    return data as NotaBlog
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const supabase = getSupabasePublicClient()
  if (!supabase) return []

  try {
    const { data } = await supabase
      .from('notas')
      .select('slug')
      .eq('publicada', true)

    if (!data) return []
    return data.map((nota) => ({ slug: nota.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const nota = await getNotaBySlug(slug)

  if (!nota) {
    return {
      title: 'Artículo no encontrado | Dra. Cecilia Taboada',
    }
  }

  const title = `${nota.titulo} | Dra. Cecilia Taboada`
  const description = nota.resumen || `Artículo informativo sobre salud visual escrito por la Dra. María Cecilia Taboada.`
  const url = `https://draceciliataboada.com.ar/articulo/${nota.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: nota.created_at,
      modifiedTime: nota.updated_at,
      authors: ['Dra. María Cecilia Taboada'],
      images: nota.imagen_url ? [{ url: nota.imagen_url }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: nota.imagen_url ? [nota.imagen_url] : [],
    },
  }
}

export default async function ArticuloPage({ params }: PageProps) {
  const { slug } = await params
  const nota = await getNotaBySlug(slug)

  if (!nota) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: nota.titulo,
    description: nota.resumen || nota.titulo,
    image: nota.imagen_url ? [nota.imagen_url] : ['https://draceciliataboada.com.ar/opengraph-image.png'],
    datePublished: nota.created_at,
    dateModified: nota.updated_at || nota.created_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://draceciliataboada.com.ar/articulo/${nota.slug}`,
    },
    author: {
      '@type': 'Physician',
      '@id': 'https://draceciliataboada.com.ar/#physician',
      name: 'Dra. María Cecilia Taboada',
    },
    publisher: {
      '@type': 'MedicalClinic',
      '@id': 'https://draceciliataboada.com.ar/#clinic',
      name: 'Consultorio Oftalmológico Dra. Cecilia Taboada',
    },
  }

  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link className="text-sm font-semibold text-teal-700 hover:underline inline-flex items-center gap-1 mb-6" href="/recursos">
              ← Volver a Recursos
            </Link>
            {nota.categoria && (
              <span className="block text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
                {nota.categoria}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              {nota.titulo}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500 border-b border-slate-100 pb-6">
              <span>Por Dra. María Cecilia Taboada</span>
              <span>•</span>
              <time dateTime={nota.created_at}>
                {new Date(nota.created_at).toLocaleDateString('es-AR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>

          {nota.imagen_url && (
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-sm">
              <Image alt={nota.titulo} className="object-cover" fill priority src={nota.imagen_url}/>
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-teal-700 prose-img:rounded-xl mb-16"
            dangerouslySetInnerHTML={{ __html: nota.contenido }}
          />

          <div className="bg-[#f6fbfc] border border-teal-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-teal-600 shadow-sm">
              <Image alt="Dra. María Cecilia Taboada" className="object-cover" fill src="/opengraph-image.png"/>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Sobre la Dra. María Cecilia Taboada
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Médica especialista en Oftalmología. Enfocada en salud visual preventiva, diagnóstico de precisión y tratamientos de alta complejidad.
              </p>
              <a
                href="https://wa.me/5491171121934?text=Hola,%20quisiera%20agendar%20una%20consulta%20oftalmológica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm gap-2"
              >
                Agendá una consulta vía WhatsApp
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
