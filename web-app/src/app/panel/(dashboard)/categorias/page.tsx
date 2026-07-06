import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus, Edit } from 'lucide-react'
import DeleteCategoryButton from '@/components/panel/DeleteCategoryButton'

export const dynamic = 'force-dynamic'

export default async function CategoriasPage() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from('categories').select('*').order('name')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Categorías</h1>
          <p className="mt-2 text-sm text-slate-500">
            Administración de las categorías para los artículos del blog.
          </p>
        </div>
        <Link
          href="/panel/categorias/crear"
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-500 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Crear Categoría
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto p-2">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 pl-6 pr-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Nombre</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Slug</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Fecha de Creación</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {categories?.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 pl-6 pr-3">
                    <div className="text-sm font-medium text-slate-900">{cat.name}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-slate-500">{cat.slug}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-slate-500">{new Date(cat.created_at).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/panel/categorias/${cat.id}/editar`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Editar Categoría">
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeleteCategoryButton id={cat.id} />
                    </div>
                  </td>
                </tr>
              ))}
              {(!categories || categories.length === 0) && (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-sm text-slate-500">
                    No hay categorías registradas.
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
