<template>
  <div class="container">
    <div class="input-fields">
      <ResistanceTargetInput v-model="targetResistance" />
      <MaxResistorCountInput v-model="maxResistors" />
      <ResistorInputList v-model="resistors" />
      <button class="calculate-button" :disabled="!isFilled" @click="calculate">
        Calculate
      </button>
    </div>
    <ResultSchematic
      :calculating="svgCalculating"
      :svg-code="svgCode"
      :resistance="resistance"
      @cancel:calculation="cancelCalculation()"
    />
  </div>
</template>

<script>
import ResistorInputList from '~/components/ResistorInputList.vue'
import ResistanceTargetInput from '~/components/ResistanceTargetInput.vue'
import MaxResistorCountInput from '~/components/MaxResistorCountInput.vue'
import ResultSchematic from '~/components/ResultSchematic.vue'

import WASMWorker from '@/assets/wasm/resistor-optimization?worker'

export default {
  components: {
    ResistorInputList,
    ResistanceTargetInput,
    MaxResistorCountInput,
    ResultSchematic
  },
  data () {
    return {
      resistors: JSON.parse(localStorage.getItem('resistors')) || [1],
      targetResistance: JSON.parse(localStorage.getItem('targetResistance')) || null,
      maxResistors: JSON.parse(localStorage.getItem('maxResistors')) || 3,
      svgCalculating: false,
      svgCode: '',
      resistance: 0,
      wasm: null,
      worker: null
    }
  },
  computed: {
    isFilled () {
      return this.resistors.length > 0 && !this.resistors.includes(0) &&
        this.targetResistance > 0 && this.maxResistors > 0
    }
  },
  watch: {
    resistors: {
      deep: true,
      handler (newResistors) {
        this.updateResistorList(newResistors)
      }
    }
  },
  created () {
    this.initWASMWorker()
  },
  methods: {
    initWASMWorker () {
      this.worker = new WASMWorker({ type: 'module' })
      this.worker.onmessage = (event) => {
        this.svgCode = event.data.svg
        this.resistance = event.data.resistance
        this.svgCalculating = false
      }
      this.updateResistorList(this.resistors)
    },
    updateResistorList (resistors) {
      this.worker.postMessage({
        type: 'updateResistorList',
        resistors: [...resistors]
      })
    },
    calculate () {
      this.svgCalculating = true
      this.svgCode = ''
      this.worker.postMessage({
        type: 'calculate',
        targetResistance: this.targetResistance,
        maxResistors: this.maxResistors
      })
    },
    cancelCalculation () {
      this.worker.terminate()
      this.initWASMWorker()
      this.svgCalculating = false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  font-family: sans-serif;
}

.input-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100vw;
}

@media (min-width: 500px) and (orientation: landscape) {
  .input-fields {
    max-width: 350px;
  }
}

.calculate-button {
  background-color: #007bff;
  color: white;
  font-size: medium;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
}

.calculate-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

</style>
