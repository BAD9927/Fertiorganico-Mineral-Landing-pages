import React from 'react'
import { Sprout, Recycle, ThumbsUp } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Fertiorganico Mineral</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Sprout size={48} className="mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Cuidado del Medio Ambiente</h3>
            <p>Nuestros fertilizantes orgánicos promueven prácticas agrícolas sostenibles.</p>
          </div>
          <div className="text-center">
            <Recycle size={48} className="mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Regeneración de Suelos</h3>
            <p>Mejoramos la estructura y fertilidad del suelo de manera natural.</p>
          </div>
          <div className="text-center">
            <ThumbsUp size={48} className="mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
            <p>Productos de alta eficacia respaldados por investigación y desarrollo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About