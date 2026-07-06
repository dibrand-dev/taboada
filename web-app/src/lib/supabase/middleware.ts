import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANTE: NO uses getSession() aquí si puedes evitarlo, getUser() es más seguro
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isPanelRoute = request.nextUrl.pathname.startsWith('/panel')
  const isLoginRoute = request.nextUrl.pathname === '/panel/login'

  // Si trata de entrar a /panel (no login) y no está autenticado
  if (isPanelRoute && !isLoginRoute && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/panel/login'
    return NextResponse.redirect(url)
  }

  // Si está autenticado e intenta ir a login, lo redirigimos al dashboard del panel
  if (isLoginRoute && user) {
    const url = request.nextUrl.clone()
    url.pathname = '/panel'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
