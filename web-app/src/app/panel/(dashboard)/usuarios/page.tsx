import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus, Edit } from 'lucide-react'
import DeleteUserButton from '@/components/panel/DeleteUserButton'

export const dynamic = 'force-dynamic'

export default async function UsuariosPage() {
  const supabase = await createClient()
  const { data: authors } = await supabase.from('authors').select('*').order('first_name')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Usuarios / Autores</h1>
          <p className="mt-2 text-sm text-slate-500">
            Administración de usuarios que pueden acceder al panel y firmar notas.
          </p>
        </div>
        <Link
          href="/panel/usuarios/crear"
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-500 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Crear Usuario
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto p-2">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 pl-6 pr-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Nombre Completo</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {authors?.map((author) => (
                <tr key={author.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 pl-6 pr-3">
                    <div className="text-sm font-medium text-slate-900">{author.first_name} {author.last_name}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-slate-500">{author.email || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/panel/usuarios/${author.id}/editar`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Editar Usuario">
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeleteUserButton id={author.id} />
                    </div>
                  </td>
                </tr>
              ))}
              {(!authors || authors.length === 0) && (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-sm text-slate-500">
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
