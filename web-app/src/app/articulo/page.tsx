import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Articulo() {
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
                  <span className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 font-label-caps text-label-caps rounded-full uppercase">Salud Visual</span>
                  <span className="text-on-surface-variant font-label-caps text-label-caps flex items-center">
                    <span className="material-symbols-outlined text-sm mr-1">schedule</span> 8 min de lectura
                  </span>
                </div>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
                  Presbicia y Calidad de Vida: Nuevas Fronteras en el Cuidado Ocular
                </h1>
                <p className="font-subtitle-lg text-subtitle-lg text-on-surface-variant mb-8 max-w-2xl">
                  Entender el proceso natural de envejecimiento de nuestra visión es el primer paso para mantener una vida activa, plena y conectada con lo que más nos importa.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                    <img className="w-full h-full object-cover" alt="Dra. María Cecilia Taboada" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsTVrX_2er0NJP4fUIYy-Ycpyrpb__LH2nhLMM3vzvbAxbyYpdZEwvnvJOI6HziihMU_qy-QToixPDlMpnCb_ZZE5tMZ0vRFpAKF7kMKaPafJgC3fsL7zpzW4QsjWDWFNk8vvx8WxHB310N0a-euySZbhrL0wtIYVEXIcH0pySoBg73yrL2vPN6p9K8UekZJC0u1rNwrTgNu173CmSKKV0EYP5_GMAYRmp2iJCpMQPZ7ZU7tqgjh0O" />
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary">Escrito por</p>
                    <p className="font-body-md text-body-md font-bold text-primary">Dra. María Cecilia Taboada</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-sm border border-outline-variant/10">
                  <img className="w-full h-full object-cover" alt="Article main image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZK0TsjuTypNql2Tqn1Pm-JUuOG-IZ5v5wbM5cv93m_Y5uUG7dHb6ITV8hxOof4Fc7XYCAh68odDzDHVKxlWomo2v7mb4SOJmi9PxeGGw5Mf6YMkDmdIl3vYzN_RWkSQJLFF-mkR1LGfQdLq7MtKjPh7A9OmrhMNHZEWo9gaxpSDtLXrOc0fZNbJSasw-2YM9-gpezAvPRiBZYX9KFi7NLbawxODnZcOTK8tTIVisXdWXaf-M38UH" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section 2: Contenido & Reading Experience */}
        <article className="px-margin-safe pb-section-gap-desktop bg-surface-bright">
          <div className="max-w-[720px] mx-auto">
            {/* Bloque Lo más importante */}
            <div className="bg-surface-container-low p-8 md:p-10 mb-12 border-l-4 border-secondary">
              <h3 className="font-label-caps text-label-caps text-secondary mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">lightbulb</span> LO MÁS IMPORTANTE
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1">check_circle</span>
                  <span className="font-body-lg text-body-lg text-on-surface">La presbicia es una condición natural y reversible con el tratamiento adecuado.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1">check_circle</span>
                  <span className="font-body-lg text-body-lg text-on-surface">Los avances en lentes intraoculares permiten hoy una visión nítida a todas las distancias.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1">check_circle</span>
                  <span className="font-body-lg text-body-lg text-on-surface">El diagnóstico temprano previene la fatiga visual y dolores de cabeza crónicos.</span>
                </li>
              </ul>
            </div>
            
            <div className="prose prose-neutral max-w-none prose-blockquote:border-l-2 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-on-surface-variant">
              <h2 className="font-headline-md text-headline-md text-primary mt-12 mb-6">El viaje hacia la visión clara</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                A medida que avanzamos en la vida, nuestro cristalino pierde gradualmente su flexibilidad. Este cambio biológico, lejos de ser un impedimento, es una oportunidad para adoptar nuevas tecnologías y hábitos que protejan nuestra salud ocular a largo plazo.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                En la consulta diaria, observamos que muchos pacientes intentan postergar el uso de corrección visual, sin saber que el esfuerzo constante por enfocar puede derivar en síntomas que afectan su productividad y bienestar emocional.
              </p>
              <blockquote className="my-10 italic">
                <p className="font-headline-md text-headline-md leading-relaxed text-primary">&quot;La visión no es solo un sentido; es la ventana a través de la cual conectamos con el mundo y con nuestros seres queridos.&quot;</p>
              </blockquote>
              <h3 className="font-subtitle-lg text-subtitle-lg text-primary mt-10 mb-4">Opciones de Tratamiento Moderno</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Desde soluciones no invasivas hasta intervenciones de alta precisión, la oftalmología moderna ofrece un abanico de posibilidades personalizadas según el estilo de vida de cada paciente:
              </p>
              <ul className="list-disc pl-6 space-y-3 font-body-lg text-body-lg text-on-surface-variant mb-10">
                <li>Lentes multifocales de alta gama con filtros de luz azul.</li>
                <li>Cirugía refractiva láser de última generación.</li>
                <li>Implantes de lentes intraoculares Premium.</li>
              </ul>

              {/* Recuadro Cuándo pedir turno */}
              <div className="bg-surface-container-high/50 p-8 md:p-10 rounded-xl my-16 border border-outline-variant/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">¿Cuándo deberías pedir un turno?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <span className="material-symbols-outlined text-secondary">warning</span>
                        <span className="font-body-md text-body-md">Visión borrosa al leer de cerca.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="material-symbols-outlined text-secondary">warning</span>
                        <span className="font-body-md text-body-md">Necesidad de más luz para ver.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="material-symbols-outlined text-secondary">warning</span>
                        <span className="font-body-md text-body-md">Dolores de cabeza frecuentes.</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="material-symbols-outlined text-secondary">warning</span>
                        <span className="font-body-md text-body-md">Fatiga visual al usar pantallas.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Intermedio */}
              <div className="text-center py-12 border-y border-outline-variant/20 my-16">
                <h4 className="font-headline-md text-headline-md text-primary mb-6">¿Tenés dudas sobre este tema?</h4>
                <button className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-secondary transition-all transform hover:-translate-y-1">
                  Solicitar una consulta
                </button>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Finalmente, es fundamental recordar que cada ojo es único. Lo que funciona para una persona puede no ser lo ideal para otra. Por ello, la personalización del diagnóstico es el pilar de nuestro enfoque en la clínica.
              </p>
            </div>
          </div>
        </article>

        {/* Section 3: Artículos Relacionados */}
        <section className="bg-surface-container-lowest py-section-gap-desktop px-margin-safe border-t border-outline-variant/20">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-12 text-center">Continúa leyendo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Related Card 1 */}
              <Link href="/articulo" className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 rounded-lg">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Related article" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlay4PgM0NaDlxML_nB1k0OohV2Q1qVRIfFYEZocjFhWqNDIOBJR3b_vJUIsKjPmKb4F7zZssXHmDhyb1OGn4f2OWEHNbitU5aGM6_mz-ysWBdrl4wF6LAoHP0zis_hBvYm8-hJYd26QNsne1xeCfyjf7bFGQX17n5orKy9Enuv3_f-Um-8zG-7_pHLPcBI5Z-g_jBEvZOa0y7pXIN08ku57RPhyZKU0lktVzM_To2PJyPgN4gXbz" />
                </div>
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">TECNOLOGÍA</span>
                <h3 className="font-subtitle-lg text-subtitle-lg text-primary group-hover:text-secondary transition-colors mb-4">Lentes Premium: ¿Valen realmente la pena?</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Exploramos la ciencia detrás de los cristales de alta gama y cómo impactan en tu descanso visual diario.</p>
              </Link>
              {/* Related Card 2 */}
              <Link href="/articulo" className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 rounded-lg">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Related article" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMT6IbjlWzXSIUjFYX-ZbD0wMDLn-_GPvYaAjWsRJBquokE_qOp5DDsAVY-PiOXW5HtFy6yLpl7pgT4kRJTcMa_eh9fI7NcCTheUtoy2-LXOgIZ4xyHsj8LwNXe1Vnq8M4fvIm1Vi1tS1x8oJq7y7ByUU4J0xUDKhcD3Cku0jYiFWIy7ApTANNBhL8SEAukxypZkR_ePUeaT7PCiGhNtxFfALrIzzJhYR33ydNDtHxmc5xpNO9pbzl" />
                </div>
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">PREVENCIÓN</span>
                <h3 className="font-subtitle-lg text-subtitle-lg text-primary group-hover:text-secondary transition-colors mb-4">Fatiga Digital: La epidemia silenciosa</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">5 consejos prácticos para proteger tus ojos mientras trabajas frente a pantallas de alta resolución.</p>
              </Link>
              {/* Related Card 3 */}
              <Link href="/articulo" className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6 rounded-lg">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Related article" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeIRDCSFj_JnzYgaCev793o8RhTvsAjmppD_F85FEGdeGnPVnzBVj3gne2_Z_uukQMiygVa5MODTwb3OXKwYgP3QRzwIVOIRoycpdG6n5M42Bt9LZpcnUsWlFIBpNYXwQSDMv_YUgui15dkPMU29S4mOEuXcCklj0oAfVshECmbTgkecu1OGGObSHpsc-1sYt4Sk6vXnuXiaPQ1mBeyyYFo__WiyGRQF8RdroEpAFS_SE9Vb0upgt0" />
                </div>
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">DIAGNÓSTICO</span>
                <h3 className="font-subtitle-lg text-subtitle-lg text-primary group-hover:text-secondary transition-colors mb-4">Innovaciones en Cirugía de Cataratas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Cómo la microcirugía láser está transformando la recuperación visual en menos de 24 horas.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: CTA Final */}
        <section className="bg-petroleum py-24 px-margin-safe relative overflow-hidden">
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
            <button className="bg-white text-[#115565] px-12 py-5 font-label-caps text-label-caps tracking-widest hover:bg-[#b1ecff] transition-all transform hover:scale-105 shadow-xl">
              Agendar consulta
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
