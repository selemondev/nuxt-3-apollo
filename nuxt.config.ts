// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', 'nuxt-icon', "@nuxtjs/color-mode", '@nuxt/image-edge'],
    css: ["@/assets/css/tailwind.css"],
    image: {
        domains: ['rickandmortyapi.com']
    },
    colorMode: {
        classSuffix: ''
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://rickandmortyapi.com/graphql'
            }
        },
    },
})
