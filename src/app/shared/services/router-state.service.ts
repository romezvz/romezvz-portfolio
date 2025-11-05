import { inject, Injectable } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { filter } from 'rxjs/operators'

/**
 * Service responsible for tracking the current router state
 * and exposing whether the user is on the home page or not.
 * It uses a reactive approach via a BehaviorSubject to allow
 * components to subscribe to changes in the navigation state.
 */
@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  isHomeSubject = new BehaviorSubject<boolean>(false)
  isHome$ = this.isHomeSubject.asObservable()

  // Dependency injection
  private readonly _router = inject(Router)

  constructor() {
    // Listen to navigation events and update the isHome state accordingly
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects
        // Update the state: true if home ('/'), false otherwise
        this.isHomeSubject.next(currentUrl === '/')
      })
  }

  /**
   * Returns the current value of isHome.
   * Useful for synchronous access to the state without subscribing.
   */
  get isHome(): boolean {
    return this.isHomeSubject.value
  }
}
