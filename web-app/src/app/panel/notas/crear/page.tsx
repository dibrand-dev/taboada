import NoteForm from '@/components/panel/NoteForm'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export default async function CrearNotaPage() {
  const supabase = await createClient()

  // Fetch categories and authors for the select menus
  const { data: categories } = await supabase.from('categories').select('id, name')
  const { data: authors } = await supabase.from('authors').select('id, first_name, last_name')

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Crear Nueva Nota</h1>
        <p className="text-sm text-gray-500 mt-1">Completa los campos para publicar un nuevo artículo.</p>
      </div>
      
      <NoteForm categories={categories || []} authors={authors || []} />
    </div>
  )
}
