import { Component, inject } from '@angular/core'
import { LangService } from '@core/services/lang.service'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-toggle-lang',
  templateUrl: './toggle-lang.component.html',
  styleUrls: ['./toggle-lang.component.scss'],
  imports: [ButtonModule],
  providers: [LangService]
})
export class ToggleLangComponent {
  private readonly _langService = inject(LangService)

  constructor() {
    this._langService.initLang()
  }

  toggleLang(): void {
    this._langService.toggleLang()
  }
}
