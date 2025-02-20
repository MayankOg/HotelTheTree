import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/HotelTheTree/', // Updated with correct repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
