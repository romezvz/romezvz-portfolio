import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { CONSTACTS } from '@shared/constants/global.constants'
import { ContactInterface } from '@shared/interfaces/global.interfaces'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [TranslatePipe]
})
export class ContactComponent {
  contacts: ContactInterface[] = CONSTACTS
}
