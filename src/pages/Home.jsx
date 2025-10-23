import Hero from '../components/Hero'
import FeaturesBar from '../components/FeaturesBar'
import CategoryCarousel from '../components/CategoryCarousel'
import ProductGrid from '../components/ProductGrid'
import BestsellerSlider from '../components/BestsellerSlider'
import References from '../components/References'
import BlogPreview from '../components/BlogPreview'

function Home() {
  return (
    <div>
      <Hero />
      <FeaturesBar />
      <CategoryCarousel />
      <ProductGrid title="Öne Çıkan Ürünler" limit={8} />
      <BestsellerSlider />
      <References />
      <BlogPreview />
    </div>
  )
}

export default Home
