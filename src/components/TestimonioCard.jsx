import { motion } from 'framer-motion'

const TestimonioCard = ({ testimonio, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-verde-400 to-verde-500 p-6 relative">
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src={testimonio.foto}
              alt={`Foto de ${testimonio.nombre}`}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-naranja-400 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-xs">✨</span>
            </div>
          </div>
          
          {/* Info */}
          <div className="text-white">
            <h3 className="font-bold text-lg">{testimonio.nombre}</h3>
            <p className="text-verde-100 text-sm">{testimonio.edad} años • {testimonio.ubicacion}</p>
          </div>
        </div>

        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-white/30 text-5xl font-serif">
          "
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Testimonial text */}
        <blockquote className="text-gris-600 leading-relaxed mb-4 italic">
          "{testimonio.testimonio}"
        </blockquote>

        {/* Achievement badge */}
        <div className="bg-naranja-50 border border-naranja-200 rounded-xl p-4 mb-4">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🏆</span>
            <div>
              <h4 className="font-semibold text-naranja-600 text-sm mb-1">Logro alcanzado</h4>
              <p className="text-gris-700 text-sm">{testimonio.logro}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">
            Aprendió en {testimonio.fechaAprendizaje}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-verde-500 hover:text-verde-600 text-sm font-medium flex items-center space-x-1"
            aria-label={`Compartir historia de ${testimonio.nombre}`}
          >
            <span>Compartir</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

export default TestimonioCard

