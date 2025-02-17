// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],


  css: ['@/assets/css/main.css'],

  fonts: {
    families: [
      {
        name: 'Inter',
        weights: [400, 500, 600, 700], // Укажите необходимые веса
        styles: ['normal', 'italic'],  // Укажите необходимые стили
      },
      {
        name: 'League Gothic',
        weights: [400],                // Укажите необходимые веса
        styles: ['normal'],            // Укажите необходимые стили
      },
      {
        name: 'Mulish',
        weights: [400, 500, 600, 700, 800, 900], // Укажите нужные веса
        styles: ['normal', 'italic'],           // Если требуется курсив
      },
    ],
  },
})
