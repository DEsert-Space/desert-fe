import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['vue3-mobile-detection', 'is-mobile']
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
