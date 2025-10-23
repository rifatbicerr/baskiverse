# Baskiverse E-Commerce Frontend

Özel baskılı ürünler için modern, responsive e-ticaret platformu.

## 🚀 Teknolojiler

- **React 18** - UI Library
- **Vite 5** - Build Tool & Dev Server
- **Tailwind CSS 3** - Utility-First CSS Framework
- **React Router DOM 6** - Client-Side Routing
- **Swiper.js 11** - Carousel/Slider Component

## 📋 Gereksinimler

- Node.js >= 16.x
- npm >= 8.x veya yarn >= 1.22.x

## 🛠️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Development server'ı başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın:
```
http://localhost:5173
```

## 📦 Build

Production build oluşturmak için:
```bash
npm run build
```

Build önizlemesi:
```bash
npm run preview
```

## 📁 Proje Yapısı

```
baskiverse/
├── src/
│   ├── assets/          # Görseller, ikonlar
│   ├── components/      # Reusable componentler
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Sayfa componentleri
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── NewProducts.jsx
│   │   ├── Campaigns.jsx
│   │   ├── Contact.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx         # Ana uygulama
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── memory-bank/        # Proje dokümantasyonu
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: #FF6B35 (Turuncu)
- **Secondary**: #2C3E50 (Koyu Gri)

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 📝 Geliştirme Notları

- Sadece frontend geliştirme (backend Java ile sonraki aşamada)
- Dummy data kullanılacak
- Tüm sayfalar responsive
- Component-based architecture
- Tailwind utilities kullanımı tercih edilmeli

## 🔗 Sayfalar

- `/` - Ana Sayfa
- `/products` - Ürünler
- `/products/:id` - Ürün Detay
- `/new-products` - Yeni Ürünler
- `/campaigns` - Kampanyalar
- `/contact` - İletişim
- `/about` - Hakkımızda
- `/login` - Giriş Yap
- `/register` - Kayıt Ol

## 📄 Lisans

Bu proje özel bir projedir.

## 👥 İletişim

Baskiverse - info@baskiverse.com
