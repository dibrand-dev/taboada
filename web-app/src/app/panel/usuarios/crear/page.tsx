import UserForm from '@/components/panel/UserForm'

export default function CrearUsuarioPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Crear Usuario</h1>
        <p className="text-sm text-gray-500 mt-1">
          Da de alta un nuevo usuario con acceso al panel de administración.
        </p>
      </div>
      <UserForm />
    </div>
  )
}
