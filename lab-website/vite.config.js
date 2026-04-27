import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SAI_LAB/',
   server: {
    port: 3000,
    open: true
  }
})
