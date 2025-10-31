import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Stethoscope, LogOut, Settings, User } from 'lucide-react'

export function CommonNav() {
  const [isOpen, setIsOpen] = useState(false)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">
            TeleHealth
          </span>
        </Link>

        <div className="relative flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between gap-2 border  duration-200 rounded-lg px-4 py-2 w-48"
            >
              <span className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {user.name?.charAt(0).toUpperCase() || 'User'}
              </span>
              <span className="flex-1 text-left text-sm font-medium">
                {user.name}
              </span>
              <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg text-foreground z-50">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs">
                    {user.name?.charAt(0).toUpperCase() || 'User'}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{user.name}</span>
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
    </header>
  )
}
