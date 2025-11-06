// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 🔧 Tắt DevTools và Telemetry để tránh chậm startup
  devtools: { enabled: false },
  telemetry: false,

  // 📦 Module
  modules: ['@pinia/nuxt'],

  // 🧠 Pinia config
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },

  // 🌐 App config
  app: {
    head: {
      title: 'Pathways',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Clone HTML sang Nuxt 3 sử dụng Bootstrap, Font Awesome và Swiper' },
      ],
      link: [
        // Font Google
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
        },
        // Bootstrap CSS
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
        },
        // Font Awesome
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
        // Swiper CSS
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          body: true,
          defer: true,
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          body: true,
          defer: true,
        },
      ],
    },
  },

  // 💨 Vite config: tăng tốc HMR và giảm check
  vite: {
    server: {
      watch: {
        usePolling: false, // không cần polling trên Windows
      },
      hmr: {
        overlay: false, // tắt popup lỗi đỏ (nhanh hơn chút)
      },
    },
    optimizeDeps: {
      include: ['pinia'], // preload Pinia để tránh reload chậm
    },
    build: {
      chunkSizeWarningLimit: 1000, // đừng cảnh báo file lớn
    },
    logLevel: 'error', // giảm log console khi build
  },

  // 🚀 Tối ưu Nitro server cho dev
  nitro: {
    devProxy: {},
    compressPublicAssets: true,
  },

  // 🧱 Giảm log khi dev
  future: {
    compatibilityVersion: 4,
  },

  // 🪶 Disable sourcemap trong dev để giảm load
  sourcemap: false,
})
