import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.controlDomListeners('on')
  }

  removeDOMListeners() {
    this.controlDomListeners('removeOn')
  }

  controlDomListeners(typeControl) {
    this.listeners.forEach((listener) => {
      this.$root[typeControl](listener, this.getMethodListener(listener))
    })
  }

  getMethodListener(listener) {
    const method = getMethodName(listener)
    if (!this[method]) {
      throw new Error(
          `Method ${method} is not implemented in ${this.name || ''}`
      )
    }
    this[method] = this[method].bind(this)
    return this[method]
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
