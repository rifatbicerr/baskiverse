import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import productsData from '../data/products.json'

function ProductGrid({ title = "Öne Çıkan Ürünler", limit = 8 }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Dummy data'yı yükle
    const limitedProducts = limit ? productsData.slice(0, limit) : productsData
    setProducts(limitedProducts)
  }, [limit])

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En popüler ve en çok tercih edilen ürünlerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-outline px-8 py-3">
            Tüm Ürünleri Gör
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
