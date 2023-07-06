export default defineNuxtConfig({
  // devtools: { enabled: true },
  devtools: { enabled: false },
  ssr: false,
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = true
    }
  },
  head: {
    title: 'Resistor optimization'
  }
})
