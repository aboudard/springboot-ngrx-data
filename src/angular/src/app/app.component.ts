import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {
  Component,
  ChangeDetectionStrategy,
  ViewContainerRef
} from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './dto/todo';
import { Observable } from 'rxjs';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private toastService: ToastService // create an instance of the service that intercepts $entities actions
  ) {}

  ngOnInit() {}
}
