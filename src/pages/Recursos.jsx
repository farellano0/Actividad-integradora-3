import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardRecurso from '../components/CardRecurso'
import InfografiaCard from '../components/InfografiaCard'
import recursosData from '../data/recursos.json'

const Recursos = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos')

  const filtros = [
    { id: 'todos', label: 'Todos', icono: '📁' },
    { id: 'articulo', label: 'Artículos', icono: '📄' },
    { id: 'infografia', label: 'Infografías', icono: '📊' },
    { id: 'video', label: 'Videos', icono: '🎬' },
    { id: 'guia', label: 'Guías', icono: '📘' }
  ]

  const todosRecursos = [
    ...recursosData.articulos,
    ...recursosData.infografias,
    ...recursosData.videos,
    ...recursosData.guias
  ]

  const recursosFiltrados = filtroActivo === 'todos' 
    ? todosRecursos 
    : todosRecursos.filter(r => r.categoria === filtroActivo)

  return (
    <div className="min-h-screen bg-crema-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-naranja-400 to-naranja-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-6xl mb-6 block">📚</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guías y Recursos
            </h1>
            <p className="text-xl text-naranja-100 leading-relaxed">
              Una colección curada de artículos, infografías, videos y guías descargables 
              para apoyar tu labor como acompañante digital de adultos mayores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-16 md:top-20 z-40 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filtros.map((filtro) => (
              <motion.button
                key={filtro.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFiltroActivo(filtro.id)}
                className={`px-4 py-2 rounded-full font-medium flex items-center space-x-2 transition-all ${
                  filtroActivo === filtro.id
                    ? 'bg-naranja-500 text-white shadow-md'
                    : 'bg-gray-100 text-gris-600 hover:bg-naranja-100'
                }`}
                aria-pressed={filtroActivo === filtro.id}
              >
                <span>{filtro.icono}</span>
                <span className="hidden sm:inline">{filtro.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gris-600 mb-8 text-center"
          >
            Mostrando <span className="font-semibold text-naranja-500">{recursosFiltrados.length}</span> recursos
            {filtroActivo !== 'todos' && ` de tipo "${filtros.find(f => f.id === filtroActivo)?.label}"`}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={filtroActivo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recursosFiltrados.map((recurso, index) => (
                recurso.categoria === 'infografia' ? (
                  <InfografiaCard 
                    key={recurso.id} 
                    infografia={recurso} 
                    index={index}
                  />
                ) : (
                  <CardRecurso 
                    key={recurso.id} 
                    recurso={recurso} 
                    index={index}
                  />
                )
              ))}
            </motion.div>
          </AnimatePresence>

          {recursosFiltrados.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <span className="text-6xl mb-4 block">🔍</span>
              <p className="text-gris-600 text-lg">
                No hay recursos disponibles en esta categoría por el momento.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-br from-verde-50 to-crema-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gris-800 mb-4">
              💡 Cómo usar estos recursos
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Recomendaciones para aprovechar al máximo este material
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icono: '🎯',
                titulo: 'Identifica necesidades',
                texto: 'Antes de elegir un recurso, identifica qué necesita aprender la persona que acompañas. ¿Quiere comunicarse con su familia? ¿Hacer trámites? ¿Ver noticias?'
              },
              {
                icono: '📱',
                titulo: 'Practica primero',
                texto: 'Antes de enseñar, asegúrate de dominar tú mismo el contenido. Revisa los tutoriales y guías para estar preparado ante posibles dudas.'
              },
              {
                icono: '📄',
                titulo: 'Imprime si es necesario',
                texto: 'Muchos adultos mayores aprenden mejor con material impreso. Las guías y pasos escritos en papel pueden ser de gran ayuda como referencia.'
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <span className="text-5xl mb-4 block">{tip.icono}</span>
                <h3 className="text-xl font-bold text-gris-800 mb-3">{tip.titulo}</h3>
                <p className="text-gris-600 leading-relaxed">{tip.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gris-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl mb-6 block">📬</span>
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres recibir nuevos recursos?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Suscríbete para recibir notificaciones cuando publiquemos nuevo material educativo.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 rounded-xl text-gris-800 focus:outline-none focus:ring-2 focus:ring-naranja-400"
                aria-label="Correo electrónico para suscripción"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-naranja-400 to-naranja-500 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Suscribir
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Recursos

