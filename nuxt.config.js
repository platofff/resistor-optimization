export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = true
    }
  }
})
