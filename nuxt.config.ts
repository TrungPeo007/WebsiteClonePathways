// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Tắt Nuxt DevTools
  devtools: { enabled: false },

  // Khai báo module
  modules: ['@pinia/nuxt'],

  // Cấu hình Pinia
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  app: {
    head: {
      title: 'Pathways',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Clone HTML sang Nuxt 3 sử dụng Bootstrap, Font Awesome và Swiper' },
      ],
      link: [
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
        // Bootstrap JS Bundle
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          body: true,
          defer: true,
        },
        // Swiper JS
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          body: true,
          defer: true,
        },
      ],
    },
  },

  // Cấu hình font Nunito toàn site mà không cần file CSS riêng
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `
            * {
              font-family: 'Nunito', sans-serif;
              box-sizing: border-box;
            }
          `,
        },
      },
    },
  },
})
