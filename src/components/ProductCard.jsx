import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/products/${product.id}`}>
        {/* Ürün Görseli */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Badge'ler */}
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    badge === 'Yeni'
                      ? 'bg-green-500 text-white'
                      : badge === 'İndirim'
                      ? 'bg-red-500 text-white'
                      : 'bg-primary text-white'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Favori Butonu */}
          <button
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary hover:text-white"
            aria-label="Favorilere ekle"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Ürün Bilgileri */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          
          {product.category && (
            <p className="text-sm text-gray-500 mb-3">{product.category}</p>
          )}

          <div className="flex items-center justify-between">
            <div>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through mr-2">
                  {product.oldPrice.toFixed(2)} TL
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                {product.price.toFixed(2)} TL
              </span>
            </div>

            {product.rating && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Sepete Ekle Butonu */}
      <div className="p-4 pt-0">
        <button className="w-full btn-primary py-2 text-sm">
          <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Sepete Ekle
        </button>
      </div>
    </div>
  )
}

export default ProductCard
