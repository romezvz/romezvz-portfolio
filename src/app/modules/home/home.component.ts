import { Component } from '@angular/core'
import { ArticlesComponent } from '@modules/articles/articles.component'
import { ProjectsComponent } from '@modules/projects/projects.component'
import { ExperiencesComponent } from '@modules/experiences/experiences.component'

@Component({
  selector: 'app-home',
  imports: [ArticlesComponent, ProjectsComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
