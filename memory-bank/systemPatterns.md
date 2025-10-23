# System Patterns

## System Architecture
### Overview
Baskiverse frontend, component-based React mimarisi kullanır. Sayfa bazlı routing ile SPA (Single Page Application) yapısındadır. Layout components (Header, Navbar, Footer) tüm sayfalarda ortak kullanılır. Reusable UI components ile DRY prensibi uygulanır.

### Architecture Diagram
```
App (Router)
├── Layout
│   ├── Header (Logo, Search, Cart, User)
│   ├── Navbar (Categories, Links)
│   └── Footer (Links, Social, Newsletter)
├── Pages
│   ├── Home
│   │   ├── Hero
│   │   ├── FeaturesBar
│   │   ├── CategoryCarousel
│   │   ├── ProductGrid
│   │   ├── ProductFlow
│   │   ├── BestsellerSlider
│   │   ├── References
│   │   └── BlogPreview
│   ├── Products (List + Filter)
│   ├── ProductDetail (Gallery + Info)
│   ├── NewProducts
│   ├── Campaigns
│   ├── Contact (Form)
│   ├── About
│   ├── Login
│   └── Register
└── Components (Shared)
    ├── ProductCard
    ├── Button
    ├── Input
    ├── Carousel
    └── Badge
```

## Key Technical Decisions
1. **Vite + React**
   - Neden: Hızlı dev server, modern build tool, HMR desteği
   - Alternatifler: Create React App (daha yavaş), Next.js (SSR gerekmediği için overkill)

2. **Tailwind CSS**
   - Neden: Utility-first, hızlı styling, küçük bundle size, responsive utilities
   - Alternatifler: Styled Components (runtime overhead), CSS Modules (daha fazla boilerplate)

3. **React Router DOM**
   - Neden: Industry standard, declarative routing, nested routes desteği
   - Alternatifler: Reach Router (deprecated), TanStack Router (yeni, az dokümantasyon)

4. **Swiper.js**
   - Neden: Modern, performanslı, touch-friendly, responsive
   - Alternatifler: React Slick (eski), custom implementation (zaman alıcı)

5. **Local State Management**
   - Neden: Basit state ihtiyacı, Context API yeterli, backend gelince Redux/Zustand eklenebilir
   - Alternatifler: Redux (overkill), Zustand (şimdilik gereksiz)

## Design Patterns in Use
- **Component Composition**: Küçük, reusable componentler ile büyük sayfalar oluşturma
- **Container/Presentational**: Logic ve UI ayrımı (backend geldiğinde önemli)
- **Render Props**: Swiper gibi third-party componentlerde
- **Custom Hooks**: Ortak logic'i paylaşmak için (useCart, useAuth placeholder)
- **Layout Pattern**: Header/Navbar/Footer ile sayfa wrapper

## Component Relationships
### Layout Components
- **Header**: Logo, SearchBar, CartIcon, UserMenu
- **Navbar**: CategoryLinks, MobileMenu (hamburger)
- **Footer**: FooterLinks, SocialIcons, Newsletter
- Bağımlılıklar: React Router Link
- Sorumluluğu: Tüm sayfalarda ortak navigasyon ve branding

### ProductCard
- Bağımlılıklar: Badge, Button, Image
- Sorumluluğu: Ürün bilgilerini görsel olarak gösterme, sepete ekleme butonu
- Kullanım: ProductGrid, BestsellerSlider, NewProducts

### Carousel/Slider
- Bağımlılıklar: Swiper.js
- Sorumluluğu: Yatay kaydırılabilir içerik gösterme
- Kullanım: Hero, CategoryCarousel, BestsellerSlider, BlogPreview

### Form Components
- **Input**: Text, email, password, textarea
- **Button**: Primary, secondary, outline variants
- Bağımlılıklar: React Hook Form (opsiyonel)
- Sorumluluğu: Form input ve validation
- Kullanım: Contact, Login, Register

## Critical Implementation Paths
1. **Layout Setup**: Header/Navbar/Footer → tüm sayfalar için temel
2. **Home Page**: Hero → Features → Categories → Products → Bestsellers → References → Blog
3. **Product Flow**: ProductCard → ProductGrid → ProductDetail → Cart (placeholder)
4. **Routing**: App → Router → Pages → Components
5. **Responsive**: Mobile-first → Tablet → Desktop breakpoints

---
*Bu dosya sistem mimarisini, teknik kararları ve tasarım desenlerini belgeler.*
