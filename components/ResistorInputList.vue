<template>
  <div>
    <h2>Resistor values</h2>
    <div id="list">
      <div v-for="(resistor, index) in resistors" :key="index">
        <input v-model.number="resistors[index]" class="input-field" type="number" min="0.01" step="0.01">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="12px"
          viewBox="0 0 1000 1000"
          enable-background="new 0 0 1000 1000"
          xml:space="preserve"
          class="del-icon"
          @click="removeResistor(index)"
        >
          <g><g><path d="M500,10C229.3,10,10,229.4,10,500s219.3,490,490,490c270.7,0,490-219.4,490-490S770.7,10,500,10z M727.1,640.4c23.9,23.9,23.9,62.7,0,86.6C715.1,739,699.4,745,683.8,745s-31.4-6-43.3-17.9L500,586.6L359.6,727.1C347.6,739,331.9,745,316.3,745s-31.4-6-43.3-17.9c-23.9-23.9-23.9-62.7,0-86.6L413.4,500L272.9,359.6c-23.9-23.9-23.9-62.7,0-86.6s62.7-23.9,86.6,0L500,413.4l140.4-140.4c23.9-23.9,62.7-23.9,86.6,0c23.9,23.9,23.9,62.7,0,86.6L586.6,500L727.1,640.4z" /></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></g>
        </svg>
      </div>
      <button id="add-button" @click="addResistor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 122.875 122.875"
          enable-background="new 0 0 122.875 122.648"
          xml:space="preserve"
        ><g><path
          fill-rule="evenodd"
          fill="white"
          clip-rule="evenodd"
          d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"
        /></g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [0]
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      resistors: this.modelValue,
      e12: [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2],
      currentE12Index: JSON.parse(localStorage.getItem('currentE12Index') || 1)
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
      this.resistors.push(this.e12[this.currentE12Index])
      localStorage.setItem('resistors', JSON.stringify([...new Set(this.resistors)]))
      this.$emit('update:modelValue', this.resistors)

      if (this.currentE12Index < this.e12.length - 1) {
        this.currentE12Index++
      } else {
        this.currentE12Index = 0
      }
      localStorage.setItem('currentE12Index', JSON.stringify(this.currentE12Index))
    },
    removeResistor (i) {
      if (this.resistors.length > 1) {
        this.resistors.splice(i, 1)
        localStorage.setItem('resistors', JSON.stringify([...new Set(this.resistors)]))
        this.$emit('update:modelValue', this.resistors)
      }
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/common.css');

#add-button {
  width: 30.8px;
  height: 30.8px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

#list {
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

#list input {
  padding-right: 16px;
}

h2 {
  margin-top: 0;
}

.del-icon {
  margin-left: -16px;
  cursor: pointer;
}
</style>
