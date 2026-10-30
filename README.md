# Afora — Stage 1 storefront (React + Vite + Tailwind)
npm install && npm run dev      (build: npm run build)

Edit before launch:
- src/lib/config.js      -> whatsappNumber (digits, country code), currency
- src/data/products.js   -> real prices + final copy (price: null = "Price to be confirmed")
- src/components/ui/Cover.jsx -> swap placeholder covers for your artwork (public/images/afora/)
Frontend only: no backend, auth or payments. vercel.json handles SPA routing on Vercel.
