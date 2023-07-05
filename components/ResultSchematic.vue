<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <p v-if="svgCode !== ''">
      Resistance: {{ resistance }}
    </p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="svgCode" />
  </div>
</template>

<script>
export default {
  props: {
    svgCode: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    resistance: {
      type: Number,
      default: null
    }
  }
}
</script>
