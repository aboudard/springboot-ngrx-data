import { UtilsService } from './services/utils.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    private utilsService: UtilsService,
    private toastService: ToastService // create an instance of the service that intercepts $entities actions
  ) {
    this.utilsService.initIcons();
  }
}
