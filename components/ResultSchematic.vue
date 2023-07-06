<template>
  <div class="result-container">
    <div v-if="calculating" class="calculating">
      Calculating...
      <button class="cancel-button" @click="cancelCalculation">
        Cancel
      </button>
    </div>
    <p v-if="svgCode !== ''" class="resistance-info">
      Resistance: {{ resistance }}
    </p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="svg-code" v-html="svgCode" />
  </div>
</template>

<script>
export default {
  props: {
    svgCode: {
      type: String,
      default: ''
    },
    calculating: {
      type: Boolean,
      default: false
    },
    resistance: {
      type: Number,
      default: null
    }
  },
  emits: ['cancel:calculation'],
  methods: {
    cancelCalculation () {
      this.$emit('cancel:calculation')
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/common.css');

.result-container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.calculating {
  color: #ff9800;
  font-weight: bold;
  margin-top: 30px;
}

.resistance-info {
  font-size: 18px;
  font-weight: bold;
}

.svg-code:deep(*) {
  max-width: 100%;
}

.cancel-button {
  margin-left: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
