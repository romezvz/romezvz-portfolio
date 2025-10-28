import { Component, inject, OnInit } from '@angular/core'
import { NavigationEnd, Router, RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { ToggleLangComponent } from '@shared/components/toggle-lang/toggle-lang.component'
import { ToggleThemeComponent } from '@shared/components/toggle-theme/toggle-theme.component'
import { filter } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ToggleLangComponent, ToggleThemeComponent, RouterLink, TranslatePipe]
})
export class HeaderComponent implements OnInit {
  isNotHome = false
  private readonly _router = inject(Router)

  ngOnInit(): void {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects
        this.isNotHome = currentUrl !== '/'
      })
  }
}
