import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { LinkInterface } from '@shared/interfaces/global.interfaces'
import { ROUTES } from '@shared/routes/routes'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  imports: [RouterLink, RouterLinkActive, TranslatePipe]
})
export class LinksComponent {
  links: LinkInterface[] = [
    { label: 'ROUTES.HOME', path: ROUTES.HOME },
    { label: 'ROUTES.PROJECTS', path: ROUTES.PROJECTS },
    { label: 'ROUTES.ARTICLES', path: ROUTES.ARTICLES },
    { label: 'ROUTES.CONTACT', path: ROUTES.CONTACT }
  ]
}
