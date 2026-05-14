import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../public/favicon.png'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    return location.pathname === path
  }

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-16 py-4 bg-transparent border-b border-gray-200 w-full z-50">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-13 h-13" alt="" />
        <Link to="/" className="text-3xl font-bold text-[#22A86F] text-shadow-[2px_2px_0_theme(colors.gray.600)]">
          EcoPass
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-base">
        <Link
          to="/"
          className={`transition-colors ${isActive('/') ? 'text-green-500 font-bold' : 'text-gray-500 font-medium hover:text-gray-900'}`}
        >
          Início
        </Link>
        <Link
          to="/sobre-nos"
          className={`transition-colors ${isActive('/sobre-nos') ? 'text-green-500 font-bold' : 'text-gray-500 font-medium hover:text-gray-900'}`}
        >
          Sobre Nós
        </Link>
        <Link
          to="/pontos-de-coleta"
          className={`transition-colors ${isActive('/pontos-de-coleta') ? 'text-green-500 font-bold' : 'text-gray-500 font-medium hover:text-gray-900'}`}
        >
          Pontos de Coleta
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://mobile-test-alpha.vercel.app/login"
          className="hidden md:block px-5 py-2.5 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
        >
          Acessar Plataforma
        </a>
        <button
          className="md:hidden p-1 text-gray-600 hover:text-green-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden z-50 flex flex-col py-6 px-8 gap-6 animate-in slide-in-from-top-2">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg transition-colors ${isActive('/') ? 'text-green-500 font-bold' : 'text-gray-700 font-medium hover:text-green-500'}`}
          >
            Início
          </Link>
          <Link
            to="/sobre-nos"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg transition-colors ${isActive('/sobre-nos') ? 'text-green-500 font-bold' : 'text-gray-700 font-medium hover:text-green-500'}`}
          >
            Sobre Nós
          </Link>
          <Link
            to="/pontos-de-coleta"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg transition-colors ${isActive('/pontos-de-coleta') ? 'text-green-500 font-bold' : 'text-gray-700 font-medium hover:text-green-500'}`}
          >
            Pontos de Coleta
          </Link>
          <a
            href="https://mobile-test-alpha.vercel.app/login"
            className="mt-2 w-full px-6 py-3 text-lg text-center font-bold text-white bg-green-500 rounded-xl hover:bg-green-600 transition-colors block"
          >
            Acessar Plataforma
          </a>
        </div>
      )}
    </nav>
  )
}
