import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterLink, RouterLinkActive]
})
export class FooterComponent {
  links = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Articles', path: '/articles' },
    { label: 'Templates', path: '/templates' },
    { label: 'Contact', path: '/contact' }
  ]
}
