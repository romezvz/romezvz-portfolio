import { Component } from '@angular/core'
import { ArticlesComponent } from '@modules/articles/articles.component'
import { ProjectsComponent } from '@modules/projects/projects.component'
import { TemplatesComponent } from '@modules/templates/templates.component'

@Component({
  selector: 'app-home',
  imports: [ArticlesComponent, ProjectsComponent, TemplatesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
