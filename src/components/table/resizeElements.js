/* eslint-disable no-invalid-this */
import {$} from '@core/dom'

const resizeElements = function(event) {
  if (event.target.dataset.resize) {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $resizer.data.resize
    let value = 0

    document.onmousemove = (e) => {
      $resizer.css({
        opacity: 1
      })
      if (type === 'col') {
        const delta = e.pageX - coords.right
        value = (coords.width + delta)
        $resizer.css({
          right: -delta + 'px',
          height: this.$root.$el.offsetHeight + 'px'
        })
      } else {
        const delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({
          bottom: -delta + 'px',
          width: this.$root.$el.offsetWidth + 'px'
        })
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null

      if (type === 'col') {
        $parent.css({width: value + 'px'})
        this.$root.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => el.style.width = value + 'px')
        $resizer.css({
          opacity: '',
          height: 'auto',
          right: 0
        })
      } else {
        $parent.css({height: value + 'px'})
        $resizer.css({
          opacity: '',
          width: 'auto',
          bottom: 0
        })
      }
      value = 0
    }
  }
}

export default resizeElements
