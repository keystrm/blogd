// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primevue/resources/themes/aura-dark-blue/theme.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode','nuxt-primevue'],
  colorMode: {
      classSuffix: '',
      preference: 'light',
      fallback: 'light'
  },
})
