import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './dto/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  title = 'NgRx Data & SpringBoot together';
  todos$: Observable<Todo[]>;
  yearNow: string;
  appVersion: string;

  constructor(private todosService: TodosService) {
    this.todos$ = todosService.entities$;
  }
  getTodos() {
    this.todosService.getAll();
  }

  ngOnInit() {
    this.yearNow = new Date().getFullYear().toString();
    this.appVersion = 'V X.X.X';
    this.getTodos();
  }

  addTodo(event: Event, todoTitre: string) {
    event.preventDefault();
    this.todosService.add({title: todoTitre, active: true});
  }
  deleteTodo(todoId: number) {
    this.todosService.delete(todoId);
  }

  updateTodo(todo: Todo) {
    todo.active = !todo.active;
    this.todosService.update(todo);
  }
}
