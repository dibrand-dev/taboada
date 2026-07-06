'use client'

import { useState } from 'react'
import { subscribeToNewsletter } from '@/actions/newsletter'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const result = await subscribeToNewsletter(email)
      if (result?.error) {
        setStatus('error')
        setErrorMessage(result.error)
      } else if (result?.success) {
        setStatus('success')
        setEmail('')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Ocurrió un error inesperado.')
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-primary/5 text-primary p-6 rounded-lg border border-primary/20 flex flex-col items-center justify-center min-h-[160px]">
        <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
        <p className="font-headline-md font-bold">¡Gracias por suscribirte!</p>
        <p className="font-body-md mt-2 text-center opacity-80">Pronto recibirás nuestras novedades en tu correo.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 font-label-caps text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
        >
          Suscribir otro correo
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="relative">
        <label className="font-label-caps text-[10px] uppercase tracking-widest mb-2 block opacity-60 text-primary">CORREO ELECTRÓNICO</label>
        <div className="flex gap-4 flex-col sm:flex-row">
          <input 
            className="flex-1 bg-transparent border-b border-primary/30 focus:border-primary focus:ring-0 py-3 font-body-md placeholder:text-primary/40 text-primary outline-none disabled:opacity-50" 
            placeholder="tu@email.com" 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="bg-secondary px-8 py-3 font-label-caps text-label-caps hover:bg-secondary-fixed transition-all duration-300 text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ENVIANDO...
              </span>
            ) : 'SUSCRIBIRME'}
          </button>
        </div>
        {status === 'error' && (
          <p className="text-red-600 font-body-sm text-sm mt-3 flex items-center gap-1 font-medium bg-red-50 p-2 rounded border border-red-100">
            <span className="material-symbols-outlined text-sm">error</span> {errorMessage}
          </p>
        )}
      </div>
      <p className="font-label-caps text-[10px] opacity-40 text-primary">Privacidad garantizada. Sin spam, solo conocimiento.</p>
    </form>
  )
}
