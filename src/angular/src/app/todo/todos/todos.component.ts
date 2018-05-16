import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../dto/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  // title: String;
  // description: String;
  todos$: Observable<Todo[]>;

  constructor(private todosService: TodosService) {
    this.todos$ = todosService.entities$;
  }

  testModel() {
    console.log('update');
    return '12';
  }

  getTodos() {
    this.todosService.getAll();
  }

  deleteTodo(todoId: number) {
    this.todosService.delete(todoId);
  }

  updateTodo(todo: Todo) {
    todo.active = !todo.active;
    this.todosService.update(todo);
  }

  ngOnInit() {
    this.getTodos();
  }
}
