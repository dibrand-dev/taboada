import { createClient } from '@/lib/supabase/server'
import { UserCircle } from 'lucide-react'

export default async function Topbar() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white border-b border-gray-200">
      <div className="flex flex-1 justify-end px-4 sm:px-6 lg:px-8">
        <div className="ml-4 flex items-center md:ml-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">
              {user?.email || 'Usuario Administrador'}
            </span>
            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
              <UserCircle className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
