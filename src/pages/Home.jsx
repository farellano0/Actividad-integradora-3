import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    {
      icon: '📖',
      title: 'Conoce para apoyar',
      description: 'Aprende sobre envejecimiento activo, brecha digital y cómo acompañar a adultos mayores en su proceso de aprendizaje tecnológico.',
      link: '/conocer',
      color: 'from-verde-400 to-verde-500'
    },
    {
      icon: '📚',
      title: 'Guías y recursos',
      description: 'Accede a artículos, infografías, videos y guías descargables diseñadas para facilitar la enseñanza tecnológica.',
      link: '/recursos',
      color: 'from-naranja-400 to-naranja-500'
    },
    {
      icon: '💬',
      title: 'Historias que inspiran',
      description: 'Descubre testimonios reales de adultos mayores que han logrado incluirse en el mundo digital.',
      link: '/historias',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: '🎓',
      title: 'Capacítate',
      description: 'Encuentra cursos y talleres para mejorar tus habilidades como acompañante digital.',
      link: '/capacitate',
      color: 'from-blue-400 to-blue-500'
    }
  ]

  const stats = [
    { number: '1,250+', label: 'Adultos mayores capacitados', icon: '👥' },
    { number: '89', label: 'Voluntarios activos', icon: '🤝' },
    { number: '156', label: 'Talleres realizados', icon: '📋' },
    { number: '45', label: 'Comunidades alcanzadas', icon: '🏘️' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-crema-50 via-naranja-50 to-verde-50 py-16 md:py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-naranja-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-verde-200 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-verde-100 text-verde-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                🌟 Tecnología y Personas Mayores
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gris-800 mb-6 leading-tight">
                Apoyar para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-naranja-500 to-naranja-600">
                  Aprender
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gris-600 mb-8 leading-relaxed max-w-xl">
                Un espacio dedicado a reunir recursos, guías y buenas prácticas para 
                apoyar el aprendizaje tecnológico de adultos mayores. Para docentes, 
                tutores, familiares y todos quienes acompañan procesos de alfabetización digital.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/recursos"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-naranja-400 to-naranja-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
                  >
                    Explorar recursos
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/conocer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gris-700 font-semibold rounded-xl shadow-md hover:shadow-lg border-2 border-verde-200 hover:border-verde-400 transition-all text-lg"
                  >
                    Saber más
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600"
                  alt="Adulto mayor aprendiendo a usar tecnología con apoyo de un joven"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
              {/* Floating cards decoration */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20"
              >
                <span className="text-3xl">👵</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20"
              >
                <span className="text-3xl">📱</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 -right-8 bg-verde-400 text-white p-3 rounded-xl shadow-lg z-20"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-crema-50 to-naranja-50"
              >
                <span className="text-4xl mb-2 block">{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-bold text-naranja-500 mb-1">{stat.number}</p>
                <p className="text-gris-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-crema-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-4">
              ¿Qué encontrarás aquí?
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Herramientas y conocimientos para convertirte en un mejor acompañante 
              en el proceso de inclusión digital de adultos mayores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={feature.link}
                  className="block h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gris-800 mb-3 group-hover:text-naranja-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gris-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-verde-500 to-verde-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra misión
              </h2>
              <p className="text-lg text-verde-100 leading-relaxed mb-6">
                Creemos que la tecnología debe ser un puente, no una barrera. 
                Nuestro objetivo es empoderar a quienes acompañan a adultos mayores 
                en su camino hacia la inclusión digital, proporcionando las herramientas 
                y conocimientos necesarios para hacer de este proceso una experiencia 
                positiva y enriquecedora.
              </p>
              <p className="text-lg text-verde-100 leading-relaxed">
                Cada adulto mayor merece la oportunidad de conectarse con sus seres 
                queridos, acceder a información y servicios, y participar activamente 
                en la sociedad digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: '🤝', text: 'Acompañamiento empático' },
                { icon: '📚', text: 'Recursos accesibles' },
                { icon: '🌱', text: 'Aprendizaje gradual' },
                { icon: '💪', text: 'Empoderamiento digital' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
                >
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <p className="font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-crema-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl mb-6 block">🚀</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="text-lg text-gris-600 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de acompañantes digitales y comienza a hacer 
              la diferencia en la vida de adultos mayores.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-naranja-400 to-naranja-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Contáctanos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

