'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPost, updatePost, uploadImage, Post } from '@/services/posts'
import TipTapEditor from './TipTapEditor'

interface NoteFormProps {
  initialData?: Post
  categories?: { id: string; name: string }[]
  authors?: { id: string; first_name: string; last_name: string }[]
}

export default function NoteForm({ initialData, categories = [], authors = [] }: NoteFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [summary, setSummary] = useState(initialData?.summary || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [readingTime, setReadingTime] = useState(initialData?.reading_time_minutes || 5)
  const [published, setPublished] = useState(initialData?.published || false)
  const [categoryId, setCategoryId] = useState(initialData?.category_id || '')
  const [authorId, setAuthorId] = useState(initialData?.author_id || '')
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.cover_image_url || '')

  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    if (!initialData) {
      setSlug(generateSlug(e.target.value))
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    try {
      setLoading(true)
      const file = e.target.files[0]
      const url = await uploadImage(file)
      setCoverImageUrl(url)
    } catch (err: any) {
      alert('Error subiendo imagen: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const postData = {
      title,
      slug,
      summary,
      content,
      cover_image_url: coverImageUrl,
      reading_time_minutes: Number(readingTime),
      published,
      category_id: categoryId || null,
      author_id: authorId || null,
    }

    try {
      if (initialData) {
        await updatePost(initialData.id, postData as Partial<Post>)
      } else {
        await createPost(postData as Partial<Post>)
      }
      router.push('/panel/notas')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      {error && <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>}
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              required
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Slug</label>
            <input
              required
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tiempo de Lectura (minutos)</label>
            <input
              required
              type="number"
              value={readingTime}
              onChange={(e) => setReadingTime(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Categoría</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 bg-white"
              >
                <option value="">Seleccione...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Autor</label>
              <select
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 bg-white"
              >
                <option value="">Seleccione...</option>
                {authors.map((auth) => (
                  <option key={auth.id} value={auth.id}>{auth.first_name} {auth.last_name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Imagen de Portada</label>
            {coverImageUrl && (
              <img src={coverImageUrl} alt="Portada" className="mt-2 h-32 w-full object-cover rounded-md mb-2 shadow-sm" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mt-2"
            />
          </div>
          <div className="flex items-center mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
            <input
              id="published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="published" className="ml-2 block text-sm font-medium text-gray-900">
              Nota Pública (Visible en el sitio)
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Resumen / Extracto</label>
        <textarea
          required
          rows={3}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Contenido</label>
        <TipTapEditor content={content} onChange={setContent} />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Guardando...' : 'Guardar Nota'}
        </button>
      </div>
    </form>
  )
}
