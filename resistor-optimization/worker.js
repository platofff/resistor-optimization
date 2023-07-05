/* global Module */
let resOptimizer = null
let eventQueue = []

Module.onRuntimeInitialized = function () {
  for (const e of eventQueue) {
    processEvent(e)
  }
  eventQueue = []
}

self.addEventListener('message', function (e) {
  if (Module.calledRun) {
    processEvent(e)
  } else {
    // Module is not ready, queue the event
    eventQueue.push(e)
  }
})

function processEvent (e) {
  if (e.data.type === 'updateResistorList') {
    if (resOptimizer !== null) {
      resOptimizer.delete()
    }
    const rv = new Module.DoubleVector()
    for (const x of new Set(e.data.resistors)) {
      rv.push_back(x)
    }
    resOptimizer = new Module.ResistanceOptimizer(rv)
    rv.delete()
  } else if (e.data.type === 'calculate') {
    const result = resOptimizer.optimize(e.data.targetResistance, e.data.maxResistors)
    postMessage(result)
  }
}
