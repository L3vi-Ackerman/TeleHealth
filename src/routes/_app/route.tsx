import { useState } from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from '@/components/common/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Bell, User, LogOut, Settings, Stethoscope } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1 h-screen overflow-hidden">
          <nav className="flex items-center justify-between w-full px-6 py-4 border-b bg-background shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold bg-primary text-transparent bg-clip-text">
                TeleHealth Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-6 relative">
              <button className="hover:bg-muted rounded-full p-2 cursor-pointer">
                <Bell className="h-[1.2rem] w-[1.2rem]" />
              </button>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-center p-2 rounded-full hover:bg-muted cursor-pointer"
                >
                  <User className="h-[1.2rem] w-[1.2rem]" />
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg text-foreground z-50">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                      <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {user.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </div>

                    <ul className="flex flex-col py-2">
                      <li>
                        <Link
                          to="/"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Stethoscope className="w-4 h-4" /> Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <User className="w-4 h-4" /> Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          <Settings className="w-4 h-4" /> Settings
                        </Link>
                      </li>
                    </ul>

                    <div className="border-t border-border">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <main className="flex-1 p-6 overflow-y-auto bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
