// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  plugins: [{ src: "~/plugins/datepicker.js", mode: "client" }],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
