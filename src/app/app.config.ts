import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core'
import { provideRouter, withInMemoryScrolling } from '@angular/router'
import { LoadingInterceptor } from '@core/interceptors/loading.interceptor'
import { provideTranslateService } from '@ngx-translate/core'
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader'
import { ES_LANG, THEME_DARK, THEME_PRESET } from '@shared/constants/global.constants'
import { providePrimeNG } from 'primeng/config'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    /**
     * Provides zone change detection with event coalescing for efficient change detection.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Configures the Angular router with the application's defined routes.
     */
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),

    /**
     * Configures the HTTP client with the fetch strategy for handling HTTP requests.
     */
    provideHttpClient(withFetch()),

    /**
     * Configures the HTTP client with the fetch strategy for handling HTTP requests.
     */
    provideHttpClient(withInterceptors([LoadingInterceptor])),

    /**
     * Imports and sets up translation modules for internationalization (i18n).
     * It uses a factory method to load translation files from the specified location.
     */
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: ES_LANG,
      lang: ES_LANG
    }),

    /**
     * Configures the Angular PrimeNG on the project.
     */
    providePrimeNG({
      theme: {
        preset: THEME_PRESET,
        options: {
          darkModeSelector: '.' + THEME_DARK
        }
      }
    })
  ]
}
