// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3000",
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/primebase.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/color-mode", "nuxt-primevue"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
  primevue: {
      options: { unstyled: true },
      importPT: { as: 'Lara', from: path.resolve(__dirname, './presets/lara/') },
      components: {
          exclude: ["Editor", "Chart"]
      }
  }
});
