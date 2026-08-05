import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SAI-Lab/',
  ssr: {
    // Some react-bootstrap dependencies expose directory-style subpaths that
    // Node ESM cannot load directly. The server bundle is build-only, so
    // bundling its dependencies is both reliable and inexpensive at runtime.
    noExternal: true,
  },
   server: {
    port: 3000,
    open: true
  }
})
