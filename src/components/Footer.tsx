import React from 'react'
import { Leaf } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <Leaf size={24} />
          <span className="text-xl font-bold ml-2">Fertiorganico Mineral</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Fertiorganico Mineral. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer