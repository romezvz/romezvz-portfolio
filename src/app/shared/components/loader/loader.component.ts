import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { LoadingService } from '@core/services/loading.service'

@Component({
  standalone: true,
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
  // Dependency injection for services
  readonly _loadingService = inject(LoadingService)
  isLoading$ = this._loadingService.loading$
}
