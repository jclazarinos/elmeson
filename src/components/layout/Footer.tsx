// src/components/layout/Footer.tsx
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">El Mesón</h3>
            <p className="text-gray-400">
              Experiencia única con los mejores eventos de Arequipa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-gray-400 hover:text-white">Carta</Link></li>
              <li><Link href="/reservas" className="text-gray-400 hover:text-white">Reservas</Link></li>
              <li><Link href="/nosotros" className="text-gray-400 hover:text-white">Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <p className="text-gray-400">
              Lunes - Viernes: 12:00 - 23:00<br />
              Sábado - Domingo: 11:00 - 00:00
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 El Mesón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer