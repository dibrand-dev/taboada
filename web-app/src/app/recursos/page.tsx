import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getSupabasePublicClient, NotaBlog } from '@/lib/supabase-client'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Recursos y Salud Visual | Dra. Cecilia Taboada',
  description: 'Artículos educativos, consejos médicos y prevención oftalmológica desarrollados por la Dra. María Cecilia Taboada.',
  alternates: {
    canonical: 'https://draceciliataboada.com.ar/recursos',
  },
}

async function getNotas(): Promise<NotaBlog[]> {
  const supabase = getSupabasePublicClient()
  if (!supabase) return []

  try {
    const { data, error } = await supabase
      .from('notas')
      .select('*')
      .eq('publicada', true)
      .order('created_at', { ascending: false })

    if (error || !data) return []
    return data as NotaBlog[]
  } catch (err) {
    console.error('Error obteniendo notas:', err)
    return []
  }
}

export default async function RecursosPage() {
  const notas = await getNotas()

  return (
    <main className="min-h-screen bg-[#f6fbfc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Recursos y Salud Visual
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Información médica actualizada, artículos preventivos y consejos para cuidar tu visión con la rigurosidad y excelencia de la Dra. María Cecilia Taboada.
          </p>
        </div>

        {notas.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm">
            <p className="text-slate-600 text-lg mb-4">
              Próximamente publicaremos nuevos artículos educativos.
            </p>
            <Link className="inline-flex items-center text-teal-700 font-semibold hover:underline" href="/">
              ← Volver al inicio
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notas.map((nota) => (
              <article
                key={nota.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {nota.imagen_url ? (
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image alt={nota.titulo} className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={nota.imagen_url}/>
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center">
                    <span className="text-teal-700 font-medium">Oftalmología Preventiva</span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {nota.categoria && (
                      <span className="inline-block px-3 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-full mb-3">
                        {nota.categoria}
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                      <Link className="hover:text-teal-700 transition-colors" href={`/articulo/${nota.slug}`}>
                        {nota.titulo}
                      </Link>
                    </h2>
                    {nota.resumen && (
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                        {nota.resumen}
                      </p>
                    )}
                  </div>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {new Date(nota.created_at).toLocaleDateString('es-AR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <Link className="text-teal-700 font-semibold text-sm hover:underline" href={`/articulo/${nota.slug}`}>
                      Leer artículo →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
