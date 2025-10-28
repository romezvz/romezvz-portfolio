import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { RouterStateService } from '@shared/services/router-state.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RouterLink, TranslatePipe, AsyncPipe],
  providers: [RouterStateService]
})
export class ProjectsComponent {
  readonly _routerStateService = inject(RouterStateService)
  isNotHome$ = this._routerStateService.isNotHome$
}
