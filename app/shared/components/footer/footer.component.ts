import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { LinksComponent } from '../links/links.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [LinksComponent, TranslatePipe]
})
export class FooterComponent {}
