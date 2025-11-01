import { Link } from '@tanstack/react-router'
import { Stethoscope } from 'lucide-react'

export function LandingNav() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">
            TeleHealth
          </span>
        </Link>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-br from-primary to-accent text-white font-semibold hover:opacity-90 transition duration-200"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
