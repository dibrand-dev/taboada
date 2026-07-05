import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Conocimiento() {
  return (
    <>
      <Header />
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
              {/* Search Input */}
              <div className="relative flex-1 max-w-md group transition-soft opacity-100 translate-y-0">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-secondary transition-colors">search</span>
                <input className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-secondary focus:ring-0 pl-8 pb-3 font-body-md text-body-md placeholder:text-outline/60 transition-all outline-none" placeholder="Buscar un artículo..." type="text" />
              </div>
              {/* Filter Chips */}
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
              {/* Featured Post (Article 1) */}
              <div className="md:col-span-12 mb-16 group transition-soft opacity-100 translate-y-0">
                <a className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest overflow-hidden border border-outline-variant/10 hover:border-secondary/20 transition-soft bg-white" href="/articulo">
                  <div className="h-[400px] md:h-auto relative overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Article image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNu5Oa5tj9njgT2BqBafktiOyGKtuUnrvsuU0u817RsG-3AIMYkGrbMsr1OMMoSeUDZHTIzMYfwV8MWKQTgOj4U2rmGIZFigjpGxBo8lNhKhtV8W4K6mnaHoneBL6YHjVsxO4F-Zd0lV5jY5uMXRm5O-oLWXwHTuhG4yttAWJ9ki7kqhPyX8_COwzvN5JYtPdk2E1D9ITt_vckBM71LI8NbIo4Hgp_1seIcoRCfM-GEw7_HVgv4Xmx" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-secondary text-white px-4 py-1 font-label-caps text-[10px] tracking-widest uppercase">Destacado</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-label-caps text-label-caps text-secondary">TECNOLOGÍA</span>
                      <span className="w-1 h-1 bg-outline rounded-full"></span>
                      <span className="font-label-caps text-label-caps text-outline">8 MIN LECTURA</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-primary mb-6 group-hover:text-secondary transition-colors">Cirugía Refractiva: El futuro de una visión sin límites</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 line-clamp-3">
                      Exploramos los últimos avances en tecnología láser y cómo los nuevos procedimientos están redefiniendo la calidad de vida de miles de pacientes en todo el mundo. Una guía completa para entender si eres candidato.
                    </p>
                    <div className="flex items-center text-primary font-label-caps text-label-caps gap-2 group/btn">
                      <span>Leer artículo</span>
                      <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Regular Posts */}
              <div className="md:col-span-4 group transition-soft opacity-100 translate-y-0">
                <a className="flex flex-col h-full bg-white transition-soft border-b border-transparent hover:border-secondary pb-8" href="/articulo">
                  <div className="aspect-[4/3] overflow-hidden mb-8">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Article image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoPDmtPxDqacQbbRVa0JCKt_CBrKliwxqXt85rRiiXVUd2w7W8RdFhuQcNjw7j2Eg4CiwwGvlIdYBxpLsr9jTtKFKPxZuvNsrdPDOI7g1zY6uytBLaaXqh8yQdp7hCyRBUJ93zwo447gRiU8W3EA36S9IDChaFaPNnUUH3kUBq7WlGmiTbwmNLDORZ_3DWv95PGm1dUvZsy5FnDCntLRW8fZSUwVMaoeJByFKrvJs10G6jgdnsTrJ_" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest">PANTALLAS</span>
                    <span className="text-outline">•</span>
                    <span className="font-label-caps text-[10px] text-outline tracking-widest">5 MIN</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">Fatiga Visual Digital: Guía de supervivencia</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                    Cómo proteger tus ojos en la era del teletrabajo y el uso constante de dispositivos electrónicos. Consejos prácticos de ergonomía visual.
                  </p>
                  <span className="mt-auto font-label-caps text-label-caps text-outline flex items-center gap-2">LEER MÁS <span className="material-symbols-outlined text-sm">north_east</span></span>
                </a>
              </div>

              <div className="md:col-span-4 group transition-soft opacity-100 translate-y-0">
                <a className="flex flex-col h-full bg-white transition-soft border-b border-transparent hover:border-secondary pb-8" href="/articulo">
                  <div className="aspect-[4/3] overflow-hidden mb-8">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Article image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcldrCo8TCmxbQGE-b9KYlYsBtckO541iWUuYUANmBbRGiiNJ0DxZ78GzCRrNC-xixZKixpy_MGtUoFZDUlt_LDDWEB0wxgeGsOol0rWH1Aluz_NMnKEoS6eX1dHi1t_Aq9eZ5GkmyKk_es533X_wevkIIC7o1ctKMoYpQUxu8PRYPrW3lV5JH3HjDB4cObDioT8-6xtuJb7ic6vw8yqRbj9PIKhVcQA9jPvP8YqYXBtG6ZX18pAG" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest">DESPUÉS DE LOS 40</span>
                    <span className="text-outline">•</span>
                    <span className="font-label-caps text-[10px] text-outline tracking-widest">12 MIN</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">La Presbicia: Entendiendo el cambio natural</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                    No es el fin de tu comodidad visual. Analizamos las opciones modernas, desde lentes multifocales hasta soluciones permanentes.
                  </p>
                  <span className="mt-auto font-label-caps text-label-caps text-outline flex items-center gap-2">LEER MÁS <span className="material-symbols-outlined text-sm">north_east</span></span>
                </a>
              </div>

              <div className="md:col-span-4 group transition-soft opacity-100 translate-y-0">
                <a className="flex flex-col h-full bg-white transition-soft border-b border-transparent hover:border-secondary pb-8" href="/articulo">
                  <div className="aspect-[4/3] overflow-hidden mb-8">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Article image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVioE3nU9xOH0BqVLDCQg63YvGh_tz943y9ui_VUu0QqBnRUjviFbFng807heJNoO2QQh2N1IhnA338T1DajlOwRQtEeR-BfYdpjRNwBD0-oCWRoR9XfBKLZQfmvDMUxF-OfgaL6ogOHfX4GNjqGYpiVYbEjDqkMBdIvgE0c7QKoq2p-oPoOrRWTWcVDRERZ4VBCgCPB_Y-Lsn9MNmiuqHG8MjTFME6NL1qE3rwSuKcr8TIKPEHjf4" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest">SALUD VISUAL</span>
                    <span className="text-outline">•</span>
                    <span className="font-label-caps text-[10px] text-outline tracking-widest">6 MIN</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">Ojo Seco: Más que una molestia temporal</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                    Por qué el uso de gotas no siempre es la solución y cómo abordar la causa raíz de este síndrome cada vez más común.
                  </p>
                  <span className="mt-auto font-label-caps text-label-caps text-outline flex items-center gap-2">LEER MÁS <span className="material-symbols-outlined text-sm">north_east</span></span>
                </a>
              </div>
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
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <label className="font-label-caps text-[10px] uppercase tracking-widest mb-2 block opacity-60 text-primary">CORREO ELECTRÓNICO</label>
                  <div className="flex gap-4">
                    <input className="flex-1 bg-transparent border-b border-primary/30 focus:border-primary focus:ring-0 py-3 font-body-md placeholder:text-primary/40 text-primary outline-none" placeholder="tu@email.com" type="email" />
                    <button className="bg-secondary px-8 py-3 font-label-caps text-label-caps hover:bg-secondary-fixed transition-all duration-300 text-white cursor-pointer">SUSCRIBIRME</button>
                  </div>
                </div>
                <p className="font-label-caps text-[10px] opacity-40 text-primary">Privacidad garantizada. Sin spam, solo conocimiento.</p>
              </div>
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
              <a className="inline-flex items-center gap-4 bg-primary text-on-primary px-12 py-5 font-label-caps text-label-caps hover:bg-primary-container transition-all group transition-soft opacity-100 translate-y-0" href="#">
                AGENDAR CONSULTA
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">calendar_month</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
