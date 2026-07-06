'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createCategoryAction(formData: FormData) {
  const name = formData.get('name') as string
  const slug = formData.get('slug') as string

  if (!name || !slug) {
    return { error: 'El nombre y el slug son obligatorios' }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from('categories')
    .insert({
      name,
      slug
    })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/panel/categorias')
  return { success: true }
}

export async function updateCategoryAction(id: string, formData: FormData) {
  const name = formData.get('name') as string
  const slug = formData.get('slug') as string

  if (!name || !slug) {
    return { error: 'El nombre y el slug son obligatorios' }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from('categories')
    .update({ name, slug })
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/panel/categorias')
  return { success: true }
}

export async function deleteCategoryAction(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/panel/categorias')
  return { success: true }
}
