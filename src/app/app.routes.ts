import { Routes } from '@angular/router'
import { ROUTES } from '@core/routes/routes'

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.HOME,
    pathMatch: 'full'
  },
  {
    path: ROUTES.HOME,
    loadComponent: () => import('@modules/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: ROUTES.PROJECTS,
    loadComponent: () =>
      import('@modules/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  {
    path: ROUTES.ARTICLES,
    loadComponent: () =>
      import('@modules/articles/articles.component').then((m) => m.ArticlesComponent)
  },
  {
    path: ROUTES.TEMPLATES,
    loadComponent: () =>
      import('@modules/templates/templates.component').then((m) => m.TemplatesComponent)
  },
  {
    path: ROUTES.CONTACT,
    loadComponent: () =>
      import('@modules/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ROUTES.HOME
  }
]
