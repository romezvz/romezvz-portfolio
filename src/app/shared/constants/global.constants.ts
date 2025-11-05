import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import {
  ArticleInterface,
  ContactInterface,
  LinkInterface,
  ProjectInterface
} from '@shared/interfaces/global.interfaces'
import { ROUTES } from '@shared/routes/routes'

/* Variables associated with language */
export const LANG = 'lang'
export const ES_LANG = 'es'
export const EN_LANG = 'en'

/* Numeric variables  */
export const ZERO = 0
export const ONE = 1

/* Variables associated with theme styles */
export const THEME = 'theme'
export const THEME_DARK = 'dark'

/* List of links  */
export const LINKS: LinkInterface[] = [
  { label: 'ROUTES.HOME', path: ROUTES.HOME },
  { label: 'ROUTES.PROJECTS', path: ROUTES.PROJECTS },
  { label: 'ROUTES.ARTICLES', path: ROUTES.ARTICLES },
  { label: 'ROUTES.CONTACT', path: ROUTES.CONTACT }
]

/* List of projects  */
export const PROJECTS: ProjectInterface[] = [
  {
    url: 'https://www.ignisgravitas.com/en',
    title: 'PROJECTS.PROJECT_1_TITLE',
    description: 'PROJECTS.PROJECT_1_DESCRIPTION'
  },
  {
    url: 'https://www.profit4lifevnzla.com/',
    title: 'PROJECTS.PROJECT_2_TITLE',
    description: 'PROJECTS.PROJECT_2_DESCRIPTION'
  },
  {
    url: 'https://romezvz.github.io/atomo-virtual/',
    title: 'PROJECTS.PROJECT_3_TITLE',
    description: 'PROJECTS.PROJECT_3_DESCRIPTION'
  }
]

/* List of articles  */
export const ARTICLES: ArticleInterface[] = [
  {
    id: 1,
    title: 'ARTICLES.ARTICLE_1_TITLE',
    description: 'ARTICLES.ARTICLE_1_DESCRIPTION'
  },
  {
    id: 2,
    title: 'ARTICLES.ARTICLE_2_TITLE',
    description: 'ARTICLES.ARTICLE_2_DESCRIPTION'
  },
  {
    id: 3,
    title: 'ARTICLES.ARTICLE_3_TITLE',
    description: 'ARTICLES.ARTICLE_3_DESCRIPTION'
  }
]

/* List of contacts  */
export const CONSTACTS: ContactInterface[] = [
  {
    url: 'mailto:romezvz@gmail.com',
    title: 'Email',
    user: 'romezvz@gmail.com',
    icon: 'pi-inbox'
  },
  {
    url: 'https://www.linkedin.com/in/romezvz/',
    title: 'LinkedIn',
    user: '@romezvz',
    icon: 'pi-linkedin'
  },
  {
    url: 'https://github.com/romezvz',
    title: 'GitHub',
    user: '@romezvz',
    icon: 'pi-github'
  },
  {
    url: 'https://www.instagram.com/romezvz/',
    title: 'Instagram',
    user: '@romezvz',
    icon: 'pi-instagram'
  },
  {
    url: 'https://x.com/romezvz',
    title: 'Twitter',
    user: '@romezvz',
    icon: 'pi-twitter'
  },
  {
    url: 'https://www.strava.com/athletes/165467449',
    title: 'Strava',
    user: '@romezvz',
    icon: 'pi-link'
  }
]

export const THEME_PRESET = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
})
