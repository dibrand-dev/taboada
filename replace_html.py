import re

with open("landing_page_nueva_tipograf_a_dra._taboada/patologias.html", "r") as f:
    content = f.read()

# Replace links in header to point to index page (assuming code.html is the index page)
content = content.replace('href="#servicios"', 'href="code.html#servicios"')
content = content.replace('href="#sobre-mi"', 'href="code.html#sobre-mi"')
content = content.replace('href="#contacto"', 'href="code.html#contacto"')
content = content.replace('<title>Dra. María Cecilia Taboada | Oftalmología de Excelencia</title>', '<title>Patologías - Dra. María Cecilia Taboada</title>')

new_main = """<main class="flex-grow pt-20">
<!-- Hero Section -->
<section class="bg-[#EEF1F5] py-[120px] px-8">
<div class="max-w-[800px] mx-auto text-center flex flex-col items-center">
<div class="space-y-6">
<h1 class="font-marcellus text-[40px] md:text-[64px] font-normal leading-[1.1] tracking-[-0.02em] text-primary">
                        Patologías y<br>Condiciones Visuales
                    </h1>
<p class="font-inter text-[18px] leading-[1.6] text-on-surface-variant max-w-xl mx-auto">
                        La prevención y el diagnóstico temprano son fundamentales para preservar la salud visual. Descubra información detallada sobre las condiciones más comunes y especializadas que tratamos con excelencia clínica.
                    </p>
</div>
</div>
</section>
<!-- Filter Section -->
<section class="py-12 px-8 bg-surface-bright">
<div class="max-w-[1280px] mx-auto flex flex-wrap gap-4 items-center justify-center border-b border-outline-variant/50 pb-8">
</div>
</section>
<!-- Content Grid -->
<section class="py-[64px] md:py-[120px] px-8 bg-surface-bright">
<div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
<!-- Card 1 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="visibility">visibility</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Miopía</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Dificultad para enfocar objetos lejanos. La visión cercana suele mantenerse nítida, pero la distancia se percibe borrosa, requiriendo corrección óptica para actividades cotidianas.
                    </p>
</div>
<!-- Card 2 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="blur_on">blur_on</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Astigmatismo</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Visión distorsionada o borrosa a cualquier distancia debido a una curvatura irregular de la córnea o el cristalino, afectando la nitidez general de la imagen visual.
                    </p>
</div>
<!-- Card 3 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="zoom_in">zoom_in</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Hipermetropía</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Mayor dificultad para enfocar objetos cercanos en comparación con los lejanos. Puede causar fatiga visual y dolores de cabeza tras esfuerzo visual prolongado.
                    </p>
</div>
<!-- Card 4 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="menu_book">menu_book</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Presbicia</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Pérdida natural y progresiva de la capacidad de enfocar objetos de cerca que generalmente se manifiesta a partir de los 40 años, afectando la lectura y tareas minuciosas.
                    </p>
</div>
<!-- Card 5 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="cloud">cloud</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Cataratas</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Opacidad del cristalino natural del ojo que causa visión borrosa, disminución de la percepción de colores y mayor sensibilidad al deslumbramiento.
                    </p>
</div>
<!-- Card 6 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Glaucoma</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Enfermedad que daña el nervio óptico, frecuentemente asociada a presión intraocular elevada. Conocida como el "ladrón silencioso de la visión" por su desarrollo asintomático.
                    </p>
</div>
<!-- Card 7 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="lens_blur">lens_blur</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Queratocono</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Adelgazamiento progresivo y distorsión de la córnea, que adopta una forma cónica irregular, causando astigmatismo significativo y visión borrosa.
                    </p>
</div>
<!-- Card 8 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-error-container flex items-center justify-center text-on-error-container">
<span class="material-symbols-outlined" data-icon="emergency">emergency</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Desprendimiento de Retina</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Emergencia médica donde la retina se separa de su tejido de soporte. Síntomas incluyen destellos repentinos de luz y "moscas volantes". Requiere atención inmediata.
                    </p>
</div>
<!-- Card 9 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="center_focus_strong">center_focus_strong</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Maculopatía</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Deterioro de la mácula (parte central de la retina), resultando en la pérdida de visión central detallada, fundamental para leer, reconocer rostros y conducir.
                    </p>
</div>
<!-- Card 10 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="bloodtype">bloodtype</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Retinopatía diabética</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Complicación ocular de la diabetes causada por daño a los vasos sanguíneos del tejido sensible a la luz en el fondo del ojo (retina).
                    </p>
</div>
<!-- Card 11 -->
<div class="group bg-surface-container-lowest border border-[#EEF1F5] rounded p-[32px] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="mb-6 h-12 w-12 rounded bg-surface-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="water_drop">water_drop</span>
</div>
<h3 class="font-marcellus text-[32px] leading-[1.3] text-primary mb-4">Ojo seco</h3>
<p class="font-inter text-[16px] leading-[1.6] text-on-surface-variant flex-grow mb-8">
                        Condición frecuente donde las lágrimas no lubrican adecuadamente el ojo. Provoca sequedad, ardor e incomodidad, a menudo exacerbada por el uso de pantallas y ambientes secos.
                    </p>
</div>
</div>
</section>
</main>"""

# Replace everything between <main> and </main> (inclusive)
content = re.sub(r'<main>.*?</main>', new_main, content, flags=re.DOTALL)

with open("landing_page_nueva_tipograf_a_dra._taboada/patologias.html", "w") as f:
    f.write(content)
