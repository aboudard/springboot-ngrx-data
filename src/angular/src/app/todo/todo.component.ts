import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../dto/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'NgRx Data & SpringBoot together';
  todo: Todo;
  user = { name: 'Bill' };
  loading$: Observable<boolean>;
  constructor(private todosService: TodosService) {
    this.loading$ = this.todosService.loading$;
  }

  ngOnInit() {
    this.todo = { title: '', description: '', active: true, dateTodo: new Date() };
    this.loading$.subscribe(isLoading => {
      console.log('loading : ' + isLoading);
    });
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.todosService.add(this.todo);
  }

  onClick() {
    this.user = { name: 'Alain' };
  }

  onNewValue(val) {
    console.log(val);
  }
}
