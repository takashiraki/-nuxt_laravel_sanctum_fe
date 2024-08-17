// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  routeRules: {
    "/account/**": { ssr: false },
    "/auth/**": { ssr: false },
  },

  modules: ["nuxt-sanctum-auth"],
  nuxtSanctumAuth: {
    token: false,
    baseUrl: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8080",
    endpoints: {
      csrf: "/sanctum/csrf-cookie",
      login: "/login",
      logout: "/logout",
      user: "/api/user",
    },
    csrf: {
      headerKey: "X-XSRF-TOKEN",
      cookieKey: "XSRF-TOKEN",
      tokenCookieKey: "nuxt-sanctum-auth-token",
    },
    redirects: {
      home: "/home",
      login: "/auth/login",
      logout: "/",
    },
  },
});
