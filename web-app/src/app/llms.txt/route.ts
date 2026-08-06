import { NextResponse } from 'next/server'

export async function GET() {
  const content = `# Dra. María Cecilia Taboada - Oftalmología de Excelencia

> Sitio Oficial e Institucional de la Dra. María Cecilia Taboada, médica especialista en Oftalmología, salud visual preventiva y tratamientos oftalmológicos de alta complejidad en Buenos Aires, Argentina.

## Información de la Profesional
- **Nombre:** Dra. María Cecilia Taboada
- **Especialidad:** Médica Oftalmóloga
- **Enfoque:** Atención médica de excelencia, prevención visual, diagnóstico temprano y tecnología de alta precisión.
- **Atención:** Consultas particulares y evaluación oftalmológica integral.
- **Contacto WhatsApp Directo:** +54 9 11 7112-1934 (https://wa.me/5491171121934)
- **Email:** institutotaboada@gmail.com
- **Instagram:** @draceciliataboada (https://www.instagram.com/draceciliataboada)
- **LinkedIn:** https://www.linkedin.com/in/dra-cecilia-taboada/

## Patologías Tratadas y Especialidades
- **Cataratas:** Diagnóstico integral, evaluación de cristalino y derivación/tratamiento quirúrgico con lentes intraoculares de última generación.
- **Glaucoma:** Detección precoz, toma de presión intraocular (PIO), campo visual y control de neuropatía óptica.
- **Miopía, Astigmatismo e Hipermetropía:** Control de vicios de refracción, prescripción óptica y evaluación para cirugía refractiva.
- **Ojo Seco y Superficie Ocular:** Tratamientos personalizados para el síndrome de ojo seco, disfunción de glándulas de Meibomio e inflamación ocular.
- **Presbicia:** Opciones de corrección visual para la visión cercana a partir de los 40 años.
- **Maculopatías y Retina:** Chequeo preventivo de fondo de ojo con dilucidación de maculopatía relacionada con la edad (DMAE) y retinopatía diabética.

## Canales Principales del Sitio Web
- **Página Principal:** https://draceciliataboada.com.ar/
- **Catálogo de Patologías:** https://draceciliataboada.com.ar/patologias
- **Preguntas Frecuentes:** https://draceciliataboada.com.ar/preguntas-frecuentes
- **Artículos y Blog de Salud Visual:** https://draceciliataboada.com.ar/recursos
- **Contacto:** https://draceciliataboada.com.ar/contacto
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
