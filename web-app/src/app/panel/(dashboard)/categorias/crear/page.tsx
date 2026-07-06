import CategoryForm from '@/components/panel/CategoryForm'

export default function CrearCategoriaPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Crear Categoría</h1>
        <p className="text-sm text-gray-500 mt-1">
          Añade una nueva categoría para organizar las notas del blog.
        </p>
      </div>
      <CategoryForm />
    </div>
  )
}
