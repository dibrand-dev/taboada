'use client'

import { Menu } from 'lucide-react'
import { useMobileNav } from './MobileNavContext'

export default function HamburgerButton() {
  const { setIsOpen } = useMobileNav()

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
      aria-label="Abrir menú"
    >
      <Menu className="h-6 w-6" />
    </button>
  )
}
