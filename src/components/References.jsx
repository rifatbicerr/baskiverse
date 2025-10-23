function References() {
  const brands = [
    { id: 1, name: 'Apple', logo: 'https://via.placeholder.com/150x80/FFFFFF/000000?text=Apple' },
    { id: 2, name: 'Samsung', logo: 'https://via.placeholder.com/150x80/FFFFFF/000000?text=Samsung' },
    { id: 3, name: 'Xiaomi', logo: 'https://via.placeholder.com/150x80/FFFFFF/000000?text=Xiaomi' },
    { id: 4, name: 'Vestel', logo: 'https://via.placeholder.com/150x80/FFFFFF/000000?text=Vestel' },
    { id: 5, name: 'Arçelik', logo: 'https://via.placeholder.com/150x80/FFFFFF/000000?text=Arçelik' },
    { id: 6, name: 'Beko', logo: 'https://via.placeholder.com/150x80/FFFFFF/000000?text=Beko' },
  ]

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Referanslarımız
          </h2>
          <p className="text-gray-600">
            Güvenilir markalarla çalışıyoruz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References
