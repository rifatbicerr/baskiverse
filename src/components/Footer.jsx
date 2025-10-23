import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">BASKIVERSE</h3>
            <p className="text-sm text-gray-300 mb-4">
              Özel baskılı ürünlerde kalite ve güvenin adresi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary transition-colors">Ürünler</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Müşteri Hizmetleri</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">Hakkımızda</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <p className="text-sm text-gray-300">İstanbul, Türkiye</p>
            <p className="text-sm text-gray-300">0555 123 45 67</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Baskiverse. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
