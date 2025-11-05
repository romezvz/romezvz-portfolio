import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { LINKS } from '@shared/constants/global.constants'
import { LinkInterface } from '@shared/interfaces/global.interfaces'

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  imports: [RouterLink, RouterLinkActive, TranslatePipe]
})
export class LinksComponent {
  links: LinkInterface[] = LINKS
}
