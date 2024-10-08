import React from 'react'

const products = [
  { name: 'FertiOrganic Plus', description: 'Fertilizante orgánico completo para todo tipo de cultivos.' },
  { name: 'BioRegenera', description: 'Fórmula especial para la regeneración de suelos degradados.' },
  { name: 'EcoGrow', description: 'Estimulante de crecimiento 100% natural y ecológico.' },
]

const Products = () => {
  return (
    <section id="products" className="py-16 bg-green-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products