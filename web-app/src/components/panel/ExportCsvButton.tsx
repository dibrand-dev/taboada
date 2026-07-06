'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ExportCsvButton() {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      const supabase = createClient()
      
      const { data, error } = await supabase
        .from('subscribers')
        .select('email, created_at')
        .order('created_at', { ascending: false })

      if (error) throw error

      if (!data || data.length === 0) {
        alert('No hay suscriptores para exportar.')
        return
      }

      // Convert to CSV
      const headers = ['Correo Electrónico', 'Fecha de Suscripción']
      const rows = data.map(sub => [
        sub.email,
        new Date(sub.created_at).toLocaleDateString('es-AR')
      ])

      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(','))
      ].join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      
      const dateStr = new Date().toISOString().split('T')[0]
      
      link.setAttribute('href', url)
      link.setAttribute('download', `suscriptores_taboada_${dateStr}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (err) {
      console.error('Error exportando CSV:', err)
      alert('Ocurrió un error al exportar los datos.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 disabled:opacity-50"
    >
      {isExporting ? (
        <svg className="animate-spin h-4 w-4 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      )}
      Exportar CSV
    </button>
  )
}
