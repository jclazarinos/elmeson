// src/components/sections/About.tsx
'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Una Experiencia Única
            </h2>
            <p className="text-gray-600 mb-4">
              En El Mesón, cada evento cuenta una historia. Nuestro compromiso
              con la excelencia se refleja en cada evento cuidadosamente planificado.
            </p>
            <p className="text-gray-600 mb-6">
              Desde 2010, hemos sido el destino preferido para quienes buscan una
              experiencia excepcional en un ambiente acogedor y elegante.
            </p>
            <a
              href="/nosotros"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Conoce Más
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-300 h-96 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">[Imagen del local]</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About