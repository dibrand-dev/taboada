import UserForm from '@/components/panel/UserForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function EditarUsuarioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: author } = await supabase.from('authors').select('*').eq('id', id).single()

  if (!author) {
    notFound()
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Editar Usuario</h1>
        <p className="text-sm text-gray-500 mt-1">
          Modifica los datos personales o cambia la contraseña del usuario.
        </p>
      </div>
      <UserForm initialData={author} />
    </div>
  )
}
