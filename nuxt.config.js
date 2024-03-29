// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    modules: ["@pinia/nuxt"],
    build: {
        transpile: ['gsap'],
    },
    css: [
        '@/assets/variables.scss',
    ],
  
})

