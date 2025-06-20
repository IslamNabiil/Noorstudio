// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Noorstudio/", // 👈 اسم الريبو بتاعك
  plugins: [react()],
  server: {
    host: true
  }
})





