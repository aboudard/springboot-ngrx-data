import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, takeUntil, shareReplay } from 'rxjs/operators';
import { Observable, combineLatest, Subject } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../dto/todo';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  id$: Observable<any>;
  todo$: Observable<Todo>;
  todoForm: FormGroup;
  destroy$ = new Subject();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService,
    private location: Location
  ) {}

  /**
   * Chargement des entities avec lecture dans le cache
   * Déclaration du reactive form
   * Injection du Todo dans le form
   */
  ngOnInit() {
    this.todo$ = combineLatest(
      this.route.paramMap.pipe(map(paramMap => paramMap.get('id'))),
      this.todosService.entityMap$
    ).pipe(
      map(([id, entityMap]) => {
        const todo = entityMap[id];
        if (!todo) {
          this.todosService.getByKey(id);
        }
        return todo;
      }),
      takeUntil(this.destroy$), // must be just before shareReplay
      shareReplay(1)
    );

    this.todoForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      active: new FormControl(),
      id: new FormControl()
    });

    this.todo$.subscribe((todo: Todo) => {
      if (todo) {
        this.todoForm.patchValue(todo);
      }
    });
  }

  saveTodo() {
    this.todosService.update(this.todoForm.value);
    this.close();
  }
  ngOnDestroy() {
    this.destroy$.next();
  }

  close() {
    this.location.back();
  }
}
