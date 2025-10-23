# Tech Context

## Technologies Used
### Frontend
- React 18.x - UI library
- Vite 5.x - Build tool ve dev server
- Tailwind CSS 3.x - Utility-first CSS framework
- React Router DOM 6.x - Client-side routing
- Swiper.js 11.x - Carousel/slider component

### Backend
- Java Spring Boot (sonraki aşamada entegre edilecek)
- REST API (placeholder endpoints dokümante edildi)

### Database
- Henüz yok (backend ile birlikte gelecek)

### Other Tools
- npm/yarn - Package manager
- Git - Version control
- VS Code/Windsurf - IDE
- ESLint - Code linting
- Prettier - Code formatting

## Development Setup
### Prerequisites
- Node.js >= 16.x
- npm >= 8.x veya yarn >= 1.22.x
- Git
- Modern web browser (Chrome, Firefox, Edge)

### Installation Steps
1. Clone repository: `git clone <repo-url>`
2. Navigate to project: `cd baskiverse`
3. Install dependencies: `npm install`
4. Start dev server: `npm run dev`
5. Open browser: `http://localhost:5173`

### Environment Variables
```bash
# Şu an için environment variable gerekmiyor
# Backend entegrasyonunda eklenecek:
# VITE_API_BASE_URL=http://localhost:8080/api
# VITE_API_TIMEOUT=5000
```

## Technical Constraints
- Sadece frontend geliştirme (backend yok)
- Dummy data kullanımı zorunlu
- IE11 desteği yok (modern browsers only)
- Tailwind CSS utilities kullanımı tercih edilmeli
- Component-based architecture zorunlu
- Responsive breakpoints: sm(640), md(768), lg(1024), xl(1280)

## Dependencies
### Core Dependencies
- react: UI library
- react-dom: React DOM rendering
- react-router-dom: Client-side routing
- swiper: Carousel/slider functionality

### Dev Dependencies
- @vitejs/plugin-react: Vite React plugin
- tailwindcss: CSS framework
- postcss: CSS processing
- autoprefixer: CSS vendor prefixing
- eslint: Code linting
- prettier: Code formatting

## Tool Usage Patterns
### Vite
- Kullanım: Dev server ve build tool
- Komutlar:
  - `npm run dev` - Development server başlat
  - `npm run build` - Production build
  - `npm run preview` - Production build önizleme

### Tailwind CSS
- Kullanım: Utility-first CSS styling
- Komutlar: Otomatik olarak Vite ile entegre
- Config: `tailwind.config.js`

### React Router
- Kullanım: Sayfa navigasyonu
- Pattern: BrowserRouter ile declarative routing

### Swiper
- Kullanım: Carousel ve slider componentleri
- Pattern: React Swiper components kullanımı

---
*Bu dosya kullanılan teknolojileri, geliştirme ortamını ve teknik kısıtları belgeler.*
