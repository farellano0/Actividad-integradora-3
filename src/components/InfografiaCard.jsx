import { motion } from 'framer-motion'

const InfografiaCard = ({ infografia, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image with overlay */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={infografia.imagen}
            alt={infografia.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent" />
          
          {/* Content on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              <span className="text-lg">📊</span>
              <span className="text-white text-sm font-medium">Infografía</span>
            </div>
            
            <h3 className="text-white text-xl font-bold mb-2">
              {infografia.titulo}
            </h3>
            <p className="text-white/80 text-sm line-clamp-2">
              {infografia.descripcion}
            </p>
          </div>

          {/* Hover overlay with button */}
          <div className="absolute inset-0 bg-purple-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={infografia.enlace}
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center space-x-2"
              aria-label={`Ver infografía: ${infografia.titulo}`}
            >
              <span>Ver completa</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -z-10 top-4 right-4 w-full h-full bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300" />
    </motion.article>
  )
}

export default InfografiaCard

