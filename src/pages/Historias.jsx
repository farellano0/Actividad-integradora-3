import { motion } from 'framer-motion'
import TestimonioCard from '../components/TestimonioCard'
import historiasData from '../data/historias.json'

const Historias = () => {
  const { testimonios, estadisticas } = historiasData

  return (
    <div className="min-h-screen bg-crema-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 text-white/10 text-9xl">❝</div>
          <div className="absolute bottom-10 right-10 text-white/10 text-9xl">❞</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-6xl mb-6 block">💬</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Historias que Inspiran
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Conoce las experiencias reales de adultos mayores que han logrado incluirse 
              en el mundo digital. Sus historias demuestran que nunca es tarde para aprender 
              y que el apoyo adecuado hace toda la diferencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-bold text-naranja-500">
                {estadisticas.adultosMayoresCapacitados.toLocaleString()}+
              </p>
              <p className="text-gris-600 text-sm">Adultos mayores capacitados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-verde-500">
                {estadisticas.voluntariosActivos}
              </p>
              <p className="text-gris-600 text-sm">Voluntarios activos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-purple-500">
                {estadisticas.talleresRealizados}
              </p>
              <p className="text-gris-600 text-sm">Talleres realizados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-blue-500">
                {estadisticas.comunidadesAlcanzadas}
              </p>
              <p className="text-gris-600 text-sm">Comunidades alcanzadas</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-gradient-to-br from-naranja-50 to-crema-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={testimonios[0].foto}
                  alt={`Foto de ${testimonios[0].nombre}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 md:hidden text-white">
                  <span className="bg-naranja-500 px-3 py-1 rounded-full text-sm font-medium">
                    Historia destacada
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="hidden md:inline-block bg-naranja-100 text-naranja-600 px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit">
                  ⭐ Historia destacada
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gris-800 mb-2">
                  {testimonios[0].nombre}
                </h2>
                <p className="text-gris-500 mb-4">
                  {testimonios[0].edad} años • {testimonios[0].ubicacion}
                </p>
                <blockquote className="text-lg text-gris-600 italic leading-relaxed mb-6">
                  "{testimonios[0].testimonio}"
                </blockquote>
                <div className="bg-verde-50 border border-verde-200 rounded-xl p-4">
                  <p className="text-verde-700 font-medium">
                    🏆 {testimonios[0].logro}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-4">
              Más historias de éxito
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Cada historia es un testimonio del poder de la paciencia, el acompañamiento 
              y la determinación de aprender.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.slice(1).map((testimonio, index) => (
              <TestimonioCard 
                key={testimonio.id} 
                testimonio={testimonio} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-verde-500 to-verde-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                El impacto de la inclusión digital
              </h2>
              <p className="text-verde-100 text-lg leading-relaxed mb-6">
                Cuando un adulto mayor aprende a usar tecnología, los beneficios 
                trascienden lo individual. Las familias se reconectan, la soledad 
                disminuye, y se abre un mundo de posibilidades para el desarrollo 
                personal y la participación social.
              </p>
              <ul className="space-y-4">
                {[
                  'Reducción del aislamiento social',
                  'Mayor autonomía e independencia',
                  'Acceso a servicios de salud digitales',
                  'Conexión con seres queridos a distancia',
                  'Participación en comunidades virtuales'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500"
                alt="Adulto mayor usando tablet con ayuda"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gris-800 p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-2xl text-naranja-500 mb-1">94%</p>
                <p className="text-sm">de los participantes reportan sentirse menos solos después de aprender a usar tecnología</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-crema-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl mb-6 block">✍️</span>
            <h2 className="text-3xl font-bold text-gris-800 mb-4">
              ¿Tienes una historia para compartir?
            </h2>
            <p className="text-lg text-gris-600 mb-8 max-w-2xl mx-auto">
              Si conoces a un adulto mayor que haya logrado incluirse en el mundo digital, 
              o si tú eres uno de ellos, nos encantaría conocer tu historia.
            </p>
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
            >
              Compartir mi historia
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Historias

