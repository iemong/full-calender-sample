export default {
  mode: 'spa',
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width'
      }
    ]
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/composition-api']
}
