import { Injectable } from '@angular/core'
import { ONE, ZERO } from '@shared/constants/global.constants'
import { BehaviorSubject } from 'rxjs'

/**
 * A shared service to manage loading state across the application.
 *
 * Tracks active HTTP requests or any process that should display a global loader.
 * Uses a counter-based approach to handle multiple overlapping calls.
 */
@Injectable({ providedIn: 'root' })
export class LoadingService {
  /** Internal subject to track loading state (true = loading, false = not loading) */
  readonly _loading = new BehaviorSubject<boolean>(false)

  /** Observable stream of the current loading state, for components to subscribe */
  readonly loading$ = this._loading.asObservable()

  /** Tracks the number of active processes requesting loading */
  private _requests = ZERO

  /**
   * Signals the start of a loading process.
   * Increments the internal request counter and emits `true` if it's the first one.
   */
  show(): void {
    this._requests++
    this._loading.next(true)
  }

  /**
   * Signals the end of a loading process.
   * Decrements the internal request counter and emits `false` only if all have completed.
   */
  hide(): void {
    this._requests = Math.max(ZERO, this._requests - ONE)
    if (this._requests === ZERO) {
      this._loading.next(false)
    }
  }

  /**
   * Resets the loading state completely.
   * Useful in edge cases like navigation errors or manual cleanup.
   */
  reset(): void {
    this._requests = ZERO
    this._loading.next(false)
  }
}
