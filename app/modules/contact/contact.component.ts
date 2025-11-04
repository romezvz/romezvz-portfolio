import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [TranslatePipe]
})
export class ContactComponent {
  email = 'romezvz@gmail.com'
  user = '@romezvz →'
}
