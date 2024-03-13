// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3000",
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
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
  app: {
    head: {
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: "http://localhost:3000/themes/aura-light-blue/theme.css",
        },
      ],
    },
  },
});
