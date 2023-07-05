<template>
  <div>
    <ResistorInputList v-model="resistors" />
    <ResistanceTargetInput v-model="targetResistance" />
    <MaxResistorCountInput v-model="maxResistors" />
    <button :disabled="!isFilled" @click="calculate">
      Calculate
    </button>
    <ResultSchematic :loading="svgLoading" :svg-code="svgCode" :resistance="resistance" />
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
      resistors: [1],
      targetResistance: null,
      maxResistors: null,
      svgLoading: false,
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
    this.worker = new WASMWorker({ type: 'module' })
    this.worker.onmessage = (event) => {
      this.svgCode = event.data.svg
      this.resistance = event.data.resistance
      this.svgLoading = false
    }
  },
  methods: {
    updateResistorList (resistors) {
      this.worker.postMessage({
        type: 'updateResistorList',
        resistors: [...resistors]
      })
    },
    calculate () {
      this.svgLoading = true
      this.svgCode = ''
      this.worker.postMessage({
        type: 'calculate',
        targetResistance: this.targetResistance,
        maxResistors: this.maxResistors
      })
    }
  }
}
</script>
