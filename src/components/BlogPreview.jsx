import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: 'Tişört Baskı Teknikleri: Hangisi Sizin İçin?',
      excerpt: 'DTG, serigrafi ve transfer baskı yöntemlerini karşılaştırıyoruz.',
      image: 'https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=Blog+1',
      date: '15 Ekim 2025',
      category: 'Rehber'
    },
    {
      id: 2,
      title: '2025 Baskı Trendleri',
      excerpt: 'Bu yıl öne çıkan tasarım ve baskı trendlerini keşfedin.',
      image: 'https://via.placeholder.com/600x400/2C3E50/FFFFFF?text=Blog+2',
      date: '10 Ekim 2025',
      category: 'Trend'
    },
    {
      id: 3,
      title: 'Kendi Tasarımınızı Nasıl Oluşturursunuz?',
      excerpt: 'Adım adım tasarım rehberi ile hayalinizdeki ürünü yaratın.',
      image: 'https://via.placeholder.com/600x400/FF6B35/FFFFFF?text=Blog+3',
      date: '5 Ekim 2025',
      category: 'Rehber'
    },
    {
      id: 4,
      title: 'Kurumsal Hediye Seçenekleri',
      excerpt: 'Şirketiniz için en uygun hediye ürünlerini seçin.',
      image: 'https://via.placeholder.com/600x400/2C3E50/FFFFFF?text=Blog+4',
      date: '1 Ekim 2025',
      category: 'İş'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog & Haberler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Baskı dünyasından son haberler ve faydalı içerikler
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="blog-slider pb-12"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Devamını Oku
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <button className="btn-outline px-8 py-3">
            Tüm Blog Yazıları
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
