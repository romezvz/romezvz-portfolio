import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { ARTICLES } from '@shared/constants/global.constants'
import { ArticleInterface } from '@shared/interfaces/global.interfaces'
import { ROUTES } from '@shared/routes/routes'

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.scss'],
  imports: [TranslatePipe],
  standalone: true
})
export class ArticlesDetailComponent implements OnInit {
  article?: ArticleInterface
  private readonly _router = inject(Router)
  private readonly _activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this.article = ARTICLES.find((a) => a.id === id)

    if (!this.article) {
      this._router.navigate([`/${ROUTES.ARTICLES}`])
    }
  }
}
