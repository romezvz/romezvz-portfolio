import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { ToggleLangComponent } from '@shared/components/toggle-lang/toggle-lang.component'
import { ToggleThemeComponent } from '@shared/components/toggle-theme/toggle-theme.component'
import { RouterStateService } from '@shared/services/router-state.service'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    ToggleLangComponent,
    ToggleThemeComponent,
    RouterLink,
    TranslatePipe,
    AsyncPipe,
    ButtonModule
  ],
  providers: [RouterStateService]
})
export class HeaderComponent {
  readonly _routerStateService = inject(RouterStateService)
  isNotHome$ = this._routerStateService.isNotHome$
}
