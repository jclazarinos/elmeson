// src/app/galeria/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function GaleriaPage() {
  const [filter, setFilter] = useState('todos')

  const images = [
    { id: 1, category: 'platos', alt: 'Plato gourmet 1' },
    { id: 2, category: 'ambiente', alt: 'Interior del restaurante' },
    { id: 3, category: 'platos', alt: 'Plato gourmet 2' },
    { id: 4, category: 'eventos', alt: 'Evento especial' },
    { id: 5, category: 'ambiente', alt: 'Terraza exterior' },
    { id: 6, category: 'platos', alt: 'Plato gourmet 3' },
    { id: 7, category: 'eventos', alt: 'Celebración privada' },
    { id: 8, category: 'platos', alt: 'Postre especial' },
  ]

  const filteredImages = filter === 'todos' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros espacios y creaciones culinarias
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['todos', 'platos', 'ambiente', 'eventos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === cat
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-300 h-64 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-300">
                [{image.alt}]
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
