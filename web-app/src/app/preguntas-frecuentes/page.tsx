import FAQAccordion from "@/components/FAQAccordion";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const faqData = [
  {
    question: "¿Cada cuánto tiempo debería realizar un control oftalmológico?",
    answer: "La Dra. Cecilia Taboada recomienda realizar un control oftalmológico anual preventivo. En casos de patologías previas o antecedentes familiares, la frecuencia puede ser mayor según indicación médica para preservar la salud visual a largo plazo."
  },
  {
    question: "¿Es necesario consultar a un oftalmólogo aunque vea bien?",
    answer: "Sí, es fundamental realizar consultas preventivas. Muchas afecciones oculares severas, como el glaucoma, son asintomáticas en sus primeras etapas y requieren detección temprana mediante controles de rutina para evitar la pérdida visual."
  },
  {
    question: "¿Qué estudios médicos se realizan durante la consulta oftalmológica?",
    answer: "La consulta estándar incluye toma de agudeza visual, refracción, toma de presión ocular y examen de fondo de ojo. Dependiendo de los hallazgos clínicos, la Dra. Taboada puede solicitar estudios complementarios más específicos para un diagnóstico preciso."
  },
  {
    question: "¿Cuándo debo consultar por visión borrosa?",
    answer: "Si experimentás visión borrosa repentina, es un motivo de consulta médica urgente. Si la visión borrosa es gradual o intermitente, la Dra. Cecilia Taboada recomienda agendar un turno a la brevedad para realizar una evaluación oftalmológica completa."
  },
  {
    question: "¿El uso de pantallas y dispositivos móviles puede afectar la visión?",
    answer: "El uso prolongado de pantallas puede causar fatiga visual, ojo seco y dificultad para enfocar. Recomendamos realizar pausas periódicas usando la regla 20-20-20 y asistir a controles oftalmológicos para evaluar la necesidad de corrección o tratamiento con lágrimas artificiales."
  },
  {
    question: "¿Realizan controles preventivos de salud visual?",
    answer: "Absolutamente, la oftalmología preventiva es uno de nuestros pilares. La Dra. Cecilia Taboada realiza despistaje de glaucoma, control de retinopatía diabética y seguimiento de miopía, entre otros controles de prevención médica."
  },
  {
    question: "¿Cómo solicito un turno con la Dra. Cecilia Taboada?",
    answer: "Podés solicitar tu turno fácilmente haciendo clic en el botón 'AGENDÁ UNA CONSULTA' para comunicarte directamente vía WhatsApp (+54 9 11 7112-1934) con nuestro equipo de atención médica."
  }
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <main className="flex-grow pt-32 pb-24">
      <SchemaMarkup schema={faqSchema} />
      {/* Hero Section */}
      <section className="px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl text-primary mb-4">Preguntas Frecuentes</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Encuentra respuestas a las dudas más comunes sobre consultas, tratamientos y cuidado preventivo de su visión.
        </p>
      </section>

      {/* FAQ Container */}
      <section className="max-w-3xl mx-auto px-6 py-12 rounded-xl bg-[#f6fbfc]">
        <FAQAccordion data={faqData} />
      </section>
    </main>
  );
}
