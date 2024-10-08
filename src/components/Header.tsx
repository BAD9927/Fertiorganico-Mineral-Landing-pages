import React from 'react'
import { Leaf } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf size={24} />
          <span className="text-xl font-bold">Fertiorganico Mineral</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#products" className="hover:underline">Productos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header