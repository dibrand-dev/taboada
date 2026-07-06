import { createClient } from '@/lib/supabase/server'
import { FileText, CheckCircle, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Fetch metrics concurrently
  const [
    { count: totalPosts },
    { count: publishedPosts },
    { count: totalSubscribers }
  ] = await Promise.all([
    supabase.from('posts').select('*', { count: 'exact', head: true }),
    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('published', true),
    supabase.from('subscribers').select('*', { count: 'exact', head: true })
  ])

  const metrics = [
    {
      name: 'Total de Notas',
      value: totalPosts || 0,
      description: 'Notas creadas en el sistema',
      icon: FileText,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Notas Publicadas',
      value: publishedPosts || 0,
      description: 'Visibles en el sitio público',
      icon: CheckCircle,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Suscriptores',
      value: totalSubscribers || 0,
      description: 'Usuarios en el Newsletter',
      icon: Users,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-48 transition-transform hover:-translate-y-1 duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-500">{metric.name}</p>
                <p className="mt-2 text-5xl font-bold text-slate-800 tracking-tight">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-2xl ${metric.bgColor}`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">{metric.description}</p>
          </div>
        ))}
      </div>
      
      {/* Spacer for future sections */}
      <div className="h-20"></div>
    </div>
  )
}
