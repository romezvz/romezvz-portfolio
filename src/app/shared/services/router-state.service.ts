import { inject, Injectable } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  isNotHomeSubject = new BehaviorSubject<boolean>(false)
  isNotHome$ = this.isNotHomeSubject.asObservable()
  private readonly _router = inject(Router)

  constructor() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects
        this.isNotHomeSubject.next(currentUrl === '/')
      })
  }

  get isNotHome(): boolean {
    return this.isNotHomeSubject.value
  }
}
