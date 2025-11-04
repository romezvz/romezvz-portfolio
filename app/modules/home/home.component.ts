import { Component } from '@angular/core'
import { ArticlesComponent } from '@modules/articles/articles.component'
import { ProjectsComponent } from '@modules/projects/projects.component'

@Component({
  selector: 'app-home',
  imports: [ArticlesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
