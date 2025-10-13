import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { ToggleLangComponent } from '@shared/components/toggle-lang/toggle-lang.component'
import { ToggleThemeComponent } from '@shared/components/toggle-theme/toggle-theme.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ToggleLangComponent, ToggleThemeComponent, RouterLink, TranslatePipe]
})
export class HeaderComponent {}
