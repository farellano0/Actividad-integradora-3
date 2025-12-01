import { motion } from 'framer-motion'

const CardRecurso = ({ recurso, index = 0 }) => {
  const getCategoriaStyles = (categoria) => {
    const styles = {
      articulo: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        icon: '📄',
        label: 'Artículo'
      },
      infografia: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        icon: '📊',
        label: 'Infografía'
      },
      video: {
        bg: 'bg-red-100',
        text: 'text-red-700',
        icon: '🎬',
        label: 'Video'
      },
      guia: {
        bg: 'bg-verde-100',
        text: 'text-verde-700',
        icon: '📘',
        label: 'Guía'
      }
    }
    return styles[categoria] || styles.articulo
  }

  const categoriaStyle = getCategoriaStyles(recurso.categoria)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recurso.imagen}
          alt={recurso.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 ${categoriaStyle.bg} ${categoriaStyle.text} px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1`}>
          <span>{categoriaStyle.icon}</span>
          <span>{categoriaStyle.label}</span>
        </div>

        {/* Duration for videos */}
        {recurso.duracion && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {recurso.duracion}
          </div>
        )}

        {/* Pages for guides */}
        {recurso.paginas && (
          <div className="absolute bottom-4 right-4 bg-verde-500/90 text-white px-2 py-1 rounded text-sm">
            {recurso.paginas} páginas
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gris-800 mb-2 line-clamp-2 group-hover:text-naranja-500 transition-colors">
          {recurso.titulo}
        </h3>
        <p className="text-gris-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {recurso.descripcion}
        </p>

        {/* Date if available */}
        {recurso.fecha && (
          <p className="text-gray-400 text-xs mb-4">
            Publicado: {new Date(recurso.fecha).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}

        {/* Action Button */}
        <motion.a
          href={recurso.enlace}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-naranja-400 to-naranja-500 text-white font-medium rounded-xl hover:from-naranja-500 hover:to-naranja-600 transition-all shadow-md hover:shadow-lg"
          aria-label={`Ver ${recurso.titulo}`}
        >
          <span>Ver recurso</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </motion.article>
  )
}

export default CardRecurso

