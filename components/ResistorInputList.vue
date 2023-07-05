<template>
  <div>
    <h2>Resistor values</h2>
    <div v-for="(resistor, index) in resistors" :key="index">
      <input v-model.number="resistors[index]" type="number" min="0.01" step="0.01">
    </div>
    <button @click="addResistor">
      ➕
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [1]
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      resistors: this.modelValue
    }
  },
  watch: {
    resistors: {
      handler () {
        this.$emit('update:modelValue', this.resistors)
      },
      deep: true
    }
  },
  methods: {
    addResistor () {
      this.resistors.push(1)
      this.$emit('update:modelValue', this.resistors)
    }
  }
}
</script>
