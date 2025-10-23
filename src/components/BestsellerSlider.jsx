import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import ProductCard from './ProductCard'
import productsData from '../data/products.json'
import 'swiper/css'
import 'swiper/css/navigation'

function BestsellerSlider() {
  // En yüksek rating'e sahip ürünleri al
  const bestsellers = [...productsData]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 6)

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            En Çok Satanlar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bestseller Ürünler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin en çok tercih ettiği ve en yüksek puan alan ürünler
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="bestseller-slider pb-12"
        >
          {bestsellers.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default BestsellerSlider
