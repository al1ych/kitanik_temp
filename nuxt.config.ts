// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],

  fonts: {
    families: [
      {
        name: 'Inter',
        weights: [400, 500, 600, 700], // Укажите необходимые веса
        styles: ['normal', 'italic'], // Укажите необходимые стили
      },

      {
        name: 'League Gothic',
        weights: [400], // Укажите необходимые веса
        styles: ['normal'], // Укажите необходимые стили
      },
    ],
  },
})