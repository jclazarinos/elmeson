// src/components/sections/Specialties.tsx
'use client'
import { motion } from 'framer-motion'
//import Image from 'next/image'

const Specialties = () => {
  const dishes = [
    {
      id: 1,
      name: 'XV años',
      description: 'Celebra la magia y el encanto de una etapa inolvidable con un banquete que refleje la alegría y los sueños de la quinceañera. En El Mesón, transformamos su visión en una realidad culinaria, desde vibrantes estaciones de comida que fascinarán a los jóvenes hasta elegantes menús que deleitarán a todos los invitados. Nos encargamos de cada detalle gastronómico para que la estrella de la noche solo se preocupe por brillar. Permítenos crear sabores que se conviertan en recuerdos imborrables de sus dulces XV.',
      price: '$32',
      image: '/images/dish-1.jpg',
    },
    {
      id: 2,
      name: 'Bodas',
      description: 'El día más importante de sus vidas merece una celebración culinaria que hable el lenguaje del amor. En El Mesón, diseñamos experiencias gastronómicas tan únicas y especiales como su historia. Desde íntimas recepciones hasta grandes banquetes, cada plato es elaborado con pasión y los ingredientes más selectos, creando una sinfonía de sabores que complementará la alegría de su unión. Confíen en nosotros para orquestar el festín de sus sueños, dejando una impresión deliciosa y duradera en cada uno de sus invitados. Porque el amor, como la buena comida, se disfruta mejor cuando se comparte.',
      price: '$28',
      image: '/images/dish-2.jpg',
    },
    {
      id: 3,
      name: 'Almuerzos Ejecutivos',
      description: 'En el mundo de los negocios, cada detalle cuenta. Nuestros almuerzos ejecutivos están diseñados para impresionar, facilitar la conversación y energizar a su equipo o clientes. En El Mesón, ofrecemos propuestas gastronómicas sofisticadas, puntuales y eficientes, adaptadas a la dinámica de su jornada laboral. Desde menús ligeros y saludables hasta opciones más contundentes para reuniones clave, garantizamos calidad, presentación impecable y un servicio discreto que permite que sus objetivos sean el centro de atención. Eleve sus encuentros profesionales con sabores que reflejan excelencia.',
      price: '$45',
      image: '/images/dish-3.jpg',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestras Especialidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre nuestros eventos más populares y deja que transformemos tu próxima celebración en una experiencia inolvidable. Con nuestro servicio de catering, tú solo te preocupas por disfrutar mientras nosotros nos encargamos de cada delicioso detalle. ¡Contáctanos y creemos juntos momentos memorables!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-300 relative">
                {/* Aquí iría la imagen */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Imagen del evento]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    {/*dish.price*/}
                  </span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                    <a href="/reservas">
                    Reservar
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties