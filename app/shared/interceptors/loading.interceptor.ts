import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { LoadingService } from '@shared/services/loading.service'
import { finalize } from 'rxjs/operators'

/**
 * Interceptor responsible for displaying and hiding a global loading indicator
 * during HTTP requests.
 *
 * It automatically shows the loader when a request starts and hides it once
 * the request completes, regardless of success or error.
 */
export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  // Dependency injection
  const loadingService = inject(LoadingService)

  // Show the global loading indicator when a request is initiated
  loadingService.show()

  // Proceed with the request and hide the loader once it's finalized
  return next(req).pipe(finalize(() => loadingService.hide()))
}
