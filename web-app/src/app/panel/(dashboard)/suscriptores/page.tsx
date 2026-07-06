import { createClient } from '@/lib/supabase/server'
import ExportCsvButton from '@/components/panel/ExportCsvButton'

export const dynamic = 'force-dynamic'

export default async function SuscriptoresPage() {
  const supabase = await createClient()

  const { data: subscribers, error } = await supabase
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Suscriptores</h1>
          <p className="mt-2 text-sm text-slate-500">Gestión de suscripciones al newsletter</p>
        </div>
        <ExportCsvButton />
      </div>

      {error && (
        <div className="rounded-2xl bg-red-50 p-4 border border-red-100">
          <p className="text-sm text-red-700 font-medium">Error al cargar suscriptores: {error.message}</p>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto p-2">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 pl-6 pr-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Correo Electrónico</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Fecha de Suscripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {subscribers && subscribers.length > 0 ? (
                subscribers.map((sub: any) => (
                  <tr key={sub.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 pl-6 pr-3">
                      <div className="text-sm font-medium text-slate-900">{sub.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-500">
                        {new Date(sub.created_at).toLocaleDateString('es-AR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="py-12 text-center text-sm text-slate-500">
                    No hay suscriptores registrados todavía.
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
