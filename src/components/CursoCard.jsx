import { motion } from 'framer-motion'

const CursoCard = ({ curso, index = 0 }) => {
  const getNivelStyles = (nivel) => {
    const styles = {
      'Principiante': {
        bg: 'bg-verde-100',
        text: 'text-verde-700',
        dot: 'bg-verde-500'
      },
      'Intermedio': {
        bg: 'bg-naranja-100',
        text: 'text-naranja-700',
        dot: 'bg-naranja-500'
      },
      'Avanzado': {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        dot: 'bg-purple-500'
      }
    }
    return styles[nivel] || styles['Principiante']
  }

  const nivelStyle = getNivelStyles(curso.nivel)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={curso.imagen}
          alt={curso.titulo}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Price Badge */}
        <div className={`absolute top-4 right-4 ${curso.precio === 'Gratuito' ? 'bg-verde-500' : 'bg-naranja-500'} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
          {curso.precio}
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gris-700 flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{curso.duracion}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`${nivelStyle.bg} ${nivelStyle.text} px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1`}>
            <span className={`w-2 h-2 ${nivelStyle.dot} rounded-full`}></span>
            <span>{curso.nivel}</span>
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
            {curso.modalidad}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gris-800 mb-2 line-clamp-2">
          {curso.titulo}
        </h3>

        {/* Description */}
        <p className="text-gris-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {curso.descripcion}
        </p>

        {/* Topics */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gris-500 uppercase tracking-wide mb-2">
            Temas a cubrir:
          </h4>
          <ul className="space-y-1">
            {curso.temas.slice(0, 3).map((tema, i) => (
              <li key={i} className="text-sm text-gris-600 flex items-center space-x-2">
                <span className="text-verde-500">✓</span>
                <span>{tema}</span>
              </li>
            ))}
            {curso.temas.length > 3 && (
              <li className="text-sm text-naranja-500 font-medium">
                +{curso.temas.length - 3} temas más
              </li>
            )}
          </ul>
        </div>

        {/* Instructor */}
        <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-100">
          <div className="w-8 h-8 bg-gradient-to-br from-naranja-400 to-naranja-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {curso.instructor.charAt(0)}
          </div>
          <span className="text-sm text-gris-600">{curso.instructor}</span>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-verde-400 to-verde-500 text-white font-semibold rounded-xl hover:from-verde-500 hover:to-verde-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
          aria-label={`Inscribirse al curso: ${curso.titulo}`}
        >
          <span>Inscribirme</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </div>
    </motion.article>
  )
}

export default CursoCard

