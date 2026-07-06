'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/panel')
      router.refresh()
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Image Area */}
      <div className="hidden lg:flex lg:w-1/2 p-4">
        <div className="h-full w-full relative rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/login-bg.jpg"
            alt="Dra. Taboada"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Right Panel - Form Area */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 sm:px-12 lg:px-24">
        <div className="w-full max-w-md mx-auto">
          {/* Main Title & Subtitle */}
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Bienvenida, Dra. Taboada
          </h1>
          <p className="mt-4 text-slate-500 mb-10 text-sm leading-relaxed">
            Administre su contenido, notas médicas y suscriptores de forma segura y centralizada.
          </p>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                placeholder="ejemplo@correo.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
                placeholder="••••••••"
              />
              <div className="flex justify-end mt-3">
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100 flex items-center">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Ingresando...' : 'Ingresar al panel'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
