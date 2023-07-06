export default defineNuxtConfig({
  // devtools: { enabled: true },
  devtools: { enabled: false },
  ssr: false,
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = true
    }
  },
  app: {
    head: {
      title: 'Resistor optimization'
    }
  }
})
