import { Link } from '@tanstack/react-router'
import { Stethoscope } from 'lucide-react'

export function LandingNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">
            TeleHealth
          </span>
        </div>

        {/* Navigation & Login */}
        <div className="flex items-center gap-6">
          {/* Navigation buttons */}
          {['home', 'about', 'trusted', 'faq'].map((section) => {
            const label =
              section === 'trusted'
                ? 'Trusted By'
                : section.charAt(0).toUpperCase() + section.slice(1)
            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-black font-medium py-2 px-4 rounded-full cursor-pointer hover:text-green-500 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-400 hover:after:w-full after:transition-all after:duration-300 after:rounded"
              >
                {label}
              </button>
            )
          })}

          {/* Login button */}
          <Link
            to="/login"
            className="px-5 py-2.5 rounded-xl bg-green-400 text-white hover:bg-green-500 font-semibold shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
