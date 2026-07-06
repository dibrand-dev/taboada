'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { deletePost } from '@/services/posts'

export default function DeletePostButton({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta nota? Esta acción no se puede deshacer.')) {
      return
    }
    
    setLoading(true)
    try {
      await deletePost(id)
      router.refresh()
    } catch (error) {
      alert('Error eliminando la nota')
      setLoading(false)
    }
  }

  return (
    <button 
      onClick={handleDelete} 
      disabled={loading}
      className="text-red-600 hover:text-red-900 disabled:opacity-50"
      title="Eliminar Nota"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  )
}
