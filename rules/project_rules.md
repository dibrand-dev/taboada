# Reglas del proyecto Taboada

Documentación viva del proyecto. Toda contribución (humana o de agentes IA) debe respetar estas reglas. Ante un conflicto con cualquier otro documento (`DESIGN.md`, plantillas HTML, código existente), **prevalece este archivo**.

## Estructura del repositorio

| Ruta | Descripción |
| --- | --- |
| `web-app/` | Aplicación principal Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Supabase |
| `taboada_estilos/DESIGN.md` | Sistema de diseño de referencia (heredado; ver sección de tipografía) |
| `landing_page_nueva_tipograf_a_dra._taboada/` | Prototipos HTML estáticos de la landing |
| `centro_de_conocimiento_dra._taboada/` | Prototipos HTML del centro de conocimiento |
| `plantilla_de_art_culo_dra._taboada/` | Prototipo HTML de plantilla de artículo |
| `replace_html.py` | Script utilitario de reemplazo sobre los HTML |

## Tipografía

- La **única** tipografía oficial y permitida para todo el diseño, componentes y frontend es **Outfit** (Google Fonts).
- Queda **terminantemente prohibido** utilizar, importar o sugerir **Montserrat** o cualquier otra fuente (incluidas Tenor Sans, Inter, Roboto, Arial como fuente de diseño, etc.).
- Configuración de referencia:
  - Se carga mediante `next/font/google` en `web-app/src/app/layout.tsx`:

    ```tsx
    import { Outfit } from "next/font/google";

    const outfit = Outfit({
      subsets: ["latin"],
      variable: "--font-outfit",
      display: "swap",
    });
    ```

  - Se mapea a `font-sans` en Tailwind CSS v4 (`web-app/src/app/globals.css`):

    ```css
    @theme {
      --font-sans: var(--font-outfit), sans-serif;
    }
    ```

- Excepción técnica: `Material Symbols Outlined` se permite **únicamente** como fuente de iconos, nunca para texto.
- No usar `<link>` a Google Fonts, `@import` de fuentes ni `font-family` hardcodeado para texto.

> **Pendiente de migración:** a la fecha (2026-10-22) el código todavía usa `Tenor_Sans` e `Inter` en `layout.tsx`, y `globals.css` define `--font-heading`, `--font-body` y reglas `font-family` con `!important` (líneas ~134-135). `taboada_estilos/DESIGN.md` también referencia Tenor Sans. Todo esto debe migrarse a Outfit.

## Paleta de marca

- Color principal de **Dibrand**: `#9e4d97`.
- Usar siempre los tokens definidos en `@theme` de `globals.css`; no hardcodear valores hexadecimales en componentes.

## Títulos y encabezados

- Todos los títulos y encabezados (`h1`–`h6`, títulos de página, metadatos `title`, botones de sección, ítems de navegación) se escriben estrictamente en **Sentence case**: solo la primera letra en mayúscula, además de nombres propios y siglas.
  - ✅ `Preguntas frecuentes`, `Oftalmología de alta complejidad`
  - ❌ `Preguntas Frecuentes`, `OFTALMOLOGÍA DE ALTA COMPLEJIDAD`
- No usar `uppercase`/`capitalize` de Tailwind en encabezados para forzar otro estilo.

## Contenido y datos

- **Prohibición total de datos ficticios**: no inventar pacientes, candidatos, testimonios, profesionales, cifras, direcciones, teléfonos ni ningún otro dato que no provenga de una fuente real provista por el cliente o de Supabase.
- No usar placeholders tipo "Lorem ipsum", "Juan Pérez" o reseñas inventadas. Si falta contenido real, dejarlo explícitamente marcado como pendiente y consultarlo.

## Entorno de desarrollo

- **Gestor de paquetes:** `npm` (existe `web-app/package-lock.json`). No usar `pnpm` ni `yarn` ni generar otros lockfiles.
- **Comandos** (desde `web-app/`):
  - `npm install` — instalar dependencias
  - `npm run dev` — servidor de desarrollo (http://localhost:3000)
  - `npm run build` — build de producción
  - `npm run lint` — ESLint
- **Next.js 16:** tiene cambios incompatibles respecto de versiones anteriores. Antes de escribir código, consultar `node_modules/next/dist/docs/` (ver `web-app/AGENTS.md`).
- **Variables de entorno:** Supabase requiere `.env.local` en `web-app/` (no versionado).

## Flujo de trabajo para agentes

- Ante errores de terminal o módulos faltantes: leer el stack trace, analizar el archivo implicado, aplicar la corrección y reintentar (self-healing).
- Los comandos sensibles (instalaciones a nivel sistema, red, permisos elevados) requieren aprobación explícita del usuario.
- Las políticas de Git (ramas, commits, Pull Requests y secretos) están definidas en [`rules/git_workflow.md`](./git_workflow.md) y son de cumplimiento obligatorio.
