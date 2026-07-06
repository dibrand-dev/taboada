import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories ( id, name, slug ),
      authors ( id, first_name, last_name, avatar_url, bio )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !post) {
    notFound()
  }

  // Fetch some related posts (just recent ones for now)
  const { data: relatedPosts } = await supabase
    .from('posts')
    .select(`*, categories ( id, name )`)
    .eq('published', true)
    .neq('id', post.id)
    .order('published_at', { ascending: false })
    .limit(3)

  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Editorial */}
        <header className="pt-24 pb-12 px-margin-safe bg-surface-bright">
          <div className="max-w-container-max mx-auto mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex items-center space-x-4 mb-6">
                  {post.categories && (
                    <span className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 font-label-caps text-label-caps rounded-full uppercase">
                      {post.categories.name}
                    </span>
                  )}
                  <span className="text-on-surface-variant font-label-caps text-label-caps flex items-center">
                    <span className="material-symbols-outlined text-sm mr-1">schedule</span> {post.reading_time_minutes || 5} min de lectura
                  </span>
                </div>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
                  {post.title}
                </h1>
                {post.summary && (
                  <p className="font-subtitle-lg text-subtitle-lg text-on-surface-variant mb-8 max-w-2xl">
                    {post.summary}
                  </p>
                )}
                
                {post.authors && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center relative">
                      {post.authors.avatar_url ? (
                        <Image className="w-full h-full object-cover" alt={`${post.authors.first_name} ${post.authors.last_name}`} src={post.authors.avatar_url} fill />
                      ) : (
                        <span className="font-bold text-slate-500">{post.authors.first_name?.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-primary">Escrito por</p>
                      <p className="font-body-md text-body-md font-bold text-primary">
                        {post.authors.first_name} {post.authors.last_name}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-sm border border-outline-variant/10 relative">
                  {post.cover_image_url ? (
                    <Image className="w-full h-full object-cover" alt={post.title} src={post.cover_image_url} fill priority />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">Sin imagen</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section 2: Contenido & Reading Experience */}
        <article className="px-margin-safe pb-section-gap-desktop bg-surface-bright">
          <div className="max-w-[720px] mx-auto">
            <div 
              className="prose prose-neutral max-w-none prose-blockquote:border-l-2 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-on-surface-variant pt-12" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* CTA Intermedio */}
            <div className="text-center py-12 border-y border-outline-variant/20 my-16">
              <h4 className="font-headline-md text-headline-md text-primary mb-6">¿Tenés dudas sobre este tema?</h4>
              <button className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-secondary transition-all transform hover:-translate-y-1">
                Solicitar una consulta
              </button>
            </div>
          </div>
        </article>

        {/* Section 3: Artículos Relacionados */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="bg-surface-container-lowest py-section-gap-desktop px-margin-safe border-t border-outline-variant/20">
            <div className="max-w-container-max mx-auto">
              <h2 className="font-headline-md text-headline-md text-primary mb-12 text-center">Continúa leyendo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {relatedPosts.map((relatedPost: any) => (
                  <Link key={relatedPost.id} href={`/recursos/${relatedPost.slug}`} className="group cursor-pointer">
                    <div className="aspect-video overflow-hidden mb-6 rounded-lg relative">
                      {relatedPost.cover_image_url ? (
                         <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={relatedPost.title} src={relatedPost.cover_image_url} fill />
                      ) : (
                         <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">Sin imagen</div>
                      )}
                    </div>
                    {relatedPost.categories && (
                      <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase">{relatedPost.categories.name}</span>
                    )}
                    <h3 className="font-subtitle-lg text-subtitle-lg text-primary group-hover:text-secondary transition-colors mb-4 line-clamp-2">{relatedPost.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{relatedPost.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 4: CTA Final */}
        <section className="bg-petroleum py-24 px-margin-safe relative overflow-hidden" style={{ backgroundColor: '#115565' }}>
          {/* Subtle abstract background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M47,-62.1C58.3,-53.4,63.1,-36.1,66.6,-19.1C70.1,-2.1,72.2,14.6,65.8,27.5C59.4,40.4,44.4,49.5,29.3,55.8C14.2,62.1,-1,65.6,-16.9,62.6C-32.9,59.6,-49.6,50.1,-59.1,36C-68.5,21.9,-70.8,3.2,-67,-14.2C-63.2,-31.6,-53.4,-47.8,-39.8,-55.8C-26.3,-63.8,-9,-63.6,9.2,-76.3C27.4,-89,45.8,-114.5,47,-62.1Z" fill="white" transform="translate(200 200)"></path>
            </svg>
          </div>
          <div className="max-w-container-max mx-auto text-center relative z-10">
            <h2 className="font-display-lg-mobile md:font-headline-lg text-white mb-6">Cuidar tu visión comienza con un diagnóstico oportuno</h2>
            <p className="font-body-lg text-white/80 mb-10 max-w-xl mx-auto">
              Agenda hoy una consulta integral y descubre cómo la tecnología médica de vanguardia puede transformar tu día a día.
            </p>
            <a href="https://wa.me/5491171121934?text=Hola%2C%20te%20contacto%20desde%20la%20web%20porque%20quiero%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#115565] px-12 py-5 font-label-caps text-label-caps tracking-widest hover:bg-[#b1ecff] transition-all transform hover:scale-105 shadow-xl">
              AGENDÁ UNA CONSULTA
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
