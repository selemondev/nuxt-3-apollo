// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],
    css: ["@/assets/tailwind.css"],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://api.spacex.land/graphql'
            }
        },
    },
})
