import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@shared/components/footer/footer.component'
import { HeaderComponent } from '@shared/components/header/header.component'
import { LoaderComponent } from '@shared/components/loader/loader.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent]
})
export class AppComponent {}
