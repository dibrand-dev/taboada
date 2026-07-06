'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteCategoryAction } from '@/actions/categories'
import { useRouter } from 'next/navigation'

export default function DeleteCategoryButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')) return

    setLoading(true)
    const result = await deleteCategoryAction(id)
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
      title="Eliminar Categoría"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  )
}
