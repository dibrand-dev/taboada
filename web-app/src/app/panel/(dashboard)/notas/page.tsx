import Link from 'next/link'
import { getPosts } from '@/services/posts'
import { Edit, Plus } from 'lucide-react'
import DeletePostButton from '@/components/panel/DeletePostButton'

export const dynamic = 'force-dynamic'

export default async function NotasPage() {
  const posts = await getPosts() || []

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Blog (Notas)</h1>
          <p className="mt-2 text-sm text-slate-500">
            Administración de todos los artículos del blog.
          </p>
        </div>
        <Link
          href="/panel/notas/crear"
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-500 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Crear Nueva Nota
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto p-2">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 pl-6 pr-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Título</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Autor</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Categoría</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Estado</th>
                <th className="px-3 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {posts.map((post: any) => (
                <tr key={post.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 pl-6 pr-3">
                    <div className="text-sm font-medium text-slate-900">{post.title}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-slate-500">{post.authors ? `${post.authors.first_name} ${post.authors.last_name}` : '---'}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-slate-500">{post.categories?.name || '---'}</div>
                  </td>
                  <td className="px-3 py-4">
                    {post.published ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-600/10">
                        Publicado
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600 ring-1 ring-inset ring-amber-600/10">
                        Borrador
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-slate-500">{new Date(post.created_at).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/panel/notas/${post.id}/editar`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Editar Nota">
                        <Edit className="h-4 w-4" />
                      </Link>
                      <DeletePostButton id={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-sm text-slate-500">
                    No hay notas creadas todavía.
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
