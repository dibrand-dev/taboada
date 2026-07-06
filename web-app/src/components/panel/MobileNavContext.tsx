'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type MobileNavContextType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MobileNavContext = createContext<MobileNavContextType>({
  isOpen: false,
  setIsOpen: () => {},
})

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MobileNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileNavContext.Provider>
  )
}

export const useMobileNav = () => useContext(MobileNavContext)
