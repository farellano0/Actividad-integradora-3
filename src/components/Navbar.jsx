import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Inicio', icon: '🏠' },
    { path: '/conocer', label: 'Conocer', icon: '📖' },
    { path: '/recursos', label: 'Recursos', icon: '📚' },
    { path: '/historias', label: 'Historias', icon: '💬' },
    { path: '/capacitate', label: 'Capacítate', icon: '🎓' },
    { path: '/contacto', label: 'Contacto', icon: '✉️' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              aria-label="Ir al inicio - Apoyar para Aprender"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-naranja-400 to-naranja-500 rounded-xl flex items-center justify-center shadow-md"
              >
                <span className="text-white text-xl md:text-2xl">🤝</span>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-gris-800 leading-tight">
                  Apoyar para
                </h1>
                <p className="text-naranja-500 font-semibold text-sm md:text-base -mt-1">
                  Aprender
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-naranja-100 text-naranja-600'
                    : 'text-gris-600 hover:bg-verde-50 hover:text-verde-600'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gris-600 hover:bg-naranja-100 hover:text-naranja-600 focus:outline-none focus:ring-2 focus:ring-naranja-400"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-naranja-100"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-naranja-100 text-naranja-600'
                        : 'text-gris-600 hover:bg-verde-50 hover:text-verde-600'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

