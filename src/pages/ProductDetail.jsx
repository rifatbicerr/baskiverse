import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import productsData from '../data/products.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  
  // Kartvizit seçenekleri
  const [selectedType, setSelectedType] = useState('Kabartmalı')
  const [selectedDirection, setSelectedDirection] = useState('Tek Yön')
  const [selectedQuantity, setSelectedQuantity] = useState('500')

  const cardTypes = ['Kabartmalı', 'Mat', 'Parlak', 'Özel Kesim']
  const directions = ['Tek Yön', 'Çift Yön']
  const quantities = [
    { value: '500', label: '500 Adet', price: 450 },
    { value: '1000', label: '1000 Adet', price: 750 },
    { value: '2000', label: '2000 Adet', price: 1350 },
    { value: '5000', label: '5000 Adet', price: 3000 }
  ]

  // Dummy görseller (gerçekte product.images array'i kullanılacak)
  const images = [
    product?.image || 'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600/FF6B35/FFFFFF?text=Görsel+2',
    'https://via.placeholder.com/600x600/2C3E50/FFFFFF?text=Görsel+3',
    'https://via.placeholder.com/600x600/FF6B35/FFFFFF?text=Görsel+4'
  ]

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === id)
    setProduct(foundProduct)
  }, [id])

  // Seçilen adete göre fiyat hesaplama
  const getSelectedPrice = () => {
    const selected = quantities.find(q => q.value === selectedQuantity)
    return selected ? selected.price : product?.price || 0
  }

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-gray-600">Ürün bulunamadı...</p>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">
          Ürünlere Dön
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link to="/" className="hover:text-primary">Ana Sayfa</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-primary">Ürünler</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
          {/* Sol - Görsel Gallery */}
          <div>
            <Swiper
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              navigation
              className="rounded-xl mb-4"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                    <img src={img} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              watchSlidesProgress
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-square cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all">
                    <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Sağ - Ürün Bilgileri */}
          <div>
            {product.badges && (
              <div className="flex gap-2 mb-4">
                {product.badges.map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">({product.rating})</span>
                </div>
              )}
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{product.category}</span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">
                  {getSelectedPrice().toFixed(2)} TL
                </span>
                <span className="text-sm text-gray-500">+ KDV</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Kartvizit Türü */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Tür:</h3>
              <div className="grid grid-cols-2 gap-3">
                {cardTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                      selectedType === type
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Yön Seçimi */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Yön:</h3>
              <div className="grid grid-cols-2 gap-3">
                {directions.map((direction) => (
                  <button
                    key={direction}
                    onClick={() => setSelectedDirection(direction)}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                      selectedDirection === direction
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {direction}
                  </button>
                ))}
              </div>
            </div>

            {/* Adet Seçimi */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Adet:</h3>
              <div className="grid grid-cols-2 gap-3">
                {quantities.map((qty) => (
                  <button
                    key={qty.value}
                    onClick={() => setSelectedQuantity(qty.value)}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-all text-left ${
                      selectedQuantity === qty.value
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{qty.label}</span>
                      <span className="text-sm font-bold">{qty.price} TL</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Butonlar */}
            <div className="flex gap-4">
              <button className="flex-1 btn-primary py-4 text-lg">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Sepete Ekle
              </button>
              <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Seçim Özeti */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Seçimleriniz:</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Tür:</span> {selectedType}</p>
                <p><span className="font-medium">Yön:</span> {selectedDirection}</p>
                <p><span className="font-medium">Adet:</span> {quantities.find(q => q.value === selectedQuantity)?.label}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ürün Detay Tabs */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex gap-8">
              <button className="pb-4 border-b-2 border-primary text-primary font-semibold">
                Açıklama
              </button>
              <button className="pb-4 border-b-2 border-transparent text-gray-600 hover:text-primary transition-colors">
                Yorumlar (12)
              </button>
              <button className="pb-4 border-b-2 border-transparent text-gray-600 hover:text-primary transition-colors">
                Soru & Cevap
              </button>
            </nav>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-xl font-bold mb-4">Ürün Açıklaması</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Profesyonel kartvizitler ile işinizi bir adım öteye taşıyın. Yüksek kaliteli baskı teknolojisi ile 
              üretilen kartvizitler, markanızı en iyi şekilde temsil eder.
            </p>
            <h4 className="font-semibold mb-2">Özellikler:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>350 gr 1. sınıf kuşe kağıt</li>
              <li>Profesyonel ofset baskı</li>
              <li>Hızlı teslimat (2-3 iş günü)</li>
              <li>Ücretsiz tasarım desteği</li>
              <li>Çevre dostu baskı teknolojisi</li>
            </ul>
            
            <h4 className="font-semibold mt-6 mb-2">Baskı Türleri:</h4>
            <div className="space-y-3 text-gray-600">
              <p><strong>Kabartmalı:</strong> Özel kabartma tekniği ile şık ve profesyonel görünüm</p>
              <p><strong>Mat:</strong> Klasik ve zarif mat laminasyon</p>
              <p><strong>Parlak:</strong> Canlı renkler için parlak laminasyon</p>
              <p><strong>Özel Kesim:</strong> Farklı şekillerde özel kesim seçenekleri</p>
            </div>
          </div>
        </div>

        {/* İlgili Ürünler */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={`https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Ürün+${item}`} 
                    alt={`Benzer Ürün ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Kartvizit Modeli {item}</h3>
                  <p className="text-primary font-bold">450.00 TL</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
