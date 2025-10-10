import { Component, inject } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
  imports: [ButtonModule],
  providers: [ThemeService]
})
export class ToggleThemeComponent {
  private readonly _themeService = inject(ThemeService)

  constructor() {
    this._themeService.initTheme()
  }

  toggleTheme(): void {
    this._themeService.toggleTheme()
  }
}
