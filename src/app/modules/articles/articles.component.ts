import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { ARTICLES } from '@shared/constants/global.constants'
import { ArticleInterface } from '@shared/interfaces/global.interfaces'
import { ROUTES } from '@shared/routes/routes'
import { RouterStateService } from '@shared/services/router-state.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  imports: [RouterLink, TranslatePipe, AsyncPipe],
  providers: [RouterStateService]
})
export class ArticlesComponent {
  readonly _routerStateService = inject(RouterStateService)
  isHome$ = this._routerStateService.isHome$
  routes = ROUTES

  articles: ArticleInterface[] = ARTICLES
}
