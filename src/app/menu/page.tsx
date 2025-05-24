// src/app/menu/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'entradas' as const, name: 'Entradas' },
  { id: 'principales' as const, name: 'Platos Principales' },
  { id: 'postres' as const, name: 'Postres' },
  { id: 'bebidas' as const, name: 'Bebidas' },
]

const menuItems = {
  entradas: [
    { name: 'Carpaccio de Res', description: 'Con rúcula y parmesano', price: '$18', vegetarian: false },
    { name: 'Ensalada César', description: 'Lechuga romana, crutones, parmesano', price: '$14', vegetarian: true },
    { name: 'Ceviche Mixto', description: 'Pescado y mariscos marinados', price: '$22', vegetarian: false },
  ],
  principales: [
    { name: 'Lomo Saltado', description: 'Tiras de lomo, cebolla, tomate', price: '$28', vegetarian: false },
    { name: 'Pasta Primavera', description: 'Vegetales frescos de temporada', price: '$24', vegetarian: true },
    { name: 'Parrilla Marina', description: 'Selección de mariscos a la parrilla', price: '$38', vegetarian: false },
  ],
  postres: [
    { name: 'Tiramisú', description: 'Clásico postre italiano', price: '$10', vegetarian: true },
    { name: 'Crème Brûlée', description: 'Crema de vainilla caramelizada', price: '$12', vegetarian: true },
    { name: 'Tarta de Chocolate', description: 'Con helado de vainilla', price: '$11', vegetarian: true },
  ],
  bebidas: [
    { name: 'Vino Tinto (Copa)', description: 'Selección de la casa', price: '$12', vegetarian: true },
    { name: 'Pisco Sour', description: 'Cóctel peruano clásico', price: '$14', vegetarian: true },
    { name: 'Limonada Natural', description: 'Limón fresco y hierbabuena', price: '$6', vegetarian: true },
  ],
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuItems>('entradas')
  const [showVegetarian, setShowVegetarian] = useState(false)

  const filteredItems = showVegetarian
    ? menuItems[activeCategory].filter(item => item.vegetarian)
    : menuItems[activeCategory]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Carta</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros platos únicos, elaborados con ingredientes de la mejor calidad.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showVegetarian}
              onChange={(e) => setShowVegetarian(e.target.checked)}
              className="mr-2"
            />
            <span className="text-gray-700">Solo vegetarianos</span>
          </label>
        </div>

        {/* Items del menú */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                {/*<span className="text-amber-600 font-bold">{item.price}</span>*/}
              </div>
              <p className="text-gray-600">{item.description}</p>
              {item.vegetarian && (
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Vegetariano
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}