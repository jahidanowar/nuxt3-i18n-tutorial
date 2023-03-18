// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "in-HI",
        iso: "en-HI",
        name: "हिंदी",
        file: "in-HI.json",
      },
    ],
    defaultLocale: "en-US",
    vueI18n: {
      fallbackLocale: "en-US",
    },
  },
});
