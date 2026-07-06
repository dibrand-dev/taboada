'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserAction, updateUserAction } from '@/actions/users'

interface UserFormProps {
  initialData?: any // { id, first_name, last_name, email }
}

export default function UserForm({ initialData }: UserFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    
    let result
    if (initialData) {
      result = await updateUserAction(initialData.id, formData)
    } else {
      result = await createUserAction(formData)
    }
    
    if (result.error) {
      setError(result.error)
      setLoading(false)
    } else {
      router.push('/panel/usuarios')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {error && <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>}
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            required
            type="text"
            name="nombre"
            defaultValue={initialData?.first_name || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Apellido</label>
          <input
            required
            type="text"
            name="apellido"
            defaultValue={initialData?.last_name || ''}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email (Usuario)</label>
        <input
          required
          type="email"
          name="email"
          defaultValue={initialData?.email || ''}
          disabled={!!initialData} // Usually changing email is complex, better to disable in edit
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 disabled:bg-gray-100 disabled:text-gray-500"
        />
        {initialData && <p className="text-xs text-gray-500 mt-1">El email no se puede modificar.</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña {initialData && <span className="text-gray-400 font-normal">(Dejar en blanco para mantener la actual)</span>}
        </label>
        <input
          required={!initialData}
          type="password"
          name="password"
          minLength={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Guardando...' : initialData ? 'Guardar Cambios' : 'Crear Usuario'}
        </button>
      </div>
    </form>
  )
}
