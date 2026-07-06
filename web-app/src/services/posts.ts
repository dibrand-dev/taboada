import { createClient } from '@/lib/supabase/client'

export interface Post {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  cover_image_url: string
  reading_time_minutes: number
  published: boolean
  author_id: string
  category_id: string
  published_at: string
  created_at: string
  updated_at: string
}

export const getPosts = async () => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories ( id, name ),
      authors ( id, first_name, last_name, avatar_url )
    `)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export const getPostById = async (id: string) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data as Post
}

export const createPost = async (postData: Partial<Post>) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('posts')
    .insert([postData])
    .select()
    .single()
  
  if (error) throw error
  return data
}

export const updatePost = async (id: string, postData: Partial<Post>) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('posts')
    .update({ ...postData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data
}

export const deletePost = async (id: string) => {
  const supabase = createClient()
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}

export const uploadImage = async (file: File) => {
  const supabase = createClient()
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
  const filePath = `${fileName}`

  const { error: uploadError } = await supabase.storage
    .from('blog-assets')
    .upload(filePath, file)

  if (uploadError) throw uploadError

  const { data } = supabase.storage
    .from('blog-assets')
    .getPublicUrl(filePath)

  return data.publicUrl
}
