<template>
  <div class="input-container">
    <h2>Max resistors</h2>
    <input
      v-model="maxResistors"
      class="input-field"
      type="number"
      min="1"
      step="1"
    >
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
      maxResistors: this.modelValue
    }
  },
  watch: {
    maxResistors (val) {
      localStorage.setItem('maxResistors', JSON.stringify(val))
      this.$emit('update:modelValue', parseInt(val))
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/common.css');
</style>
