'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function subscribeToNewsletter(email: string) {
  if (!email) {
    return { error: 'El correo electrónico es obligatorio.' }
  }

  if (email.length > 320) {
    return { error: 'El correo no puede exceder los 320 caracteres.' }
  }

  const parts = email.split('@')
  if (parts.length !== 2) {
    return { error: 'Formato de correo electrónico inválido.' }
  }

  const [localPart, domainPart] = parts
  if (localPart.length > 64) {
    return { error: 'La parte local del correo (antes del @) no puede exceder los 64 caracteres.' }
  }
  if (domainPart.length > 255) {
    return { error: 'El dominio del correo no puede exceder los 255 caracteres.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'El formato del correo electrónico es inválido.' }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from('subscribers')
    .insert([{ email }])

  if (error) {
    // Check for PostgreSQL unique constraint violation
    if (error.code === '23505' || error.message.includes('unique')) {
      return { error: 'Este correo ya se encuentra suscrito a nuestro newsletter.' }
    }
    return { error: 'Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.' }
  }

  return { success: true }
}

export async function deleteSubscriber(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('subscribers')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: 'No se pudo eliminar el suscriptor.' }
  }

  revalidatePath('/panel/suscriptores')
  return { success: true }
}
