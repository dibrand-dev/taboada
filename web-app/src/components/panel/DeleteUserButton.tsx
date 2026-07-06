'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteUserAction } from '@/actions/users'
import { useRouter } from 'next/navigation'

export default function DeleteUserButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este usuario? Perderá el acceso al sistema.')) return

    setLoading(true)
    const result = await deleteUserAction(id)
    if (result.error) {
      alert(result.error)
      setLoading(false)
    } else {
      router.refresh()
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-900 disabled:opacity-50"
      title="Eliminar Usuario"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  )
}
