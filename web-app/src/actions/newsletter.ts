'use server'

import { createClient } from '@/lib/supabase/server'

export async function subscribeToNewsletter(email: string) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Correo electrónico inválido.' }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from('subscribers')
    .insert([{ email }])

  if (error) {
    // Check for PostgreSQL unique constraint violation
    if (error.code === '23505' || error.message.includes('unique')) {
      return { error: 'Este correo ya está suscrito.' }
    }
    return { error: 'Ocurrió un error al intentar suscribirse. Inténtalo de nuevo más tarde.' }
  }

  return { success: true }
}
