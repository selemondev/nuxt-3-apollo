// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', 'nuxt-icon'],
    css: ["@/assets/css/tailwind.css"],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://rickandmortyapi.com/graphql'
            }
        },
    },
})
