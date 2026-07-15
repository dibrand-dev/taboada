import FAQAccordion from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <main className="flex-grow pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl text-primary mb-4">Preguntas Frecuentes</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Encuentra respuestas a las dudas más comunes sobre consultas, tratamientos y cuidado preventivo de su visión.
        </p>
      </section>

      {/* FAQ Container */}
      <section className="max-w-3xl mx-auto px-6 py-12 rounded-xl bg-[#f6fbfc]">
        <FAQAccordion />
      </section>
    </main>
  );
}
