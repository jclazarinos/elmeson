// src/components/sections/CTA.tsx
'use client'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para una experiencia inolvidable?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserva una visita hoy y déjanos sorprenderte con nuestros eventos únicos
          </p>
          <div className="space-x-4">
            <a
              href="/reservas"
              className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Reservar Ahora
            </a>
            <a
              href="/menu"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Ver Menú
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA