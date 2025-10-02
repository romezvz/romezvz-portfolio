import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LangService } from '@core/services/lang.service'
import { ThemeService } from '@core/services/theme.service'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterOutlet, TranslateModule],
  providers: [TranslateService, ThemeService, LangService]
})
export class App {
  private readonly _themeService = inject(ThemeService)
  private readonly _langService = inject(LangService)

  constructor() {
    this._themeService.initTheme()
    this._langService.initLang()
  }

  toggleTheme(): void {
    this._themeService.toggleTheme()
  }

  toggleLang(): void {
    this._langService.toggleLang()
  }
}
