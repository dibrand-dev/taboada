import { createClient } from '@supabase/supabase-js'

export interface NotaBlog {
  id: string
  titulo: string
  slug: string
  resumen: string | null
  contenido: string
  imagen_url: string | null
  categoria: string | null
  publicada: boolean
  created_at: string
  updated_at: string
}

export function getSupabasePublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}
