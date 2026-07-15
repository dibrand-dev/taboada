import Link from "next/link";


export default function Home() {
  return (
    <>

      <main>
        {/* 02. SECTION 1: HERO */}
        <section className="relative min-h-[921px] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 transition-all duration-1000 opacity-100 translate-y-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/hero-couple-v2.jpg")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            </div>
          </div>
          <div className="container mx-auto px-gutter relative z-10 transition-all duration-1000 opacity-100 translate-y-0">
            <div className="max-w-3xl">
              <h1 className="text-h1-mobile md:text-h1 text-primary mb-6 leading-tight">
                Cuidamos tu visión para que disfrutes cada momento de tu vida con tranquilidad y confianza.
              </h1>
              <h3 className="text-h3 text-secondary mb-10 max-w-xl">
                La salud visual influye en mucho más que lo que ves. Impacta en tu bienestar, tu rendimiento y tu calidad de vida. Por eso ofrecemos una atención oftalmológica integral, personalizada y respaldada por tecnología de última generación..
              </h3>
              <a href="https://wa.me/5491171121934?text=Hola%2C%20te%20contacto%20desde%20la%20web%20porque%20quiero%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-container text-on-primary px-8 py-5 rounded-lg text-body-lg font-semibold hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/10">
                AGENDÁ UNA CONSULTA
              </a>
            </div>
          </div>
        </section>

        {/* 03. VISUAL TRANSITION */}
        <div className="relative w-full overflow-hidden leading-[0] -mt-1 z-10">
          <svg className="w-full h-auto" fill="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120V46.6667C240 10 480 83.3333 720 46.6667C960 10 1200 83.3333 1440 46.6667V120H0Z" fill="white"></path>
          </svg>
        </div>

        {/* 04. SECTION 2: PHILOSOPHY INTRO */}
        <section className="bg-white py-section-gap-mobile md:py-section-gap-desktop">
          <div className="container mx-auto px-gutter transition-all duration-1000 opacity-100 translate-y-0">
            <div className="max-w-4xl mx-auto text-center md:text-left">
              <h2 className="text-h2 md:text-h1 text-secondary mb-12 italic leading-tight">
                La visión es una capacidad esencial para vivir con autonomía, seguridad y bienestar.
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-primary">
                <p className="text-body-lg leading-relaxed opacity-90">
                  Vivimos en un mundo donde nuestros ojos trabajan cada vez más. Pantallas, largas jornadas laborales, actividades deportivas y el paso del tiempo generan cambios que muchas veces aparecen de forma silenciosa.<br />Por eso creemos en una medicina preventiva y personalizada.
                </p>
                <div className="text-body-lg leading-relaxed opacity-90">
                  <p>Nos tomamos el tiempo necesario para conocerte, comprender tus hábitos y realizar una evaluación integral de tu salud visual.</p>
                  <p className="mt-4">Nuestro objetivo no es solamente diagnosticar una enfermedad cuando aparece, sino ayudarte a preservar tu visión para que puedas seguir disfrutando de aquello que hace bien a tu vida.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. SECTION 3: PILLARS */}
        <section className="bg-vision-blue/5 py-section-gap-mobile md:py-section-gap-desktop" id="servicios">
          <div className="container mx-auto px-gutter transition-all duration-1000 opacity-100 translate-y-0">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white p-10 rounded-2xl border border-outline-variant/20 hover:border-vision-blue/40 transition-colors group">
                <div className="w-16 h-16 bg-vision-blue/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-vision-blue group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">center_focus_strong</span>
                </div>
                <h4 className="text-h4 text-primary mb-4">Mirada Integral</h4>
                <div className="text-on-surface-variant leading-relaxed">
                  <h3 className="text-h3 mb-2">Tu visión forma parte de tu bienestar.</h3>
                  <p className="text-body-md">Cada persona tiene necesidades diferentes. Analizamos cómo influyen tus hábitos, tu trabajo, el uso de dispositivos digitales y tu estilo de vida para encontrar las mejores soluciones para vos.</p>
                </div>
              </div>
              {/* Pillar 2 */}
              <div className="bg-white p-10 rounded-2xl border border-outline-variant/20 hover:border-vision-blue/40 transition-colors group">
                <div className="w-16 h-16 bg-vision-blue/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-vision-blue group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
                <h4 className="text-h4 text-primary mb-4">Tecnología de Alta Precisión</h4>
                <div className="text-on-surface-variant leading-relaxed">
                  <h3 className="text-h3 mb-2">Innovación al servicio del diagnóstico.</h3>
                  <p className="text-body-md">Contamos con equipamiento de alta complejidad que permite detectar alteraciones en etapas tempranas y realizar estudios con un alto nivel de precisión. La tecnología es una herramienta para brindar diagnósticos más seguros y tratamientos más oportunos.</p>
                </div>
              </div>
              {/* Pillar 3 */}
              <div className="bg-white p-10 rounded-2xl border border-outline-variant/20 hover:border-vision-blue/40 transition-colors group">
                <div className="w-16 h-16 bg-vision-blue/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-vision-blue group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h4 className="text-h4 text-primary mb-4">Atención Personalizada</h4>
                <div className="text-on-surface-variant leading-relaxed">
                  <h3 className="text-h3 mb-2">Tiempo, escucha y acompañamiento.</h3>
                  <p className="text-body-md">Creemos que una buena consulta comienza escuchando. Cada paciente recibe una atención cercana, sin apuros y enfocada en resolver sus necesidades con claridad y confianza.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. SECTION 4: ABOUT THE DOCTOR */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-white" id="sobre-mi">
          <div className="container mx-auto px-gutter transition-all duration-1000 opacity-100 translate-y-0">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <img alt="Dra. María Cecilia Taboada" className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" src="/directora.png?v=2" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-label-caps text-secondary tracking-widest block mb-4 text-badge">Sobre la Directora</span>
                <h2 className="text-h2 md:text-h1-mobile text-primary mb-8 leading-tight">Una trayectoria basada en la excelencia médica y la atención personalizada.</h2>
                <div className="space-y-6 text-on-surface-variant text-body-lg">
                  <p>Soy la Dra. María Cecilia Taboada, médica oftalmóloga, y desde hace años acompaño a personas de distintas edades en el cuidado de su salud visual.</p>
                  <p>Mi compromiso es ofrecer una medicina de excelencia, respaldada por formación continua, experiencia clínica y tecnología de última generación, sin perder nunca el trato humano que cada paciente merece.</p>
                  <p>Creo que una consulta médica debe ser un espacio de confianza, donde cada persona pueda comprender su situación, resolver sus dudas y participar activamente en las decisiones sobre su salud.</p>
                  <p>Porque cuidar la visión también es cuidar la calidad de vida.</p>
                  <p className="font-semibold italic">Especializada en alta complejidad, su práctica se distingue por la personalización absoluta, entendiendo que cada par de ojos cuenta la historia de un individuo, sus hábitos y sus ambiciones.</p>
                  <div className="pt-8 border-t border-outline-variant/30">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary">location_on</span>
                      <p className="text-secondary font-bold uppercase text-label-caps tracking-wider text-badge">ATENCIÓN EN EL instituto taboada, centro de referencia en oftalmología de alta complegidad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07. SECTION 5: RESOURCES */}
        <section className="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop" style={{ backgroundColor: 'rgb(238, 241, 245)' }}>
          <div className="container mx-auto px-gutter transition-all duration-1000 opacity-100 translate-y-0">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-h2 md:text-h1-mobile text-primary mb-4">Recursos para cuidar tu visión</h2>
              <p className="text-h3 text-on-surface-variant">Información confiable para cuidar tu salud visual en cada etapa de la vida.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img alt="Control Oftalmológico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkoiCNPkHLew9pNF3WonEG2Elq-ynKfgFQ_C0kpl0uha_cukuHckoPiHtzxSfipsmjWOvP92fPHnRlOWBuSPOoXrYcwbGFvDGYPgL0KMsUxqFBgnRz-NUuqbMDmrYnvWv1SqPelk8sSh16Wq1FbpfBf9o5MnQ79_isKDwl22nNN0RxMfwlQbVxlqZ1bgL3-FY8Nff65EeYUhrVvT03_op7i97evYAbDJ_qTUfrppImQAPL4hgBYJl" />
                </div>
                <div className="p-8">
                  <span className="text-label-caps text-secondary font-bold mb-3 block text-badge">Control Oftalmológico</span>
                  <h4 className="text-h4 text-primary mb-4 leading-tight">¿Cada cuánto tiempo conviene realizar un control oftalmológico?</h4>
                  <p className="text-on-surface-variant mb-6 text-body-md">Conocé por qué los controles preventivos permiten detectar enfermedades antes de que aparezcan síntomas.</p>
                  <button className="text-secondary font-bold text-label-caps flex items-center gap-2 hover:gap-3 transition-all text-button-primary">
                    Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img alt="Pantallas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTnPhIGLtMR8W3qvhGCrJA0UoVzBArk1zeRuEUzJqQQ6ZbdcVbK1o8rYshYASMmzh6kcrmkuNIhYrkva9i_82aSLzfNBlG5ZYaPjEQZwBMhYvuJXFiNEh7h-yn92Bqip_AWBM9x1nFFvObv-gNOf0blhbQRXHU1FhfJdj9rZmAm5sCbry0CuAkTE4MIzVNCB3NgNIOdLDwRxQaOh8eRnFMv0MgEIutF2-3i3VdPgH1TophtqHO5mxB" />
                </div>
                <div className="p-8">
                  <span className="text-label-caps text-secondary font-bold mb-3 block text-badge">Pantallas</span>
                  <h4 className="text-h4 text-primary mb-4 leading-tight">Fatiga visual: cómo afectan las pantallas a tus ojos</h4>
                  <p className="text-on-surface-variant mb-6 text-body-md">Qué síntomas son normales, cuáles requieren consulta y cómo proteger tu visión durante la jornada laboral.</p>
                  <button className="text-secondary font-bold text-label-caps flex items-center gap-2 hover:gap-3 transition-all text-button-primary">
                    Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img alt="Después de los 40" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAykREMrSBFGIH6p1KzGtMoKwCx3vZuqw9Yp6ks_Kpi8JsvMU5z1zqiGx_t953G7qJ1oQrZqU2bCB-Ir9YhpmL7_IXLjG2WJzbEsSyiglUIyrbXt80rbAhiQcptDBtWPCdCxxGbyg_RjrU6rIOWb97-h0JzHYUOvoiCIiCWVVGN3VR6KfqjlDSeCPOaZ5HzCteV7AbF0yr1CWzxesuEIO3F1j4KFPjamDuHwrTauPUh_zRG-_4poM9F" />
                </div>
                <div className="p-8">
                  <span className="text-label-caps text-secondary font-bold mb-3 block text-badge">Después de los 40</span>
                  <h4 className="text-h4 text-primary mb-4 leading-tight">Los cambios naturales de la visión a partir de los 40 años</h4>
                  <p className="text-on-surface-variant mb-6 text-body-md">Entendé qué ocurre con la vista con el paso del tiempo y cuándo es recomendable consultar.</p>
                  <button className="text-secondary font-bold text-label-caps flex items-center gap-2 hover:gap-3 transition-all text-button-primary">
                    Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-12">
              <Link href="/recursos" className="inline-block px-10 py-4 border border-secondary text-secondary rounded-lg text-button-primary hover:bg-secondary hover:text-white transition-all uppercase">
                Ver todos los recursos
              </Link>
              <blockquote className="max-w-2xl text-center text-on-surface-variant italic text-blockquote opacity-80">
                Creemos que un paciente informado toma mejores decisiones sobre su salud. Por eso compartimos contenidos desarrollados con el mismo criterio científico que aplicamos en cada consulta.
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-petroleum relative" id="contacto">
          <div className="container mx-auto px-gutter text-center relative z-10 transition-all duration-1000 opacity-100 translate-y-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 md:text-h1-mobile text-white mb-6">
                Tu salud visual merece el tiempo, la dedicación y la excelencia que hacen la diferencia.
              </h2>
              <p className="text-h3 text-white/80 mb-12">
                Agendá una consulta y realizá una evaluación integral para conocer el estado de tu visión y recibir un diagnóstico personalizado.
              </p>
              <a href="https://wa.me/5491171121934?text=Hola%2C%20te%20contacto%20desde%20la%20web%20porque%20quiero%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-petroleum px-12 py-5 rounded-lg text-body-lg font-bold hover:bg-secondary-fixed transition-all hover:scale-105 active:scale-95 duration-300">
                AGENDÁ UNA CONSULTA
              </a>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
