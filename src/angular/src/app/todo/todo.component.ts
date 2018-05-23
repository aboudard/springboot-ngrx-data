import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../dto/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'NgRx Data & SpringBoot together';
  todo: Todo;
  user = { name: 'Bill' };
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todo = { title: '', description: '', active: true };
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
