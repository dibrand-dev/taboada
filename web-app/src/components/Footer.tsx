import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-gutter border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-md">
            <div className="mb-6">
              <Image 
                src="/logo-dra-taboada-footer.png" 
                alt="Logo Dra. María Cecilia Taboada" 
                width={320} 
                height={112} 
                className="h-12 w-auto md:h-14 lg:h-16" 
              />
            </div>
            <p className="text-white/60 text-body-md leading-relaxed">
              Comprometidos con la salud visual de alta complejidad y el bienestar preventivo.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="space-y-4">
              <p className="text-label-caps text-secondary-fixed font-bold text-badge">Legales</p>
              <ul className="space-y-2 text-white/50 text-body-md">
                <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Términos</Link></li>
                <li><Link href="/preguntas-frecuentes" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-label-caps text-secondary-fixed font-bold text-badge">Conectamos</p>
              <div className="flex gap-6">
                <a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
                <a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-white/40 text-badge uppercase">© {new Date().getFullYear()} Dra. María Cecilia Taboada. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-badge uppercase">Desarrollado por</span>
            <a href="https://www.dibrand.co/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-200">
              <Image src="/dibrand-logo.png" alt="Dibrand" width={100} height={24} className="h-6 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
