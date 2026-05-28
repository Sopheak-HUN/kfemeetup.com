import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100
      },
      hmr: {
        clientPort: process.env.CLIENT_PORT ? parseInt(process.env.CLIENT_PORT) : 3000
      }
    }
  }
})
