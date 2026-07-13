
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import NewsletterForm from '@/components/NewsletterForm';

export const dynamic = 'force-dynamic';

export default async function Conocimiento() {
  const supabase = await createClient()

  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories ( id, name, slug ),
      authors ( id, first_name, last_name, avatar_url )
    `)
    .eq('published', true)
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching public posts:', error)
  }

  return (
    <>

      <main style={{ backgroundColor: 'rgb(238, 241, 245)' }}>
        {/* 1. Hero */}
        <header className="relative w-full h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEWoesSwp5ldyPPQB7QNqTDrLSpqjcmL6ige9SCRp3JMvcaGjmNQD6VP85zC1I188AU9_nnL1AsBfePSi5rC8dCsIYZwZdp6iEqdq8fsfgF0C8VNQiGIyZUCj64BworhJ3G1ETIcI3L-1dRcY4vTZeImKiSzj3Bqaxhz-xq98iIVh2I7sq7RMnD9jL3yasAN0ERDT6fiCe1UvkJo6v1Uff39z1JrjXbRIFOlCImVmOpcCQsXlXjn_C" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-bright via-surface-bright/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-safe max-w-container-max mx-auto w-full">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Centro de Conocimiento</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
                Recursos para cuidar tu visión
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Información desarrollada por la Dra. María Cecilia Taboada para ayudarte a comprender, prevenir y cuidar tu salud visual en cada etapa de la vida.
              </p>
            </div>
          </div>
        </header>

        {/* 2. Introducción Editorial */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest bg-white">
          <div className="px-margin-safe max-w-4xl mx-auto text-center">
            <div className="mb-12 inline-block">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 italic">&quot;Un paciente informado es el mejor aliado de su propia salud.&quot;</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant leading-loose space-y-6">
              <p>
                La medicina moderna no solo ocurre dentro del consultorio. Entender los procesos biológicos de nuestros ojos, identificar síntomas tempranos y adoptar hábitos preventivos son pilares fundamentales para una vida con plenitud visual.
              </p>
              <p>
                Este espacio ha sido curado meticulosamente para ofrecerte claridad científica con un lenguaje cercano, transformando la complejidad médica en herramientas prácticas para tu bienestar.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buscador & 4. Filtros */}
        <section className="sticky top-[73px] z-40 bg-surface-bright/95 backdrop-blur-sm border-b border-outline-variant/10 py-8">
          <div className="px-margin-safe max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="relative flex-1 max-w-md group transition-soft opacity-100 translate-y-0">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-secondary transition-colors">search</span>
                <input className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-secondary focus:ring-0 pl-8 pb-3 font-body-md text-body-md placeholder:text-outline/60 transition-all outline-none" placeholder="Buscar un artículo..." type="text" />
              </div>
              <div className="flex overflow-x-auto gap-3 hide-scrollbar pb-2 md:pb-0">
                <button className="whitespace-nowrap px-6 py-2 bg-primary text-on-primary font-label-caps text-[10px] uppercase tracking-widest rounded-full transition-soft cursor-pointer">Todos</button>
                <button className="whitespace-nowrap px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-secondary/10 hover:text-secondary font-label-caps text-[10px] uppercase tracking-widest rounded-full transition-soft cursor-pointer">Prevención</button>
                <button className="whitespace-nowrap px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-secondary/10 hover:text-secondary font-label-caps text-[10px] uppercase tracking-widest rounded-full transition-soft cursor-pointer">Controles</button>
                <button className="whitespace-nowrap px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-secondary/10 hover:text-secondary font-label-caps text-[10px] uppercase tracking-widest rounded-full transition-soft cursor-pointer">Salud Visual</button>
                <button className="whitespace-nowrap px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-secondary/10 hover:text-secondary font-label-caps text-[10px] uppercase tracking-widest rounded-full transition-soft cursor-pointer">Tecnología</button>
                <button className="whitespace-nowrap px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-secondary/10 hover:text-secondary font-label-caps text-[10px] uppercase tracking-widest rounded-full transition-soft cursor-pointer">Pantallas</button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Listado de Artículos (Editorial Grid) */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop">
          <div className="px-margin-safe max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {posts && posts.length > 0 ? (
                posts.map((post: any, index: number) => {
                  const isFeatured = index === 0;
                  
                  if (isFeatured) {
                    return (
                      <div key={post.id} className="md:col-span-12 mb-16 group transition-soft opacity-100 translate-y-0">
                        <Link className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest overflow-hidden border border-outline-variant/10 hover:border-secondary/20 transition-soft bg-white" href={`/recursos/${post.slug}`}>
                          <div className="h-[400px] md:h-auto relative overflow-hidden">
                            {post.cover_image_url ? (
                              <Image className="object-cover group-hover:scale-105 transition-transform duration-1000" alt={post.title} src={post.cover_image_url} fill sizes="(max-width: 768px) 100vw, 50vw" />
                            ) : (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-1000 absolute inset-0">Sin imagen</div>
                            )}
                            <div className="absolute top-6 left-6">
                              <span className="bg-secondary text-white px-4 py-1 font-label-caps text-[10px] tracking-widest uppercase">Destacado</span>
                            </div>
                          </div>
                          <div className="p-8 md:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                              <span className="font-label-caps text-label-caps text-secondary uppercase">{post.categories?.name || 'General'}</span>
                              <span className="w-1 h-1 bg-outline rounded-full"></span>
                              <span className="font-label-caps text-label-caps text-outline uppercase">{post.reading_time_minutes || 5} MIN LECTURA</span>
                            </div>
                            <h3 className="font-headline-lg text-headline-lg text-primary mb-6 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 line-clamp-3">
                              {post.summary}
                            </p>
                            <div className="flex items-center text-primary font-label-caps text-label-caps gap-2 group/btn">
                              <span>Leer artículo</span>
                              <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  }

                  return (
                    <div key={post.id} className="md:col-span-4 group transition-soft opacity-100 translate-y-0">
                      <Link className="flex flex-col h-full bg-white transition-soft border-b border-transparent hover:border-secondary pb-8" href={`/recursos/${post.slug}`}>
                        <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                          {post.cover_image_url ? (
                            <Image className="object-cover group-hover:scale-105 transition-transform duration-700" alt={post.title} src={post.cover_image_url} fill sizes="(max-width: 768px) 100vw, 33vw" />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700 absolute inset-0">Sin imagen</div>
                          )}
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase">{post.categories?.name || 'General'}</span>
                          <span className="text-outline">•</span>
                          <span className="font-label-caps text-[10px] text-outline tracking-widest uppercase">{post.reading_time_minutes || 5} MIN</span>
                        </div>
                        <h4 className="font-headline-md text-headline-md text-primary mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                          {post.summary}
                        </p>
                        <span className="mt-auto font-label-caps text-label-caps text-outline flex items-center gap-2">LEER MÁS <span className="material-symbols-outlined text-sm">north_east</span></span>
                      </Link>
                    </div>
                  )
                })
              ) : (
                <div className="col-span-full text-center py-24 text-slate-500 font-body-lg">
                  Pronto publicaremos nuevos artículos.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 6. Newsletter */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-primary text-on-primary relative overflow-hidden" style={{ backgroundColor: '#EEF1F5' }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
          <div className="px-margin-safe max-w-container-max mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-gutter">
              <div>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 text-primary">Recibí consejos para cuidar tu salud visual</h2>
                <p className="font-body-lg text-body-lg opacity-80 max-w-md text-primary">
                  Unite a nuestra comunidad editorial y recibí una vez al mes las novedades más importantes en oftalmología y bienestar.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* 7. CTA Final */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low">
          <div className="px-margin-safe max-w-container-max mx-auto text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">¿Necesitás una evaluación personalizada?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                La información es el primer paso, pero nada reemplaza un diagnóstico médico preciso. Agendá una consulta para evaluar tu salud visual.
              </p>
              <a href="https://wa.me/5491171121934?text=Hola%2C%20te%20contacto%20desde%20la%20web%20porque%20quiero%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-primary text-on-primary px-12 py-5 font-label-caps text-label-caps hover:bg-primary-container transition-all group transition-soft opacity-100 translate-y-0">
                AGENDÁ UNA CONSULTA
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">calendar_month</span>
              </a>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
