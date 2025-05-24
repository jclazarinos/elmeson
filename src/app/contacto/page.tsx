// src/app/contacto/page.tsx
'use client'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para atenderte y hacer de tu visita una experiencia inolvidable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-amber-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-gray-600">
                  Calle Colón 177, Paucarpata, Paucarpata, Peru<br />
                    Arequipa, Perú
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-amber-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-600">+51 959 173 831</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-amber-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">Victorvizcarraojeda@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-amber-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Horarios</h3>
                  <p className="text-gray-600">
                    Lunes - Viernes: 12:00 - 23:00<br />
                    Sábado - Domingo: 11:00 - 00:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-300 h-96 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">[Mapa de Google Maps]</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-amber-50 p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Tienes alguna pregunta?</h3>
          <p className="text-gray-600 mb-6">
            No dudes en contactarnos por cualquiera de nuestros canales
          </p>
          <a
            href="https://wa.me/959173831"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <FaWhatsapp />
            Escríbenos por WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}