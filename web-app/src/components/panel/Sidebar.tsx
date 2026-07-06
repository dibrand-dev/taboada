'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, Tags, Users, LogOut, Mail, X } from 'lucide-react'
import { useMobileNav } from './MobileNavContext'

const navigation = [
  { name: 'Dashboard', href: '/panel', icon: LayoutDashboard },
  { name: 'Blog (Notas)', href: '/panel/notas', icon: FileText },
  { name: 'Usuarios', href: '/panel/usuarios', icon: Users },
  { name: 'Categorías', href: '/panel/categorias', icon: Tags },
  { name: 'Suscriptores', href: '/panel/suscriptores', icon: Mail },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const { isOpen, setIsOpen } = useMobileNav()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/panel/login')
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Content */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 md:w-64 transform bg-white md:bg-slate-50/30 border-r border-slate-100/50 pt-6 flex flex-col h-full
        transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col px-6 mb-8 relative">
          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute right-4 top-0 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-sm shadow-indigo-600/20">
            T
          </div>
          <h1 className="text-lg font-bold text-slate-900 tracking-tight">Dra. Taboada CMS</h1>
          <p className="text-xs text-slate-500">Panel de Control</p>
        </div>
        
        <div className="flex flex-1 flex-col overflow-y-auto px-4">
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                      : 'text-slate-500 hover:bg-slate-100/50 md:hover:bg-white hover:text-slate-900 hover:shadow-[0_2px_10px_rgb(0,0,0,0.02)]'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        
        <div className="p-4 mb-4">
          <button
            onClick={handleLogout}
            className="group flex w-full items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-700 transition-all"
          >
            <LogOut
              className="mr-3 h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-red-600 transition-colors"
              aria-hidden="true"
            />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  )
}
