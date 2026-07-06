import NoteForm from '@/components/panel/NoteForm'
import { getPostById } from '@/services/posts'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function EditarNotaPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const post = await getPostById(id)
    const supabase = await createClient()

    // Fetch categories and authors for the select menus
    const { data: categories } = await supabase.from('categories').select('id, name')
    const { data: authors } = await supabase.from('authors').select('id, first_name, last_name')

    return (
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Editar Nota</h1>
          <p className="text-sm text-gray-500 mt-1">Modifica los campos del artículo existente.</p>
        </div>
        
        <NoteForm initialData={post} categories={categories || []} authors={authors || []} />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
