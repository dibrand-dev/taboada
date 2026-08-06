'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/institutotaboada@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "Nuevo contacto desde la web",
          _template: "table",
          Nombre: data.nombre,
          Email: data.email,
          Teléfono: data.telefono,
          Mensaje: data.mensaje
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
      <h3 className="text-h3 text-primary mb-6 font-bold">Envianos tu consulta</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 text-sm font-body">
          ¡Gracias por tu mensaje! Nos pondremos en contacto a la brevedad.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 text-sm font-body">
          Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block font-allround text-sm font-bold text-primary mb-1">Nombre *</label>
          <input type="text" id="nombre" name="nombre" required className="w-full p-3 rounded-lg border border-outline-variant focus:border-vision-blue focus:ring-1 focus:ring-vision-blue outline-none transition-all font-body bg-surface-bright text-on-surface" placeholder="Tu nombre completo" />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-allround text-sm font-bold text-primary mb-1">Email *</label>
          <input type="email" id="email" name="email" required className="w-full p-3 rounded-lg border border-outline-variant focus:border-vision-blue focus:ring-1 focus:ring-vision-blue outline-none transition-all font-body bg-surface-bright text-on-surface" placeholder="tu@email.com" />
        </div>
        
        <div>
          <label htmlFor="telefono" className="block font-allround text-sm font-bold text-primary mb-1">Teléfono (Opcional)</label>
          <input type="tel" id="telefono" name="telefono" className="w-full p-3 rounded-lg border border-outline-variant focus:border-vision-blue focus:ring-1 focus:ring-vision-blue outline-none transition-all font-body bg-surface-bright text-on-surface" placeholder="Tu número de teléfono" />
        </div>
        
        <div>
          <label htmlFor="mensaje" className="block font-allround text-sm font-bold text-primary mb-1">Mensaje *</label>
          <textarea id="mensaje" name="mensaje" required rows={4} className="w-full p-3 rounded-lg border border-outline-variant focus:border-vision-blue focus:ring-1 focus:ring-vision-blue outline-none transition-all font-body bg-surface-bright resize-none text-on-surface" placeholder="¿En qué podemos ayudarte?"></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full text-white py-4 rounded-lg font-allround font-bold transition-all mt-4 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary hover:bg-secondary-fixed hover:text-petroleum active:scale-95'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
}
