import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        {
            title: 'Navegación',
            links: [
                { label: 'Inicio', path: '/' },
                { label: 'Conocer para apoyar', path: '/conocer' },
                { label: 'Guías y recursos', path: '/recursos' },
            ],
        },
        {
            title: 'Comunidad',
            links: [
                { label: 'Historias que inspiran', path: '/historias' },
                { label: 'Capacítate', path: '/capacitate' },
                { label: 'Contacto', path: '/contacto' },
            ],
        },
    ]

    const socialLinks = [
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'YouTube', icon: '📺', url: '#' },
        { name: 'Instagram', icon: '📷', url: '#' },
    ]

    return (
        <footer className="bg-linear-to-br from-gris-800 to-gris-700 text-white" role="contentinfo">
            {/* Wave decoration */}
            <div className="w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-12 md:h-16"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-crema-50"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 mb-4"
                        >
                            <div className="w-12 h-12 bg-linear-to-br from-naranja-400 to-naranja-500 rounded-xl flex items-center justify-center">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold" style={{ color: 'white' }}>Apoyar para Aprender</h2>
                                <p className="text-naranja-300 text-sm">Tecnología y Personas Mayores</p>
                            </div>
                        </motion.div>
                        <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
                            Un espacio dedicado a promover la inclusión digital de adultos mayores,
                            brindando recursos, guías y apoyo para quienes los acompañan en este
                            importante proceso de aprendizaje.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 bg-gris-700 hover:bg-naranja-500 rounded-lg flex items-center justify-center transition-colors"
                                    aria-label={`Síguenos en ${social.name}`}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold mb-4" style={{ color: 'white' }}>
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-300 hover:text-naranja-400 transition-colors flex items-center group"
                                        >
                                            <span className="w-2 h-2 bg-verde-400 rounded-full mr-3 group-hover:bg-naranja-400 transition-colors" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gris-600">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Apoyar para Aprender. Proyecto académico de Diseño Web Dinámico.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center">
                            Hecho con <span className="text-red-400 mx-1">❤️</span> para los adultos mayores
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

