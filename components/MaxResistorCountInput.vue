<template>
  <div>
    <h2>Max resistors</h2>
    <input v-model="maxResistors" type="number" min="1" max="5" step="1">
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
      this.$emit('update:modelValue', parseInt(val))
    }
  }
}
</script>
