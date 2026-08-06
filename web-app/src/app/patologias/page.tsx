import Head from "next/head";

export default function Patologias() {
  return (
    <>
      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-8 text-center mb-16">
          <h1 className="font-marcellus text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-primary mb-4">
            Patologías y<br />Condiciones Visuales
          </h1>
          <p className="font-inter text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
            La Dra. Cecilia Taboada realiza el diagnóstico temprano y tratamiento preventivo para preservar la salud visual de sus pacientes.
          </p>
        </section>

        {/* Content Grid */}
        <section className="py-[64px] md:py-[120px] px-8 bg-surface-bright">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Qué es la miopía y cómo se corrige?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La Dra. Cecilia Taboada diagnostica y trata la miopía evaluando la dificultad del paciente para enfocar objetos lejanos. Este vicio de refracción se corrige mediante prescripción óptica personalizada o derivación para cirugía refractiva.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">blur_on</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Cómo afecta el astigmatismo a la visión?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                El consultorio médico trata el astigmatismo analizando la curvatura irregular de la córnea que causa visión borrosa a cualquier distancia. Su tratamiento restaura la nitidez visual mediante lentes cilíndricas de alta precisión.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">zoom_in</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Cuáles son los síntomas de la hipermetropía?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La Dra. Taboada evalúa la hipermetropía identificando la fatiga visual al enfocar objetos cercanos. La corrección médica oportuna previene dolores de cabeza crónicos tras el esfuerzo visual prolongado.
              </p>
            </div>
            {/* Card 4 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Qué es la presbicia o vista cansada?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La clínica oftalmológica aborda la presbicia corrigiendo la pérdida progresiva de enfoque en pacientes mayores de 40 años. Se indican anteojos de lectura o multifocales para restaurar la calidad de vida en tareas minuciosas.
              </p>
            </div>
            {/* Card 5 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Qué son las cataratas y cómo se tratan?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La Dra. Cecilia Taboada evalúa el desarrollo de cataratas mediante estudios del cristalino opaco y coordina procedimientos de microcirugía con lentes intraoculares premium para restaurar la nitidez visual y la percepción del color.
              </p>
            </div>
            {/* Card 6 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Qué es el glaucoma y cómo prevenir la pérdida visual?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                El consultorio realiza el despistaje temprano de glaucoma midiendo la presión intraocular y analizando el nervio óptico. El tratamiento médico previene la ceguera irreversible causada por esta enfermedad asintomática.
              </p>
            </div>
            {/* Card 7 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">lens_blur</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Cómo se detecta y trata el queratocono?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La Dra. Taboada diagnostica el queratocono analizando el adelgazamiento progresivo y la distorsión cónica de la córnea. El tratamiento estabiliza la curvatura corneal y frena la aparición de astigmatismo irregular agudo.
              </p>
            </div>
            {/* Card 8 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-error-container flex items-center justify-center text-on-error-container">
                <span className="material-symbols-outlined">emergency</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Síntomas del desprendimiento de retina</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                El desprendimiento de retina se diagnostica como una emergencia médica ante la aparición repentina de destellos de luz o moscas volantes. La intervención oftalmológica inmediata es vital para evitar la ceguera permanente.
              </p>
            </div>
            {/* Card 9 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">center_focus_strong</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Qué es la maculopatía relacionada con la edad?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La Dra. Cecilia Taboada chequea preventivamente el fondo de ojo para dilucidar la degeneración macular (DMAE). Su diagnóstico frena el deterioro del tejido central de la retina y protege la visión necesaria para leer y conducir.
              </p>
            </div>
            {/* Card 10 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">bloodtype</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Prevención de la retinopatía diabética</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                El consultorio realiza el seguimiento estricto de la retinopatía diabética detectando microlesiones en los vasos sanguíneos del tejido fotosensible. El control médico continuo previene complicaciones oculares severas derivadas de la diabetes.
              </p>
            </div>
            {/* Card 11 */}
            <div className="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h2 className="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">¿Cuáles son las causas del síndrome de ojo seco?</h2>
              <p className="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                La Dra. Taboada trata el síndrome de ojo seco evaluando la calidad de lubricación y la disfunción de las glándulas de Meibomio. El plan terapéutico con lágrimas artificiales disminuye el ardor provocado por el uso crónico de pantallas.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
