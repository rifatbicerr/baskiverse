import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  // Placeholder ürün görselleri
  const heroImages = [
    {
      id: 1,
      main: 'https://via.placeholder.com/800x600/FF6B35/FFFFFF?text=Baskılı+Tişört',
      thumb: 'https://via.placeholder.com/150x150/FF6B35/FFFFFF?text=1',
      title: 'Özel Baskılı Tişörtler',
      description: 'Kendi tasarımınızı oluşturun'
    },
    {
      id: 2,
      main: 'https://via.placeholder.com/800x600/2C3E50/FFFFFF?text=Baskılı+Kupa',
      thumb: 'https://via.placeholder.com/150x150/2C3E50/FFFFFF?text=2',
      title: 'Özel Baskılı Kupalar',
      description: 'Her anınızı özel kılın'
    },
    {
      id: 3,
      main: 'https://via.placeholder.com/800x600/FF6B35/FFFFFF?text=Baskılı+Çanta',
      thumb: 'https://via.placeholder.com/150x150/FF6B35/FFFFFF?text=3',
      title: 'Özel Baskılı Çantalar',
      description: 'Stilinizi yansıtın'
    },
    {
      id: 4,
      main: 'https://via.placeholder.com/800x600/2C3E50/FFFFFF?text=Baskılı+Poster',
      thumb: 'https://via.placeholder.com/150x150/2C3E50/FFFFFF?text=4',
      title: 'Özel Baskılı Posterler',
      description: 'Duvarlarınızı süsleyin'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-8 md:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Sol Taraf - Görsel Carousel */}
          <div className="order-2 lg:order-1">
            {/* Ana Görsel Slider */}
            <div className="mb-4">
              <Swiper
                modules={[Navigation, Thumbs, Autoplay]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                navigation
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="rounded-2xl shadow-2xl overflow-hidden"
              >
                {heroImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative aspect-[4/3] bg-gray-100">
                      <img
                        src={image.main}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail Slider */}
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              watchSlidesProgress
              className="hero-thumbs"
            >
              {heroImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-200 aspect-square">
                    <img
                      src={image.thumb}
                      alt={`Thumbnail ${image.id}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Yeni Koleksiyon
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hayalinizdeki
              <span className="block text-primary">Tasarımı Yaratın</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Özel baskılı ürünlerinizi kolayca tasarlayın ve sipariş verin. 
              Kaliteli malzeme, hızlı teslimat ve uygun fiyatlarla yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary text-lg px-8 py-4">
                Alışverişe Başla
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="btn-outline text-lg px-8 py-4">
                Ürünleri İncele
              </button>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600 mt-1">Ürün Çeşidi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Destek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
