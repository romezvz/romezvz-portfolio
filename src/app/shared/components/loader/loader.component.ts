import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { LoadingService } from '@shared/services/loading.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [CommonModule]
})
export class LoaderComponent {
  // Dependency injection for services
  readonly _loadingService = inject(LoadingService)
  isLoading$ = this._loadingService.loading$
}
