import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this project from /aura-luxe-salon/, not the domain root.
  base: '/aura-luxe-salon/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
