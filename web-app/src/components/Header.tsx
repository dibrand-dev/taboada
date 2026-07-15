'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-4 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 shadow-sm" id="main-nav">
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeMenu}>
            <img
              alt="Dra. María Cecilia Taboada"
              className="h-10 md:h-12 w-auto object-contain cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADd_g-OXshEMwkZHCWPXMcxbZtUBpFxl__yOmHY1BvXC-UNHt1r5rZt1bcxnDN6Y3gBSNEsM6U3H81faUi9DCjKKkAGjus34ulF859LIXt1nSL1x9213YU51C7HANeWkjXOD2dc6dfOGo3M8r7kHbc-aconJx1PwwpChuHjzUJB7bADiaLOeLrE1-oTyUnqk9esKKuWApp7Xw74h5gA8M4Du3S6VSGBUccYjhoQJmKi763Bo0JkGupX8G8NzPw9D2BRw"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {/* <Link href="/recursos" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 text-nav-item">Recursos</Link> */}
          <Link href="/patologias" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 text-nav-item">
            Patologías
          </Link>
          <Link href="/#sobre-mi" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 text-nav-item">
            Sobre Mí
          </Link>
          <Link href="/#contacto" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 text-nav-item">
            Contacto
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/5491171121934" target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 border border-vision-blue rounded-lg text-button-primary text-primary hover:bg-vision-blue/5 transition-all active:scale-95 duration-200 uppercase">
            AGENDÁ UNA CONSULTA
          </a>
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface-container-lowest md:hidden flex flex-col pt-24 px-gutter animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-8 text-center mt-8">
            {/* <Link href="/recursos" onClick={closeMenu} className="text-h3 text-primary hover:text-secondary transition-colors">Recursos</Link> */}
            <Link href="/patologias" onClick={closeMenu} className="text-h3 text-primary hover:text-secondary transition-colors">
              Patologías
            </Link>
            <Link href="/#sobre-mi" onClick={closeMenu} className="text-h3 text-primary hover:text-secondary transition-colors">
              Sobre Mí
            </Link>
            <Link href="/#contacto" onClick={closeMenu} className="text-h3 text-primary hover:text-secondary transition-colors">
              Contacto
            </Link>
            <div className="mt-8">
              <a href="https://wa.me/5491171121934" target="_blank" rel="noopener noreferrer" className="w-full block px-6 py-4 border border-vision-blue bg-vision-blue/5 rounded-lg text-button-primary text-primary uppercase font-bold active:scale-95 transition-all">
                AGENDÁ UNA CONSULTA
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
