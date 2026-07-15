import Head from "next/head";

export default function Patologias() {
  return (
    <>
      <main className="flex-grow pt-[72px] md:pt-[88px]">
        {/* Hero Section */}
        <section className="bg-[#EEF1F5] py-[120px] px-8">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center">
            <div className="md:col-span-7 space-y-6">
              <h1 className="font-marcellus text-[40px] md:text-[64px] font-normal leading-[1.1] tracking-[-0.02em] text-primary">
                Patologías y<br />Condiciones Visuales
              </h1>
              <p className="font-inter text-[18px] leading-[1.6] text-on-surface-variant max-w-xl">
                La prevención y el diagnóstico temprano son fundamentales para preservar la salud visual. Descubra información detallada sobre las condiciones más comunes y especializadas que tratamos con excelencia clínica.
              </p>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <div 
                className="w-full aspect-square bg-cover bg-center rounded-lg shadow-sm border border-outline-variant/30" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLAZSUTSc8ASYdSeHr2TjOLBY4wFe6-ThuWT37gwWQIIeKQl2soNrmM6evDPgInxARshZ1IbO8M_Jg1c8f3wmMsfpWdEvjh0jZ6zAtZPIYV0vU4nFr-RSdkEBFmpl_qZEnDRJHk1NP6uHmDpxi4jB2m2GFqr9cOHe0rxUtUn3ihmdLoyEULMrMoR-pYUkk2iYEuFTxDok3kB40He3ClZ_yZlaEwWj8JqNt1PzJXasE05g97yH3O5PE')"}}
              ></div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-[64px] md:py-[120px] px-8 bg-surface-bright">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Miopía</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Dificultad para enfocar objetos lejanos. La visión cercana suele mantenerse nítida, pero la distancia se percibe borrosa, requiriendo corrección óptica para actividades cotidianas.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">blur_on</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Astigmatismo</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Visión distorsionada o borrosa a cualquier distancia debido a una curvatura irregular de la córnea o el cristalino, afectando la nitidez general de la imagen visual.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">zoom_in</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Hipermetropía</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Mayor dificultad para enfocar objetos cercanos en comparación con los lejanos. Puede causar fatiga visual y dolores de cabeza tras esfuerzo visual prolongado.
              </p>
            </div>
            {/* Card 4 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Presbicia</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Pérdida natural y progresiva de la capacidad de enfocar objetos de cerca que generalmente se manifiesta a partir de los 40 años, afectando la lectura y tareas minuciosas.
              </p>
            </div>
            {/* Card 5 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Cataratas</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Opacidad del cristalino natural del ojo que causa visión borrosa, disminución de la percepción de colores y mayor sensibilidad al deslumbramiento.
              </p>
            </div>
            {/* Card 6 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Glaucoma</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Enfermedad que daña el nervio óptico, frecuentemente asociada a presión intraocular elevada. Conocida como el "ladrón silencioso de la visión" por su desarrollo asintomático.
              </p>
            </div>
            {/* Card 7 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">lens_blur</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Queratocono</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Adelgazamiento progresivo y distorsión de la córnea, que adopta una forma cónica irregular, causando astigmatismo significativo y visión borrosa.
              </p>
            </div>
            {/* Card 8 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-error-container flex items-center justify-center text-on-error-container">
                <span className="material-symbols-outlined">emergency</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Desprendimiento de Retina</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Emergencia médica donde la retina se separa de su tejido de soporte. Síntomas incluyen destellos repentinos de luz y "moscas volantes". Requiere atención inmediata.
              </p>
            </div>
            {/* Card 9 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">center_focus_strong</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Maculopatía</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Deterioro de la mácula (parte central de la retina), resultando en la pérdida de visión central detallada, fundamental para leer, reconocer rostros y conducir.
              </p>
            </div>
            {/* Card 10 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">bloodtype</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Retinopatía diabética</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Complicación ocular de la diabetes causada por daño a los vasos sanguíneos del tejido sensible a la luz en el fondo del ojo (retina).
              </p>
            </div>
            {/* Card 11 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h3 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Ojo seco</h3>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                Condición frecuente donde las lágrimas no lubrican adecuadamente el ojo. Provoca sequedad, ardor e incomodidad, a menudo exacerbada por el uso de pantallas y ambientes secos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
