import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [sortBy, setSortBy] = useState('default')

  const categories = ['Tümü', ...new Set(productsData.map(p => p.category))]

  useEffect(() => {
    setProducts(productsData)
    setFilteredProducts(productsData)
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Kategori filtresi
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Sıralama
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, sortBy, products])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Başlık */}
      <div className="bg-white border-b">
        <div className="container-custom py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Tüm Ürünler
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} ürün bulundu
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol Sidebar - Filtreler */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h3 className="font-bold text-lg mb-4">Filtreler</h3>
              
              {/* Kategori Filtresi */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-gray-700 mb-3">Kategori</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sıralama */}
              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-3">Sırala</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="default">Varsayılan</option>
                  <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                  <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                  <option value="rating">En Yüksek Puan</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Sağ - Ürün Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-gray-500">Bu kategoride ürün bulunamadı</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products
