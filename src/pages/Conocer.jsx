import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Conocer = () => {
  const temas = [
    {
      id: 'envejecimiento',
      titulo: 'Envejecimiento Activo',
      icono: '🌱',
      color: 'verde',
      contenido: {
        introduccion: 'El envejecimiento activo es un concepto desarrollado por la Organización Mundial de la Salud (OMS) que busca optimizar las oportunidades de salud, participación y seguridad para mejorar la calidad de vida de las personas a medida que envejecen.',
        puntos: [
          {
            titulo: '¿Qué implica el envejecimiento activo?',
            texto: 'No se trata solo de mantenerse físicamente activo, sino de participar de manera continua en la vida social, económica, cultural, espiritual y cívica. Las personas mayores tienen derecho a seguir siendo miembros activos de sus comunidades y familias.'
          },
          {
            titulo: 'La tecnología como aliada',
            texto: 'El acceso a herramientas digitales permite a los adultos mayores mantener conexiones sociales, acceder a información de salud, participar en actividades recreativas y culturales, y ejercer su ciudadanía de forma más plena.'
          },
          {
            titulo: 'Beneficios comprobados',
            texto: 'Estudios demuestran que los adultos mayores que utilizan tecnología reportan menores niveles de soledad, mayor sensación de independencia y mejor bienestar emocional. La inclusión digital es un factor protector del envejecimiento saludable.'
          }
        ]
      }
    },
    {
      id: 'brecha',
      titulo: 'Brecha Digital',
      icono: '🌉',
      color: 'naranja',
      contenido: {
        introduccion: 'La brecha digital se refiere a la desigualdad en el acceso, uso y habilidades relacionadas con las tecnologías de la información y comunicación (TIC). Esta brecha afecta particularmente a los adultos mayores.',
        puntos: [
          {
            titulo: 'Dimensiones de la brecha',
            texto: 'La brecha digital no es solo cuestión de acceso a dispositivos. Incluye la brecha de uso (saber utilizar la tecnología), la brecha de habilidades (competencias digitales) y la brecha de resultados (beneficios obtenidos del uso tecnológico).'
          },
          {
            titulo: 'Factores que la profundizan',
            texto: 'Barreras económicas, educativas, culturales y físicas contribuyen a esta brecha. Muchos adultos mayores no tuvieron contacto con tecnología durante su vida laboral, lo que genera una curva de aprendizaje más pronunciada.'
          },
          {
            titulo: 'Consecuencias reales',
            texto: 'La exclusión digital puede significar perder acceso a servicios básicos (banca, salud, trámites), quedar aislado socialmente y ver reducida la autonomía personal. En un mundo cada vez más digitalizado, esta brecha tiene consecuencias serias.'
          }
        ]
      }
    },
    {
      id: 'alfabetizacion',
      titulo: 'Alfabetización Tecnológica',
      icono: '📱',
      color: 'purple',
      contenido: {
        introduccion: 'La alfabetización tecnológica para adultos mayores es un proceso de enseñanza-aprendizaje adaptado a sus necesidades, ritmos y contextos particulares, que busca desarrollar competencias digitales básicas y funcionales.',
        puntos: [
          {
            titulo: 'Principios pedagógicos clave',
            texto: 'La enseñanza debe ser paciente, repetitiva si es necesario, con instrucciones claras y paso a paso. Es fundamental partir de sus intereses reales (comunicarse con la familia, ver fotos, escuchar música) y no de conceptos abstractos.'
          },
          {
            titulo: 'El rol del acompañante',
            texto: 'Más que enseñar, se acompaña. El tutor, familiar o docente debe crear un ambiente de confianza, sin juicios, donde el error sea parte natural del aprendizaje. La empatía y la paciencia son herramientas fundamentales.'
          },
          {
            titulo: 'Metodología andragógica',
            texto: 'Los adultos aprenden diferente a los niños. Necesitan entender el "para qué" de lo que aprenden, relacionar los conocimientos nuevos con su experiencia previa, y avanzar a su propio ritmo sin presiones ni comparaciones.'
          }
        ]
      }
    }
  ]

  const consejos = [
    { icono: '🐢', texto: 'Ir despacio, cada persona tiene su ritmo' },
    { icono: '🔄', texto: 'Repetir las veces que sea necesario' },
    { icono: '👂', texto: 'Escuchar sus dudas sin minimizarlas' },
    { icono: '🎯', texto: 'Enfocarse en lo que ellos quieren lograr' },
    { icono: '✨', texto: 'Celebrar cada pequeño avance' },
    { icono: '📝', texto: 'Crear guías escritas con pasos simples' }
  ]

  return (
    <div className="min-h-screen bg-crema-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-500 to-verde-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-6xl mb-6 block">📖</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conocer para Apoyar
            </h1>
            <p className="text-xl text-verde-100 leading-relaxed">
              Para acompañar efectivamente a adultos mayores en su proceso de inclusión digital, 
              es fundamental comprender el contexto, los desafíos y las mejores prácticas. 
              Aquí encontrarás la información que necesitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Temas principales */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {temas.map((tema, index) => (
              <motion.article
                key={tema.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={tema.id}
                className="scroll-mt-24"
              >
                {/* Topic Header */}
                <div className={`bg-gradient-to-r ${
                  tema.color === 'verde' ? 'from-verde-400 to-verde-500' :
                  tema.color === 'naranja' ? 'from-naranja-400 to-naranja-500' :
                  'from-purple-400 to-purple-500'
                } rounded-t-2xl p-8 text-white`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{tema.icono}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{tema.titulo}</h2>
                      <div className="w-20 h-1 bg-white/50 rounded mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Topic Content */}
                <div className="bg-white rounded-b-2xl shadow-lg p-8">
                  <p className="text-lg text-gris-600 leading-relaxed mb-8 border-l-4 border-naranja-300 pl-6 italic">
                    {tema.contenido.introduccion}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {tema.contenido.puntos.map((punto, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-crema-50 to-white p-6 rounded-xl border border-gray-100"
                      >
                        <h3 className="text-lg font-bold text-gris-800 mb-3">
                          {punto.titulo}
                        </h3>
                        <p className="text-gris-600 leading-relaxed text-sm">
                          {punto.texto}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos Section */}
      <section className="py-16 bg-gradient-to-br from-naranja-50 to-crema-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gris-800 mb-4">
              Consejos para acompañar
            </h2>
            <p className="text-lg text-gris-600 max-w-2xl mx-auto">
              Principios fundamentales para convertirte en un mejor acompañante digital
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consejos.map((consejo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4"
              >
                <span className="text-4xl">{consejo.icono}</span>
                <p className="text-gris-700 font-medium">{consejo.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gris-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl text-naranja-400 block mb-6">"</span>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
              La inclusión digital no es solo aprender a usar un dispositivo; 
              es abrir una puerta hacia la conexión, la autonomía y la participación 
              activa en la sociedad moderna.
            </p>
            <footer className="text-naranja-300 font-medium">
              — Principio fundamental del proyecto
            </footer>
          </motion.blockquote>
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
            <h2 className="text-3xl font-bold text-gris-800 mb-6">
              ¿Quieres poner en práctica lo aprendido?
            </h2>
            <p className="text-lg text-gris-600 mb-8">
              Explora nuestros recursos y guías para comenzar a acompañar a adultos mayores 
              en su proceso de aprendizaje tecnológico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/recursos"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-naranja-400 to-naranja-500 text-white font-semibold rounded-xl shadow-lg"
                >
                  Ver recursos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/capacitate"
                  className="inline-flex items-center px-8 py-4 bg-white text-gris-700 font-semibold rounded-xl shadow-md border-2 border-verde-200"
                >
                  Tomar un curso
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Conocer

