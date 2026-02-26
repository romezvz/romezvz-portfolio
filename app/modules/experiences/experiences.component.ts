import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { EXPERIENCES } from '@shared/constants/global.constants'
import { ExperienceInterface } from '@shared/interfaces/global.interfaces'
import { RouterStateService } from '@shared/services/router-state.service'

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  imports: [RouterLink, TranslatePipe, AsyncPipe],
  providers: [RouterStateService]
})
export class ExperiencesComponent {
  readonly _routerStateService = inject(RouterStateService)
  isHome$ = this._routerStateService.isHome$

  experiences: ExperienceInterface[] = EXPERIENCES
}
