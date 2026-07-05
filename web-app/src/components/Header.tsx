import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-4 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 shadow-sm" id="main-nav">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img
            alt="Dra. María Cecilia Taboada"
            className="h-10 md:h-12 w-auto object-contain cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADd_g-OXshEMwkZHCWPXMcxbZtUBpFxl__yOmHY1BvXC-UNHt1r5rZt1bcxnDN6Y3gBSNEsM6U3H81faUi9DCjKKkAGjus34ulF859LIXt1nSL1x9213YU51C7HANeWkjXOD2dc6dfOGo3M8r7kHbc-aconJx1PwwpChuHjzUJB7bADiaLOeLrE1-oTyUnqk9esKKuWApp7Xw74h5gA8M4Du3S6VSGBUccYjhoQJmKi763Bo0JkGupX8G8NzPw9D2BRw"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/#servicios" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 font-allround text-nav-item">
          Servicios
        </Link>
        <Link href="/#sobre-mi" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 font-allround text-nav-item">
          Sobre Mí
        </Link>
        <Link href="/conocimiento" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 font-allround text-nav-item">
          Conocimiento
        </Link>
        <Link href="/#contacto" className="nav-link text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 font-allround text-nav-item">
          Contacto
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-6 py-2 border border-vision-blue rounded-lg font-allround text-button-primary text-primary hover:bg-vision-blue/5 transition-all active:scale-95 duration-200 uppercase">
          [ Agendá tu Turno ]
        </button>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
