// src/app/nosotros/page.tsx
'use client'
import { motion } from 'framer-motion'

export default function NosotrosPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce la pasión y dedicación detrás de cada evento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Compromiso y Excelencia</h2>
            <p className="text-gray-600 mb-4">
              Desde 2010, El Mesón ha sido un referente en eventos locales,
              combinando profesionalismo con calidad.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestro chef ejecutivo, con más de 20 años de experiencia internacional,
              lidera un equipo apasionado por crear experiencias únicas.
            </p>
            <p className="text-gray-600">
              Trabajamos con productores profesionales para garantizar ingredientes frescos y de
              la más alta calidad, apoyando a nuestra comunidad y reduciendo nuestra huella
              ambiental.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-300 h-96 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">[Imagen del Chef]</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-5xl font-bold text-amber-600 mb-2">14</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-amber-600 mb-2">50+</h3>
            <p className="text-gray-600">Eventos Únicos</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-amber-600 mb-2">100%</h3>
            <p className="text-gray-600">Eventos Locales</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}