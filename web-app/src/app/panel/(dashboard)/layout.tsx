import Sidebar from '@/components/panel/Sidebar'
import Topbar from '@/components/panel/Topbar'
import { MobileNavProvider } from '@/components/panel/MobileNavContext'

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MobileNavProvider>
      <div className="flex h-screen overflow-hidden bg-slate-50/50 font-sans">
        <Sidebar />
        
        <div className="flex flex-1 flex-col overflow-hidden w-full">
          {/* Topbar */}
          <Topbar />

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto focus:outline-none">
            <div className="py-8 md:py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </MobileNavProvider>
  )
}
