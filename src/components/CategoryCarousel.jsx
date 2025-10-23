import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function CategoryCarousel() {
  const categories = [
    {
      id: 1,
      name: 'Tişörtler',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Tişörtler',
      productCount: 150
    },
    {
      id: 2,
      name: 'Kupalar',
      image: 'https://via.placeholder.com/300x300/2C3E50/FFFFFF?text=Kupalar',
      productCount: 80
    },
    {
      id: 3,
      name: 'Çantalar',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Çantalar',
      productCount: 60
    },
    {
      id: 4,
      name: 'Posterler',
      image: 'https://via.placeholder.com/300x300/2C3E50/FFFFFF?text=Posterler',
      productCount: 120
    },
    {
      id: 5,
      name: 'Telefon Kılıfları',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Kılıflar',
      productCount: 200
    },
    {
      id: 6,
      name: 'Mousepad',
      image: 'https://via.placeholder.com/300x300/2C3E50/FFFFFF?text=Mousepad',
      productCount: 45
    },
    {
      id: 7,
      name: 'Defter',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Defter',
      productCount: 90
    },
    {
      id: 8,
      name: 'Sticker',
      image: 'https://via.placeholder.com/300x300/2C3E50/FFFFFF?text=Sticker',
      productCount: 300
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kategoriler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun kategoriyi seçin ve alışverişe başlayın
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="category-carousel"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{category.productCount} Ürün</p>
                  </div>
                </div>
                <h3 className="text-center font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default CategoryCarousel
