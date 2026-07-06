import { createClient } from '@/lib/supabase/server'
import { UserCircle } from 'lucide-react'
import HamburgerButton from './HamburgerButton'

export default async function Topbar() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-transparent px-4 sm:px-6 lg:px-8 items-center justify-between md:justify-end">
      <HamburgerButton />
      <div className="flex flex-1 justify-end">
        <div className="ml-4 flex items-center md:ml-6 mt-2 md:mt-4">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <span className="text-sm font-medium text-slate-500">
              {user?.email || 'Usuario Administrador'}
            </span>
            <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center">
              <UserCircle className="h-5 w-5 text-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
