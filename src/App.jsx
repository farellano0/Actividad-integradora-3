import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Conocer from './pages/Conocer'
import Recursos from './pages/Recursos'
import Historias from './pages/Historias'
import Capacitate from './pages/Capacitate'
import Contacto from './pages/Contacto'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      
      <main className="grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              } 
            />
            <Route 
              path="/conocer" 
              element={
                <PageWrapper>
                  <Conocer />
                </PageWrapper>
              } 
            />
            <Route 
              path="/recursos" 
              element={
                <PageWrapper>
                  <Recursos />
                </PageWrapper>
              } 
            />
            <Route 
              path="/historias" 
              element={
                <PageWrapper>
                  <Historias />
                </PageWrapper>
              } 
            />
            <Route 
              path="/capacitate" 
              element={
                <PageWrapper>
                  <Capacitate />
                </PageWrapper>
              } 
            />
            <Route 
              path="/contacto" 
              element={
                <PageWrapper>
                  <Contacto />
                </PageWrapper>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
