import CategoryForm from '@/components/panel/CategoryForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function EditarCategoriaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: cat } = await supabase.from('categories').select('*').eq('id', id).single()

  if (!cat) {
    notFound()
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Editar Categoría</h1>
        <p className="text-sm text-gray-500 mt-1">
          Modifica el nombre y slug de la categoría.
        </p>
      </div>
      <CategoryForm initialData={cat} />
    </div>
  )
}
