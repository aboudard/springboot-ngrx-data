import { Component, OnInit, inject } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../dto/todo';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent implements OnInit {
  title = 'NgRx Data & SpringBoot together';
  todo: Todo;
  user = { name: 'Bill' };
  loading$: Observable<boolean>;
  todoFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  private todosService: TodosService

  constructor() {
    this.todosService = inject(TodosService);
    this.loading$ = this.todosService.loading$;
  }

  ngOnInit() {
    this.todo = { title: '', description: '', active: true, dateTodo: new Date() };
  }

  addTodo() {
    this.todosService.add({ ...this.todo, ...this.todoFormGroup.value } as Todo);
  }

  onClick() {
    this.user = { name: 'Alain' };
  }

  onNewValue(val) {
    console.log(val);
  }
}
