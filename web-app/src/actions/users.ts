'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export async function createUserAction(formData: FormData) {
  const nombre = formData.get('nombre') as string
  const apellido = formData.get('apellido') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!nombre || !apellido || !email || !password) {
    return { error: 'Todos los campos son obligatorios' }
  }

  try {
    // 1. Crear usuario en Auth usando admin API
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        nombre,
        apellido
      }
    })

    if (authError) throw authError

    // 2. Crear registro en la tabla pública authors
    const { error: dbError } = await supabaseAdmin
      .from('authors')
      .insert({
        id: authData.user.id,
        first_name: nombre,
        last_name: apellido,
        email: email,
      })

    if (dbError) {
      // Intentar limpiar el usuario si falla la inserción en DB (compensación básica)
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id)
      throw dbError
    }

    revalidatePath('/panel/usuarios')
    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}

export async function updateUserAction(id: string, formData: FormData) {
  const nombre = formData.get('nombre') as string
  const apellido = formData.get('apellido') as string
  const password = formData.get('password') as string

  if (!nombre || !apellido) {
    return { error: 'Nombre y apellido son obligatorios' }
  }

  try {
    // 1. Actualizar metadatos y (opcionalmente) contraseña en Auth
    const updateData: any = {
      user_metadata: { nombre, apellido }
    }
    if (password) {
      updateData.password = password
    }

    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(id, updateData)
    if (authError) throw authError

    // 2. Actualizar tabla public.authors
    const { error: dbError } = await supabaseAdmin
      .from('authors')
      .update({
        first_name: nombre,
        last_name: apellido,
      })
      .eq('id', id)

    if (dbError) throw dbError

    revalidatePath('/panel/usuarios')
    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}

export async function deleteUserAction(id: string) {
  try {
    await supabaseAdmin.from('authors').delete().eq('id', id)
    
    const { error } = await supabaseAdmin.auth.admin.deleteUser(id)
    if (error) throw error

    revalidatePath('/panel/usuarios')
    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}
