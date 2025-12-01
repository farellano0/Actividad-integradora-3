import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CursoCard from '../components/CursoCard'
import cursosData from '../data/cursos.json'

const Capacitate = () => {
  const [filtroNivel, setFiltroNivel] = useState('todos')
  const { cursos, recursosExternos } = cursosData

  const niveles = [
    { id: 'todos', label: 'Todos los niveles' },
    { id: 'Principiante', label: 'Principiante' },
    { id: 'Intermedio', label: 'Intermedio' },
    { id: 'Avanzado', label: 'Avanzado' }
  ]

  const cursosFiltrados = filtroNivel === 'todos'
    ? cursos
    : cursos.filter(c => c.nivel === filtroNivel)

  return (
    <div className="min-h-screen bg-crema-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-6xl mb-6 block">🎓</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Capacítate
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Desarrolla tus habilidades como acompañante digital. Encuentra cursos, 
              talleres y recursos educativos diseñados para quienes desean apoyar a 
              adultos mayores en su proceso de alfabetización tecnológica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icono: '📚', titulo: 'Contenido actualizado', texto: 'Material revisado y actualizado constantemente' },
              { icono: '🏅', titulo: 'Certificación', texto: 'Obtén reconocimiento por tu capacitación' },
              { icono: '👥', titulo: 'Comunidad', texto: 'Conecta con otros acompañantes digitales' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl mb-4 block">{benefit.icono}</span>
                <h3 className="text-xl font-bold text-gris-800 mb-2">{benefit.titulo}</h3>
                <p className="text-gris-600">{benefit.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-4">
              Cursos y Talleres
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Selecciona el nivel que mejor se adapte a tus conocimientos actuales
            </p>
          </motion.div>

          {/* Filtros de nivel */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {niveles.map((nivel) => (
              <motion.button
                key={nivel.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFiltroNivel(nivel.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  filtroNivel === nivel.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gris-600 hover:bg-blue-50 shadow-md'
                }`}
                aria-pressed={filtroNivel === nivel.id}
              >
                {nivel.label}
              </motion.button>
            ))}
          </div>

          {/* Cursos Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filtroNivel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cursosFiltrados.map((curso, index) => (
                <CursoCard key={curso.id} curso={curso} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {cursosFiltrados.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <span className="text-6xl mb-4 block">📭</span>
              <p className="text-gris-600 text-lg">
                No hay cursos disponibles en este nivel por el momento.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 bg-gradient-to-br from-verde-50 to-crema-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-4">
              Ruta de aprendizaje sugerida
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Si eres nuevo en esto, te recomendamos seguir este camino
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-verde-200 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { paso: 1, titulo: 'Fundamentos', desc: 'Aprende los conceptos básicos del acompañamiento digital', icono: '📖' },
                { paso: 2, titulo: 'Herramientas', desc: 'Domina las aplicaciones más comunes que enseñarás', icono: '🔧' },
                { paso: 3, titulo: 'Metodología', desc: 'Desarrolla técnicas pedagógicas para adultos mayores', icono: '🎯' },
                { paso: 4, titulo: 'Práctica', desc: 'Aplica lo aprendido con casos reales supervisados', icono: '🚀' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-verde-400">
                    <span className="text-3xl">{step.icono}</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <span className="inline-block bg-verde-100 text-verde-600 px-3 py-1 rounded-full text-sm font-bold mb-2">
                      Paso {step.paso}
                    </span>
                    <h3 className="text-lg font-bold text-gris-800 mb-2">{step.titulo}</h3>
                    <p className="text-gris-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-4">
              Recursos externos recomendados
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Instituciones y plataformas que también ofrecen capacitación en inclusión digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {recursosExternos.map((recurso, index) => (
              <motion.a
                key={recurso.id}
                href={recurso.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-crema-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-naranja-200 transition-all flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-naranja-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-naranja-200 transition-colors">
                  <span className="text-2xl">🔗</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-gris-800 group-hover:text-naranja-500 transition-colors">
                      {recurso.titulo}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      recurso.tipo === 'Gobierno' ? 'bg-blue-100 text-blue-600' :
                      recurso.tipo === 'ONG' ? 'bg-verde-100 text-verde-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {recurso.tipo}
                    </span>
                  </div>
                  <p className="text-gris-600 text-sm">{recurso.descripcion}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gris-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { 
                pregunta: '¿Necesito experiencia previa para tomar los cursos?',
                respuesta: 'No, tenemos cursos para todos los niveles. Si es tu primera vez, te recomendamos comenzar con "Introducción al mundo digital" o "Formación de acompañantes digitales" nivel básico.'
              },
              {
                pregunta: '¿Los cursos tienen costo?',
                respuesta: 'Ofrecemos varios cursos gratuitos. Los cursos con costo tienen precios accesibles y en algunos casos se ofrecen becas para estudiantes y voluntarios.'
              },
              {
                pregunta: '¿Obtengo un certificado?',
                respuesta: 'Sí, al completar satisfactoriamente cada curso recibirás un certificado digital que avala tu capacitación como acompañante digital.'
              },
              {
                pregunta: '¿Puedo tomar los cursos a mi propio ritmo?',
                respuesta: 'Los cursos en línea permiten avanzar a tu ritmo. Los cursos presenciales tienen horarios fijos pero ofrecemos diferentes opciones de horario.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="font-bold text-lg mb-2" style={{ color: '#FA771D' }}>{faq.pregunta}</h3>
                <p className="text-gray-300">{faq.respuesta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-crema-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl mb-6 block">🌟</span>
            <h2 className="text-3xl font-bold text-gris-800 mb-4">
              ¿Tienes dudas sobre qué curso elegir?
            </h2>
            <p className="text-lg text-gris-600 mb-8">
              Contáctanos y te ayudaremos a encontrar la mejor opción según tus necesidades y disponibilidad.
            </p>
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
            >
              Solicitar asesoría
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Capacitate

