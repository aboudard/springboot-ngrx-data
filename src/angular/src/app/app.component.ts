import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {Component, ChangeDetectionStrategy, ViewContainerRef} from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './dto/todo';
import { Observable } from 'rxjs/Observable';
import {ToastService} from "./services/toast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  title = 'NgRx Data & SpringBoot together';

  todo: Todo;
  yearNow: string;
  appVersion: string;
  user = { name: 'Bill' };

  constructor(
    private todosService: TodosService,
    private toastService: ToastService // create an instance of the service that intercepts $entities actions
  ) {

  }


  ngOnInit() {
    this.yearNow = new Date().getFullYear().toString();
    this.appVersion = 'V X.X.X';

    this.todo = {title: '', description: '', active: true};
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.todosService.add(this.todo);
  }

  onClick() {
    this.user = { name : 'Alain' };
  }

  onNewValue(val) {
    console.log(val);
  }
}
