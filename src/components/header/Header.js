import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />
      <div class="buttons">
        <span class="material-symbols-outlined button">
          delete
        </span>
        <span class="material-symbols-outlined button">
          logout
        </span>
      </div>
    `
  }
}
