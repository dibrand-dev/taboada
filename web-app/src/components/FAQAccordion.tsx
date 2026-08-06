'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  data: FAQItem[];
}

export default function FAQAccordion({ data }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    // Si se hace clic en el mismo que ya está abierto, se cierra. Si no, se abre el nuevo.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((faq, index) => {
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
