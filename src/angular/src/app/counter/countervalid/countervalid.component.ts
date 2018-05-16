import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../dto/todo';

@Component({
  selector: 'app-countervalid',
  templateUrl: './countervalid.component.html',
  styleUrls: ['./countervalid.component.scss']
})
export class CountervalidComponent implements OnInit {
  filteredTodos$: Observable<Todo[]>;

  constructor(private todosService: TodosService) {
    todosService.setFilter(true);
    this.filteredTodos$ = todosService.filteredEntities$;
  }

  ngOnInit() {}
}
