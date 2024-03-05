import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7075,
    open: true,
    proxy: {
      '/campgrounds': {
        target: 'http://localhost:7075',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
