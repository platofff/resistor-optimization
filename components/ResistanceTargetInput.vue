<template>
  <div class="input-container">
    <h2>Target resistance</h2>
    <input v-model="resistance" class="input-field" type="number" min="0.01" step="0.01">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: null
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      resistance: this.modelValue
    }
  },
  watch: {
    resistance (val) {
      localStorage.setItem('targetResistance', JSON.stringify(val))
      this.$emit('update:modelValue', parseFloat(val))
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/common.css');
</style>
