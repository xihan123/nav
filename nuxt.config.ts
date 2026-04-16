import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
  ],

  css: [
    '~/assets/css/main.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'xihan123',
      htmlAttrs: { lang: 'zh-CN', class: 'dark' },
      meta: [
        { name: 'description', content: 'xihan123 的个人导航站' },
        { name: 'theme-color', content: '#0a0a0a' },
        { property: 'og:title', content: 'xihan123' },
        { property: 'og:description', content: 'xihan123 的个人导航站' },
        { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/44894509?v=4' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://avatars.githubusercontent.com' },
        { rel: 'preconnect', href: 'https://github-readme-stats.xihan.website' },
        { rel: 'preconnect', href: 'https://img.shields.io' },
      ],
    },
  },
})
