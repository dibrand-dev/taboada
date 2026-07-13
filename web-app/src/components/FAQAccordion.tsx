'use client';

import { useState } from 'react';

const faqData = [
  {
    question: "¿Cada cuánto tiempo debería realizar un control oftalmológico?",
    answer: "Se recomienda realizar un control oftalmológico anual preventivo, incluso si no experimenta síntomas. En casos de patologías previas o antecedentes familiares, la frecuencia puede ser mayor según indicación médica."
  },
  {
    question: "¿Es necesario consultar aunque vea bien?",
    answer: "Sí. Muchas afecciones oculares severas, como el glaucoma, son asintomáticas en sus primeras etapas. La detección temprana mediante controles de rutina es fundamental para preservar la salud visual a largo plazo."
  },
  {
    question: "¿Qué estudios pueden realizarse durante la consulta?",
    answer: "La consulta estándar incluye toma de agudeza visual, refracción, toma de presión ocular y examen de fondo de ojo. Dependiendo de los hallazgos, se pueden solicitar estudios complementarios más específicos."
  },
  {
    question: "¿Atienden pacientes con obras sociales y prepagas?",
    answer: "Trabajamos de manera particular y emitimos factura para que pueda gestionar el reintegro con su obra social o prepaga. Por favor, consulte con su cobertura los requisitos para este trámite."
  },
  {
    question: "¿Cuándo consultar por visión borrosa?",
    answer: "Si experimenta visión borrosa repentina, es un motivo de consulta urgente. Si la visión borrosa es gradual o intermitente, debe agendar un turno a la brevedad para una evaluación completa."
  },
  {
    question: "¿El uso de pantallas puede afectar la visión?",
    answer: "El uso prolongado de pantallas puede causar fatiga visual, ojo seco y dificultad para enfocar. Recomendamos pausas periódicas (regla 20-20-20) y controles para evaluar la necesidad de corrección o lágrimas artificiales."
  },
  {
    question: "¿Realizan controles preventivos?",
    answer: "Absolutamente. La oftalmología preventiva es uno de nuestros pilares. Realizamos despistaje de glaucoma, control de retinopatía diabética y seguimiento de miopía, entre otros controles preventivos."
  },
  {
    question: "¿Cómo solicito un turno?",
    answer: "Puede solicitar su turno fácilmente haciendo clic en el botón \"AGENDÁ UNA CONSULTA\" en la parte superior de la página, o comunicándose vía WhatsApp a nuestro número de contacto."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    // Si se hace clic en el mismo que ya está abierto, se cierra. Si no, se abre el nuevo.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 transition-all duration-300">
            <button 
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" 
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg text-primary">{faq.question}</span>
              <span 
                className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              >
                expand_more
              </span>
            </button>
            <div 
              className={`px-6 text-on-surface-variant transition-[max-height,opacity,padding] duration-300 ease-out overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100 pb-0' : 'max-h-0 opacity-0 pb-0'
              }`}
            >
              <div className="pb-5 border-t border-outline-variant/10 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
