import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
      <span class="material-symbols-outlined button">
        format_align_left
      </span>
      <span class="material-symbols-outlined button">
        format_align_center
      </span>
      <span class="material-symbols-outlined button">
        format_align_right
      </span>
      <span class="material-symbols-outlined button">
        format_bold
      </span>
      <span class="material-symbols-outlined button">
        format_italic
      </span>
      <span class="material-symbols-outlined button">
        format_underlined
      </span>
    `
  }

  onClick(event) {
    console.log(event.target)
  }
}
