import { useState } from 'react'
import { motion } from 'framer-motion'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const asuntoOpciones = [
    'Información sobre cursos',
    'Colaboración o voluntariado',
    'Compartir mi historia',
    'Sugerencias de recursos',
    'Problemas técnicos',
    'Otro'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido'
    }

    if (formData.telefono && !/^[\d\s\-+()]{8,}$/.test(formData.telefono)) {
      newErrors.telefono = 'Ingresa un número de teléfono válido'
    }

    if (!formData.asunto) {
      newErrors.asunto = 'Selecciona un asunto'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await addDoc(collection(db, 'contactos'), {
        ...formData,
        fechaEnvio: serverTimestamp(),
        leido: false
      })

      setSubmitStatus('success')
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      })
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icono: '📧', titulo: 'Correo electrónico', info: 'contacto@apoyarparaaprender.com' },
    { icono: '📱', titulo: 'Teléfono', info: '+52 (55) 1234-5678' },
    { icono: '📍', titulo: 'Ubicación', info: 'Ciudad de México, México' },
    { icono: '🕐', titulo: 'Horario de atención', info: 'Lunes a Viernes, 9:00 - 18:00' }
  ]

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
            <span className="text-6xl mb-6 block">✉️</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl text-naranja-100 leading-relaxed">
              ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? 
              Estamos aquí para escucharte. Completa el formulario y te responderemos 
              a la brevedad posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-crema-50 to-white border border-gray-100"
              >
                <span className="text-4xl mb-3 block">{item.icono}</span>
                <h3 className="font-bold text-gris-800 mb-1">{item.titulo}</h3>
                <p className="text-gris-600 text-sm">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-gris-800 mb-6">
                Envíanos un mensaje
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-verde-100 border border-verde-300 text-verde-700 px-6 py-4 rounded-xl mb-6"
                >
                  <p className="font-medium">✅ ¡Mensaje enviado exitosamente!</p>
                  <p className="text-sm mt-1">Te responderemos a la brevedad posible.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-300 text-red-700 px-6 py-4 rounded-xl mb-6"
                >
                  <p className="font-medium">❌ Error al enviar el mensaje</p>
                  <p className="text-sm mt-1">Por favor, intenta de nuevo más tarde.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gris-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.nombre ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-naranja-400 focus:border-transparent transition-all`}
                      placeholder="Tu nombre"
                      aria-invalid={errors.nombre ? 'true' : 'false'}
                      aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gris-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-naranja-400 focus:border-transparent transition-all`}
                      placeholder="tu@email.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gris-700 mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.telefono ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-naranja-400 focus:border-transparent transition-all`}
                      placeholder="+52 (55) 1234-5678"
                      aria-invalid={errors.telefono ? 'true' : 'false'}
                      aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                    />
                    {errors.telefono && (
                      <p id="telefono-error" className="mt-1 text-sm text-red-600">{errors.telefono}</p>
                    )}
                  </div>

                  {/* Asunto */}
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gris-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.asunto ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-naranja-400 focus:border-transparent transition-all bg-white`}
                      aria-invalid={errors.asunto ? 'true' : 'false'}
                      aria-describedby={errors.asunto ? 'asunto-error' : undefined}
                    >
                      <option value="">Selecciona un asunto</option>
                      {asuntoOpciones.map((opcion) => (
                        <option key={opcion} value={opcion}>{opcion}</option>
                      ))}
                    </select>
                    {errors.asunto && (
                      <p id="asunto-error" className="mt-1 text-sm text-red-600">{errors.asunto}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gris-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.mensaje ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-naranja-400 focus:border-transparent transition-all resize-none`}
                      placeholder="Escribe tu mensaje aquí..."
                      aria-invalid={errors.mensaje ? 'true' : 'false'}
                      aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                    />
                    {errors.mensaje && (
                      <p id="mensaje-error" className="mt-1 text-sm text-red-600">{errors.mensaje}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-naranja-400 to-naranja-500 hover:from-naranja-500 hover:to-naranja-600 hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Enviar mensaje</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>

              <p className="text-xs text-gris-500 mt-4 text-center">
                * Campos obligatorios. Tu información será tratada de forma confidencial.
              </p>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Contact */}
              <div className="bg-gradient-to-br from-verde-400 to-verde-500 text-white p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">¿Por qué contactarnos?</h3>
                <ul className="space-y-4">
                  {[
                    'Resolver dudas sobre nuestros recursos y cursos',
                    'Proponer colaboraciones o alianzas',
                    'Compartir testimonios o historias de éxito',
                    'Sugerir nuevos temas o recursos',
                    'Reportar problemas técnicos'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">⏱️</span>
                  <div>
                    <h3 className="text-xl font-bold text-gris-800">Tiempo de respuesta</h3>
                    <p className="text-gris-600">Generalmente respondemos en 24-48 horas hábiles</p>
                  </div>
                </div>
                <p className="text-sm text-gris-500 leading-relaxed">
                  Nos esforzamos por responder todas las consultas lo más pronto posible. 
                  Si tu asunto es urgente, te recomendamos llamarnos directamente.
                </p>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-crema-100 to-white p-8 rounded-3xl border border-naranja-100">
                <h3 className="text-xl font-bold text-gris-800 mb-4">Síguenos en redes</h3>
                <p className="text-gris-600 mb-6">
                  También puedes contactarnos a través de nuestras redes sociales
                </p>
                <div className="flex space-x-4">
                  {[
                    { nombre: 'Facebook', icono: '📘' },
                    { nombre: 'YouTube', icono: '📺' },
                    { nombre: 'Instagram', icono: '📷' }
                  ].map((red) => (
                    <motion.a
                      key={red.nombre}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl hover:shadow-lg transition-shadow"
                      aria-label={`Síguenos en ${red.nombre}`}
                    >
                      {red.icono}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gris-800 mb-4">Nuestra ubicación</h2>
            <p className="text-gris-600">
              Visítanos en nuestras oficinas en Ciudad de México
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-verde-100 to-naranja-100 rounded-3xl h-80 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl mb-4 block">📍</span>
              <p className="text-gris-600 text-lg font-medium">Mapa interactivo</p>
              <p className="text-gris-500 text-sm">Ciudad de México, México</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto

