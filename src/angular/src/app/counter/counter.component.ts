import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: [ './counter.component.scss' ]
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private todosService: TodosService) {
    this.counter$ = this.todosService.count$;
  }

}
