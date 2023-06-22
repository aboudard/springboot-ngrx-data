import { Component, OnInit, inject } from "@angular/core";
import { TodosService } from "../../services/todos.service";
import { Observable } from "rxjs";
import { Todo } from "../../dto/todo";
import { Router } from "@angular/router";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  title: String;
  description: String;

  todos$: Observable<Todo[]>;

  private todosService: TodosService;
  private router: Router;

  constructor() {
    this.router = inject(Router);
    this.todosService = inject(TodosService);
    this.todos$ = this.todosService.entities$;
  }

  testModel() {
    console.log("update");
    return "12";
  }

  getTodos() {
    this.todosService.getAll();
  }

  deleteTodo(todoId: number) {
    this.todosService.delete(todoId);
  }

  updateTodo(todo: Todo) {
    // can't mutate the object directly since NgRx 10
    // todo.active = !todo.active;
    this.todosService.update({ ...todo, active: !todo.active });
  }

  ngOnInit() {
    this.getTodos();
  }

  editTodo(id: number) {
    this.router.navigate(["view", id]);
  }
}
